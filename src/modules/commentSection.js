const commentSection = () => {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment_container');

  commentElement.innerHTML = `
            <h3>Comments:(0)</h3>
            <h3>Add Comment</h3>
            <form>
                <input type="text" id="name" value="Your Name"><br>
                <textarea>Your Comment</textarea><br>
                <button type="button">Submit</button><br>
            </form>
    `;

  return commentElement;
};

export default commentSection;