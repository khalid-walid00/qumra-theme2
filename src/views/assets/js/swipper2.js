var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });