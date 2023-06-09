import { postLikes, getLikes } from './like-api.js';
// Like Section
const likeSection = async (movie) => {
  const likeElement = document.createElement('div');
  likeElement.classList.add('like_container');

  likeElement.innerHTML = `
        <div class="comment_btn_container">
            <button id='${movie.id}' class="comment_btn">Comment</button>
            <i class="material-icons favourite">favorite_border</i>
        </div>
      `;

  // Display Likes
  const displayLike = async () => {
    const likes = await getLikes();
    const likedItem = likes.find((item) => item.item_id === movie.id);
    return likedItem?.likes || 0;
    // Also the same as if(linkedItem){return linkedItem.likes} else{return 0}
  };

  // Click eventlistener to post like to API
  const likeBtn = likeElement.querySelector('.favourite');
  likeBtn.addEventListener('click', async () => {
    await postLikes(movie.id);
    const likesElement = likeElement.querySelector('.likes');
    likesElement.textContent = await displayLike();
  });

  // Display Likes in the HTML DOM
  const displayLikes = document.createElement('div');
  displayLikes.classList.add('display_likes');
  displayLikes.innerHTML = `
    <p>Likes: <span class="likes">${await displayLike()}</span></p>
  `;
  likeElement.appendChild(displayLikes);

  return likeElement;
};

export default likeSection;
