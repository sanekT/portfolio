let one = document.querySelector('.tarifs__item-one');
let two = document.querySelector('.tarifs__item-two');
let three = document.querySelector('.tarifs__item-three');
let titleYellow = document.querySelector('.titles__title--yellow');
let titleWhite = document.querySelector('.titles__title--white');
let itemOne = document.querySelector('.bonuses__item--one');
let itemTwo = document.querySelector('.bonuses__item--two');
let itemThree = document.querySelector('.bonuses__item--three');
let itemFour = document.querySelector('.bonuses__item--four');
let downloadTitle = document.querySelector('.download__title');
let downloadText = document.querySelector('.download__text');
let buttonUp = document.querySelector('.button-up');
let menuMobile = document.querySelector('.menu__mobile');
let menu = document.querySelector('.menu');
let flag = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;
let t;


///////прокрутка вверх
if(buttonUp){
    buttonUp.addEventListener('click', up);
}

function up(){
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-50);
		t = setTimeout('up()',10);
	} else clearTimeout(t);
	return false;
}
////////


menuMobile.addEventListener('click', function(){
    let state = getComputedStyle(menu).opacity;
    if(state == 0){
        menu.style.opacity = 1;
    }else{
        menu.style.opacity = 0;
    }
})

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 1000 && flag4){
        buttonUp.style.opacity = 1;
        flag4 = false;
    }
    if(window.pageYOffset > 1000 && window.pageYOffset < 1800 && flag){
        one.style.transform = 'translate(0%)';
        one.style.opacity = 1;
        setTimeout(function(){
            two.style.transform = 'translate(0%)';
            two.style.opacity = 1;
        }, 400);
        setTimeout(function(){
            three.style.transform = 'translate(0%)';
            three.style.opacity = 1;
        }, 800);
        flag = false;
    }

    if(window.pageYOffset > 1800 && window.pageYOffset < 2625 && flag2){
        titleYellow.style.transform = 'translateX(0%)';
        titleYellow.style.opacity = 1;
        titleWhite.style.transform = 'translateY(0%)';
        titleWhite.style.opacity = 1;
        itemOne.style.transform = 'translateY(0%)';
        itemOne.style.opacity = 1;
        setTimeout(function(){
            itemTwo.style.transform = 'translateY(0%)';
            itemTwo.style.opacity = 1;
        }, 400);
        setTimeout(function(){
            itemThree.style.transform = 'translateY(0%)';
            itemThree.style.opacity = 1;
        }, 1100);
        setTimeout(function(){
            itemFour.style.transform = 'translateY(0%)';
            itemFour.style.opacity = 1;
        }, 800);
        console.log(flag);
        flag2 = false;
    }

    if(window.pageYOffset > 2625  && flag3){
        downloadTitle.style.transform = 'translateX(40%)';
        downloadTitle.style.opacity = 0.5;
        setTimeout(function(){
            downloadTitle.style.transform = 'translateX(0)';
            downloadTitle.style.opacity = 1;
        }, 1000)
        setTimeout(function(){
            downloadText.style.transform = 'translateX(40%)';
            downloadText.style.opacity = 0.5;
        }, 300)
        setTimeout(function(){
            downloadText.style.transform = 'translateX(0)';
            downloadText.style.opacity = 1;
        }, 1300)
        flag3 = false;
    }
})