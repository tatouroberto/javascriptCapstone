import { ShowLikes } from './displayLikes.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sW84L8HHl7QgRfLX5BO5/likes/';
const getAddedLikes = async () => {
  let likes = [];
  const response = await fetch(url);
  likes = await response.json();
  ShowLikes(likes);
};

export default getAddedLikes;