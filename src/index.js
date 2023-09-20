import './style.css';
import getLike from './modules/gettingLikes.js';
import postLike from './modules/postingLikes.js';
import homePage from './modules/home.js';
import getMovie from './modules/gettingMovies.js';

const showContainer = document.querySelector('.movie-section');
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

  document.addEventListener('click', async (e) => {
    const button = e.target.closest('.comments-btn');
    const closeButton = e.target.closest('.close-icon');

    if (button) {
      showContainer.style.display = 'none';
    }

    if (closeButton) {
      showContainer.style.display = 'flex';

      addEvents();
      getLike();
    }
  });
});
