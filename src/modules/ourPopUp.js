import {
  formComment, showComment, getAddedComments,
} from './ourComments.js';

const popupContainer = document.querySelector('.popup-display');

const renderPopup = async (
  id,
  image,
  name,
  language,
  genres,
  rating,
  schedule,
) => {
  popupContainer.innerHTML = '';

  popupContainer.innerHTML += `
   <div class="show-${id} movie-img-sect">
     <div class="close-icon">X</div>
     <img src=${image.original} alt="" class="movie-img" />
     <h2 class="movie-pop-title display-comments">${name}</h2>
     </div>
   <div class="movie-features">
   <h3 class="padd movie-info">Movie Info</h3>
   <div class="property-container">
   <div class="property-container-1">
     <p class="padd" >Language: ${language}</p>
     <p class="padd" >Genre: ${genres.join(',')}</p>
     </div> 
     <div class="property-container-2">
     <p class="padd">Rating: ${rating.average} <i class="fa-solid fa-star"></i></p>
     <p class="padd" >Schedule: ${schedule.time} on ${schedule.days}s</p>
     </div>
  </div>
     <div class="comments-container"></div
 `;

  const commentsContainer = document.querySelector('.movie-features .comments-container');
  const comments = await getAddedComments(id);

  showComment(comments, commentsContainer);
  formComment(id, commentsContainer);
};

export default renderPopup;