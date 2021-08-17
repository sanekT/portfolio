function swiperFunc(){
    const swiper = new Swiper('.swiper-container', {
        //spaceBetween: 25,
        slidesPerView: 1,
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

        // Responsive breakpoints
        breakpoints: {
          907: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          522: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        }
      });
}

export default swiperFunc;