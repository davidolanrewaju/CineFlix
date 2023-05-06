import { addComment, getComment } from './getComment.js';

const commentSection = async (id) => {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment_container');

  const data = await getComment(id);

  commentElement.innerHTML = `

  &nbsp;Comment&nbsp;(<span id="count"></span>)
  <h3>Add Comment</h3>
  <div id="comments"></div>
  <form id="form-id">
  <input type="text" value="" id="name" placeholder="Your Name" required><br>
  <textarea id="comment" placeholder="Enter Text" required></textarea><br>
  <button type="button" id="submit-btn" >Submit</button><br>
  </form>
  `;

  const commentList = commentElement.querySelector('#comments');
  const submitBtn = commentElement.querySelector('#submit-btn');
  const countComment = commentElement.querySelector('#count');

  if (data.length > 0) {
    data.forEach((comment) => {
      commentList.innerHTML += `<div class="comments-box"  >${comment.creation_date} ${comment.username}: ${comment.comment}</div>`;
    });
  } else {
    commentList.innerHTML = '<div>No comments yet.</div>';
  }

  submitBtn.addEventListener('click', async () => {
    const userName = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    const form = document.querySelector('#form-id');
    if (userName.trim() === '' && comment.trim() === '') {
      // handle empty input
    } else {
      await addComment(id, userName, comment);
      form.reset();
      commentList.innerHTML = ''; // clear existing comments
      const data = await getComment(id); // get updated comments
      countComment.textContent = data.length; // update comments counter
      if (data.length > 0) {
        data.forEach((comment) => {
          commentList.innerHTML += `<div class="comments-box">${comment.creation_date} ${comment.username}: ${comment.comment}</div>`;
        });
      } else {
        commentList.innerHTML = '<div>No comments yet.</div>';
      }
    }
  });

  return commentElement;
};

export default commentSection;
