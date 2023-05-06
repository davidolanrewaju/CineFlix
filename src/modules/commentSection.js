import { addComment, getComment } from './getComment.js';

const commentSection = async (id) => {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment_container');

  const data = await getComment(id);

  commentElement.innerHTML = `
  <div class="comment_container">
    <div class="display_comment">
      <p class="comment_header">Comment (<span id="count"></span>)</p>
      <div id="comments"></div>
    </div>
    <div class="add_comment_container">
      <h3 class="add_comment">Add Comment</h3>
      <form id="form-id">
        <input type="text" value="" id="name" placeholder="Your Name" required><br>
        <textarea id="comment" placeholder="Enter Text" required></textarea><br>
        <button type="button" id="submit-btn" >Submit</button><br>
      </form>
    </div>
  </div>
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
