import './style.css';
import getLike from './modules/gettingLikes.js';
import postLike from './modules/postingLikes.js';
import homePage from './modules/home.js';
import getMovie from './modules/gettingMovies.js';
import renderPopup from './modules/ourPopUp.js';
import movieCounter from './modules/countMovies.js';

const showContainer = document.querySelector('.movie-section');
const popupContainer = document.querySelector('.popup-display');
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
  const movieLink = document.querySelector('.movie');
  movieLink.innerHTML = `Home <i class="fa-solid fa-clapperboard"></i>(${movieCounter()})`;
  movieCounter();

  document.addEventListener('click', async (e) => {
    const button = e.target.closest('.comments-btn');
    const closeButton = e.target.closest('.close-icon');

    if (button) {
      const selectedShow = shows.filter(
        (it) => it.id.toString() === button.id.toString(),
      )[0];
      const {
        id, image, name, language, genres, rating, schedule,
      } = selectedShow;
      showContainer.style.display = 'none';
      popupContainer.style.display = 'flex';
      renderPopup(id, image, name, language, genres, rating, schedule);
    }

    if (closeButton) {
      popupContainer.style.display = 'none';
      showContainer.style.display = 'flex';
      // renderHomePage(shows);
      addEvents();
      getLike();
    }
  });
});