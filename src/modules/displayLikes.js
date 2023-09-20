export const ShowLikes = async (likes) => {
  likes.forEach((like) => {
    const elementid = `show-${like.item_id}`;
    const showLike = document.getElementById(elementid);
    if (showLike !== null) {
      const likeCount = showLike.querySelector('.like-count');
      likeCount.innerHTML = `${like.likes}`;
    }
  });
};

export const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sW84L8HHl7QgRfLX5BO5/likes/';
const getAddedLikes = async () => {
  let likes = [];
  const response = await fetch(url);
  likes = await response.json();
  ShowLikes(likes);
};

export const addLike = async (id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getAddedLikes();
};