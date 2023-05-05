const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rwwG9wrwsVDO3muP4hdJ/likes/';
const postLikes = async (key) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: key,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

const getLikes = async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};

export { postLikes, getLikes };
