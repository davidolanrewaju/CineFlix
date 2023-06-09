// eslint-disable-next-line import/no-cycle
import commentsCounter from './commentcounter.js';
import commentSection from './commentSection.js';

const pop = document.querySelector('.pop-up');

const displayCommentsPopup = (movieContainer, movie) => {
  const commentButton = movieContainer.querySelector('.comment_btn');
  commentButton.addEventListener('click', async () => {
    pop.innerHTML = '';
    const popUp = document.createElement('div');
    popUp.classList.add('comment_popup');

    popUp.innerHTML = `
          <i class="material-icons close">&#xe888</i>
          <div class="movie_display_section">
          <div class="movieImg_container">
          <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" alt="">
          </div>
          <div class="texts_container">
          <div class="modal_text">
          <h1 class="movie_info_title">${movie.title}</h1>
          <h2 class="movie_info_overview">${movie.overview}</h2>
          </div>
          <div class="sub_text">
          <h3 class="movie_info_release-date"><span>Release Date:</span> ${movie.release_date}</h3>
          <h3 class="movie_info_vote"><span>Vote Count:</span> ${movie.vote_count}</h3>
          </div>
          </div>
          </div>
          `;
    const infos = await commentSection(movie.id);

    popUp.appendChild(infos);
    pop.setAttribute('style', 'display: block');

    pop.appendChild(popUp);

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      pop.style.display = 'none';
    });

    commentsCounter();
  });
};

export { displayCommentsPopup, pop };
