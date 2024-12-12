document.addEventListener('DOMContentLoaded', function() {
 
var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    // specify options here
  });
 

});

const backgroundVideo = document.querySelector('.background-video');
const backgroundImage = document.querySelector('.image-background');
const movieTitle = document.querySelector('.movie-title');
const trailerVideo = document.getElementById('trailer-video');
const trailor = document.querySelector('.trailor');
const content = document.querySelector('.content');
const year = document.querySelector('.movie-year');
const rating = document.querySelector('.movie-rating');
const duration = document.querySelector('.movie-duration');
const genre = document.querySelector('.movie-genre');
const description = document.querySelector('.movie-description');
const releaseDate = document.querySelector('.release-date');
const toogle= document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav');
const closeIcon= document.querySelector('.fa-x');

const transitionDuration = '0.6s';
backgroundImage.style.transition = `background-image ${transitionDuration}, opacity ${transitionDuration}`;
content.style.transition = `opacity ${transitionDuration}`;

toogle.addEventListener('click', () => {
  navMenu.style.display = 'block'; 
  closeIcon.style.display = 'inline';
});
closeIcon.addEventListener('click', () => {
  navMenu.style.display = 'none';
  closeIcon.style.display = 'none';
  
})

function toogleVideo() {
  if (trailor.classList.contains('active')) {
      // Closing the trailer
      trailor.classList.remove('active');
      trailerVideo.pause();
      backgroundVideo.play(); // Resume background video
  } else {
      // Opening the trailer
      trailor.classList.add('active');
      trailerVideo.play();
      backgroundVideo.pause(); // Pause background video
  }
}
function contentDisplay() {
  content.classList.add('active');
  

  releaseDate.classList.add('active');
  movieTitle.classList.add('active');
}



function Avatar() {
  backgroundVideo.style.display = 'none';  // Hide video
  backgroundImage.style.display = 'block';  // Show image
  backgroundImage.style.opacity = 0;
  setTimeout(() => {
    
  backgroundImage.style.backgroundImage = "url('images/movies/bg-avatar.png')";
  backgroundImage.style.opacity = 1;



  year.innerHTML = 'on september 2025';
  rating.innerHTML = 'PG-13 ⭐⭐⭐⭐';
  duration.innerHTML = '3h 0min';
  genre.innerHTML = 'Science Fiction';
  description.innerHTML = 'Avatar movie will feature an antagonistic tribe of Navi referred to as The Ash People.These Navi are speculated to have ties to fire as opposed to water.';  
  movieTitle.src = 'images/Avatar_Title.png';
  trailerVideo.src = 'images/movies/Avatar_bg.mp4';
  contentDisplay();
}, 300);
}

function Mermaid() {
  backgroundVideo.style.display = 'none';  // Hide video
  backgroundImage.style.display = 'block';  // Show image
  setTimeout(() => {
    backgroundImage.style.backgroundImage = "url('images/movies/bg-little-mermaid.jpg')";
    backgroundImage.style.opacity = 1;  // Fade in new image
  
  
  year.innerHTML = '26 May 2023';
  rating.innerHTML = '⭐⭐⭐⭐';
  duration.innerHTML = ' 2h 15min';
  genre.innerHTML = 'Literary fairy tale';
  description.innerHTML = 'A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water and impress a prince.';
  movieTitle.src = 'images/the-little-mermaid-title.png';
  trailerVideo.src = 'images/movies/the_little_mermaid_trailor.mp4';
  contentDisplay();
}, 300);
}

function sixty_five() {
  backgroundVideo.style.display = 'none';  // Hide video
  backgroundImage.style.display = 'block';  // Show image

  setTimeout(() => {
    backgroundImage.style.backgroundImage = "url('images/movies/bg-65.jpeg')";
    
    backgroundImage.style.opacity = 1;  // Fade in new image
 
  
  year.innerHTML = 'on March 10, 2023';
  rating.innerHTML = '⭐⭐⭐';
  duration.innerHTML = '1h 33min';
  genre.innerHTML = 'Action';
  description.innerHTML = '65 is about an astronaut and his passenger who crash land on a strange planet and must survive prehistoric Earth to escape.';
  movieTitle.src = 'images/the-65-title.png';
  trailerVideo.src = 'images/movies/65_trailor.mp4';
  contentDisplay();
}, 300);
}

function Blackdemon() {
  backgroundVideo.style.display = 'none';  // Hide video
  backgroundImage.style.display = 'block';  // Show image

  setTimeout(() => {
    backgroundImage.style.backgroundImage = "url('images/movies/bg-the-black-demon.jpeg')";
    backgroundImage.style.opacity = 1;  // Fade in new image
  
  
  year.innerHTML = 'On April 2023';
  rating.innerHTML = '⭐⭐⭐⭐';
  duration.innerHTML = '1h 40min';
  genre.innerHTML = ' Horror';
  description.innerHTML = 'Its about a family who face off against a vengeful megalodon shark while stranded on a crumbling rig in Baja. ';

  movieTitle.src = 'images/the-black-demon-title.png';

  trailerVideo.src = 'images/movies/the_black_demon_trailor.mp4';
  contentDisplay();
}, 400);
}

function Convenant() {
  
  backgroundVideo.style.display = 'none';  // Hide video
  backgroundImage.style.display = 'block';  // Show image

  setTimeout(() => {
    backgroundImage.style.backgroundImage = "url('images/movies/bg-the-covenant.jpeg')";
    
    backgroundImage.style.opacity = 1;  // Fade in new image
  
  


  year.innerHTML = 'oN June 2023';
  rating.innerHTML = '⭐⭐⭐';
  duration.innerHTML = '2h 3min';
  genre.innerHTML = 'Action';
  description.innerHTML = 'The Covenant is a 2023 American action drama film co-written, produced and directed by Guy Ritchie.';

  movieTitle.src = 'images/the-covenant-title.png';

  trailerVideo.src = 'images/movies/the_convenent_trailor.mp4';
  contentDisplay();
}, 300);
}

function Tank() {
  backgroundVideo.style.display = 'none';  // Hide video
  backgroundImage.style.display = 'block';  // Show image

  setTimeout(() => {
    backgroundImage.style.backgroundImage = "url('images/movies/bg-the-tank.jpeg')";
    backgroundImage.style.opacity = 1;  // Fade in new image
  
  
  year.innerHTML = 'on April 2023';
  rating.innerHTML = '⭐⭐⭐⭐';
  duration.innerHTML = '1h 40min';
  genre.innerHTML = 'Thriller';
  description.innerHTML = 'The Tank is about a family who accidentally unleash an ancient creature after inheriting an abandoned coastal property. The film was inspired by a real-life situation where the writer and director, Scott Walker, was stranded in New Zealand during the pandemic.';
  movieTitle.src = 'images/the-tank-title.png';
  trailerVideo.src = 'images/movies/The_tank_trailor.mp4';
  contentDisplay();
}, 300);
  
}
