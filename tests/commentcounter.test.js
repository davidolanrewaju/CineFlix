/**
 * @jest-environment jsdom
 */

import commentsCounter from '../src/modules/commentcounter.js';

test('countItems function should set the correct count in the count container', () => {
  // Set up the DOM for the test
  document.body.innerHTML = `
     <div id="count"></div>
     <div class="comments-box"></div>
     <div class="comments-box"></div>
     <div class="comments-box"></div>
   `;

  // Call the function
  commentsCounter();

  // Check the result
  const count = document.querySelector('#count');
  expect(count.textContent).toBe('3');
});

test('countItems function should set the correct count in the count container when there are 0 comments', () => {
  // Set up the DOM for the test
  document.body.innerHTML = `
     <div id="count"></div>
   `;

  // Call the function
  commentsCounter();

  // Check the result
  const count = document.querySelector('#count');
  expect(count.textContent).toBe('0');
});
