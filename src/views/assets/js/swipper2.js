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
  });