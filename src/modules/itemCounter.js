const countItems = () => {
  const items = document.querySelectorAll('.movie').length;
  let sum = 0;

  for (let i = 0; i <= items; i += 1) {
    sum = i;
  }
  const trendingContainer = document.querySelector('.trending_container');
  trendingContainer.innerHTML = `<div class="trending_movie">Trending (${sum})</div>`;
};

export default countItems;