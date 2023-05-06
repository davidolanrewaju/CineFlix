export const getComment = async (id) => {
  
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments?item_id=${id}`);
    const data = await response.json()
    return data;
  
}

export const addComment = async (id, username, comment) => {
  try {const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments/', {
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
  //console.error(error);
  //return null;
}
}