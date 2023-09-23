import getAddedLikes from './gettingLikes.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sW84L8HHl7QgRfLX5BO5/likes/';

const addLike = async (id) => {
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

export default addLike;