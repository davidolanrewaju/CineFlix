import axios from 'axios';

const appId = JSON.parse(localStorage.getItem('appId'));

const createComment = async (itemId, name, comment) => {
  const newComment = {
    item_id: itemId,
    username: name,
    comment,
  };

  await axios.post(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments`, newComment);

  const commentInfo = await axios.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments?item_id=${itemId}`);
  const comments = commentInfo.data.map((comment) => ({
    creation_date: comment.creation_date,
    username: comment.username,
    comment: comment.comment,
  }));

  return { comments };
};

const getComments = async (movieId, appId) => {
  let comments = [];
  try {
    const commentInfo = await axios.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments?item_id=${movieId}`);
    comments = commentInfo.data.map((comment) => ({
      creation_date: comment.creation_date,
      username: comment.username,
      comment: comment.comment,
    }));
  } catch (error) {
    return [];
  }
  return comments;
};

export { createComment, getComments };
