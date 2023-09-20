import './style.css';
import getLike from './modules/gettingLikes.js';
import postLike from './modules/postingLikes.js';
import homePage from './modules/home.js';
import getMovie from './modules/gettingMovies.js';

const addEvents = () => {
  const likeIcon = document.querySelectorAll('.fa-heart');
  likeIcon.forEach((element) => {
    element.addEventListener('click', () => {
      postLike(element.dataset.id);
    });
  });
};

window.addEventListener('load', async () => {
  const shows = await getMovie();
  homePage(shows);
  addEvents();
  getLike();
});