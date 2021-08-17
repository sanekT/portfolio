import squareAnimation from './modules/square-animation.js';
import toggleSection from './modules/toggle-section.js';
import sliderSwiper from './modules/slider-swiper.js';
import setHeightForSections from './modules/set-height-sections.js';

window.onload = function(){
    squareAnimation();
    toggleSection();
    sliderSwiper();
    setHeightForSections();
};