/**
 * @jest-environment jsdom
 */

import countItems from '../modules/itemCounter.js';

test('countItems function should set the correct count in the trending container', () => {
  // Set up the DOM for the test
  document.body.innerHTML = `
    <div class="trending_container"></div>
    <div class="movie"></div>
    <div class="movie"></div>
    <div class="movie"></div>
  `;

  // Call the function
  countItems();

  // Check the result
  const trendingMovie = document.querySelector('.trending_movie');
  expect(trendingMovie.textContent).toBe('Trending (3)');
});

test('countItems function should set the correct count in the trending container when there are 0 movies', () => {
  // Set up the DOM for the test
  document.body.innerHTML = `
    <div class="trending_container"></div>
  `;

  // Call the function
  countItems();

  // Check the result
  const trendingMovie = document.querySelector('.trending_movie');
  expect(trendingMovie.textContent).toBe('Trending (0)');
});
