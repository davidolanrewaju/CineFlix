class Movies {
  constructor(url, displayMovie, movieSection) {
    this.url = url;
    this.displayMovie = displayMovie;
    this.movieSection = movieSection;
  }

      getMovies = async () => {
        const response = await fetch(this.url, {
          method: 'GET',
          header: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const data = await response.json();
        return data;
      }

      displayMovies = async () => {
        const movies = await this.getMovies();
        const listOfMovies = movies.results;
        listOfMovies.forEach((movie) => {
          this.displayMovie.innerHTML += `
              <div class="movie_poster">
                  <img class="movie_poster_img" src="https://image.tmdb.org/t/p/w185${movie.poster_path}" alt="moviePoster">
              </div>
              <div class="movie_info">
                <h3 class="movie_info_title">${movie.title}</h3>
                <h5 class="movie_info_release-date">${movie.release_date}</h5>                
            </div>
            <button class="comment_btn">Comment</button>
              `;
          this.movieSection.appendChild(this.displayMovie);
        });
      }
}

export default Movies;