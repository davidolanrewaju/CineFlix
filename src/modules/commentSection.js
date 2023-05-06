import { addComment ,getComment } from "./getComment.js";
import commentsCounter from './commentcounter.js';


// getData()

const commentSection = async (id) => {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment_container');

  const data = await getComment(id);
  
  commentElement.innerHTML = `

  &nbsp;Comment&nbsp;[<span id="count">${commentsCounter(data)}</span>]
  <h3>Add Comment</h3>
  <div id="comments"></div>
  <form id="form-id">
  <input type="text" id="name" placeholder="Your Name" required><br>
  <textarea id="comment" placeholder="Enter Text" required></textarea><br>
  <button type="button" id="submit-btn" >Submit</button><br>
  </form>
  `;
  
  const commentList= commentElement.querySelector('#comments');
  const submitBtn = commentElement.querySelector('#submit-btn');
  const countComment= commentElement.querySelector('#count');
  // const itemId = movie.id;


  console.log(data);
  data.forEach((comment) => {
         commentList.innerHTML+=`<div>${comment.creation_date} ${comment.username}: ${comment.comment}</div>`
      
     });
  

       commentElement.addEventListener('load',() =>{
      countComment.innerHTML=`${commentsCounter(counter)}`
    })

    submitBtn.addEventListener('click',()=>{
      const userName = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    const form = document.querySelector('#form-id')
    if (userName.trim() === '' && comment.trim() === '') {
      
    } else {
      addComment(id,userName,comment)
        }
form.reset()   
   })

  return commentElement;
};

export default commentSection; 
