import { postLikes, getLikes } from './like-api.js';

const likeSection = (movie) => {
  const likeElement = document.createElement('div');
  likeElement.classList.add('like_container');

  likeElement.innerHTML = `
        <div class="comment_btn_container">
            <button class="comment_btn">Comment</button>
            <i class="material-icons favourite">favorite_border</i>
        </div>
      `;

  const displayLike = async () => {
    const likes = await getLikes();
    const likedItem = likes.find((item) => item.item_id === movie.id);

    const numberOfLikes = likeElement.querySelector('.likes');
    numberOfLikes.innerHTML = `
            ${likedItem.likes}
          `;
  };

  const likeBtn = likeElement.querySelector('.favourite');
  likeBtn.addEventListener('click', async () => {
    await postLikes(movie.id);
    displayLike();
  });

  const displayLikes = document.createElement('div');
  displayLikes.classList.add('display_likes');
  displayLikes.innerHTML = `
    <p>Likes: <span class="likes">${displayLike()}</span></p>
  `;
  likeElement.appendChild(displayLikes);

  return likeElement;
};

export default likeSection;
