const commentsCounter = () => {
  const items = document.querySelectorAll('.comments-box').length;
  let sum = 0;

  for (let i = 0; i <= items; i += 1) {
    sum = i;
  }
  const count = document.querySelector('#count');
  count.textContent = `${sum}`;
};
export default commentsCounter;