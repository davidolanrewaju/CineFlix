import Movies from './getAPI.js';
// eslint-disable-next-line import/no-cycle
import { displayCommentsPopup, pop } from './popup.js';
import likeSection from './postLikes.js';

const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=5b73fb0f47fa9983cf6c63ff8e835442';

const displayMovies = document.querySelector('.movie_lists');
const movieSection = document.querySelector('#movie_section');

const movie = new Movies(url);
movie.getMovies();

const displayList = async () => {
  const movies = await movie.getMovies();
  const listOfMovies = movies.results;

  listOfMovies.forEach(async (movie) => {
    pop.innerHTML = '';
    const movieContainer = document.createElement('div');

    movieContainer.classList.add('movie');

    movieContainer.innerHTML = `
        <div class="movie_poster">
          <img class="movie_poster_img" src="https://image.tmdb.org/t/p/w185${movie.poster_path}" alt="moviePoster">
        </div>
        <div class="movie_info">
          <h3 class="movie_info_title">${movie.title}</h3>
          <h5 class="movie_info_release-date">${movie.release_date}</h5>
        </div>
      `;
    movieContainer.appendChild(await likeSection(movie));
    displayMovies.appendChild(movieContainer);
    displayCommentsPopup(movieContainer, movie);
  });
  movieSection.appendChild(displayMovies);
};

export default displayList;
