import './styles.css';
import Movies from './modules/getMovies.js';

const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=5b73fb0f47fa9983cf6c63ff8e835442';
const displayMovie = document.querySelector('.movie');
const movieSection = document.querySelector('#movie_lists');
const movie = new Movies(url, displayMovie, movieSection);

movie.getMovies();
movie.displayMovies();