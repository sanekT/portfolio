function sliderSwiper(){
    const swiper = new Swiper('.swiper-container', {

        slidesPerView: 3,
        centeredSlides: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1
          },
          // when window width is >= 480px
          420: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      });
}

export default sliderSwiper;