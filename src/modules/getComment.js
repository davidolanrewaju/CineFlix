// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/etL4WYQ30ddjnqhglbpf/comments';

// const fetchCommentAPI = async (itemId, userName, comment) => {
//   const response = await fetch(url, {
//     method: 'POST',
//     body: {
//       "item_id": itemId,
//       "username": userName,
//       "comment": comment,
//   },
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
//   console.log(response);
//   return response;
// }

// const getCommentAPI = async () => {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

//export { fetchCommentAPI, getCommentAPI};

export const getComment = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments?item_id=${id}`);
    const data = await response.json()
    return data;
  } catch (error) {
  }
}

export const addComment = async (id, username, comment) => {
  try {const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const info = await response.json();
  return info;
}catch(error){

}
}