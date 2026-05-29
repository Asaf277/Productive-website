var swiper = new Swiper(".popular-content", {
  effect: "coverflow",
  spaceBetween: 30,

  grabCursor: true,
  slidesPerView: 3,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 55,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

  var cardSwiper = new Swiper(".cardSwiper", {
    effect: "cards",
    grabCursor: true,
    pagination: {
      el: ".cardSwiper .swiper-pagination",
      clickable: true,
    },
  });

  /// show video

  let playButton = document.querySelector('.play-movie');
  let video = document.querySelector('.video-container');
  let myvideo = document.querySelector('#myvideo');
  let closebtn = document.querySelector('.close-video');

  playButton.onclick = () => {
    video.classList.add('show-video');
    myvideo.play();
  }

    closebtn.onclick = () => {
    video.classList.remove('show-video');
    myvideo.pause();
  }