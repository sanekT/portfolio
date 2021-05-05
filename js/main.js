window.onload = function(){
    let btnLeft = document.querySelector('.left');
    let btnRight = document.querySelector('.right');
    let items = document.querySelectorAll('.portfolio__item');
    let arrayItemsLeft = [];
    let arrayItemsCenter = [];
    let arrayItemsRight = [];
    let zIndex = 1;
    let links = document.querySelectorAll('.header__menu a');
    let arrHeaderLi = document.querySelectorAll('.header__menu li');
    let firstHeaderLi = document.querySelectorAll('.header__menu li')[0];
    let home = document.querySelector('main .home');
    let works = document.querySelector('main .portfolio');
    let contact = document.querySelector('main .contact');



    //////////////////////Анимация квадратиков
    let squareContainer = document.querySelector('.square-container');
    let square1 = document.querySelector('.pos1');
	let square2 = document.querySelector('.pos2');
    let square3 = document.querySelector('.pos3');
    let square4 = document.querySelector('.pos4');

    calcPosition(firstHeaderLi);

    let arrPosition1 = [
        {top: 0, left: 15},
        {top: 15, left: 15},
        {top: 15, left: 0},
        {top: 0, left: 0},
        {obj: square1},
        {count: 0}
    ];
    let arrPosition2 = [
        {top: 15, left: 15},
        {top: 15, left: 0},
        {top: 0, left: 0},
        {top: 0, left: 15},
        {obj: square2},
        {count: 0}
    ];
    let arrPosition3 = [
        {top: 15, left: 0},
        {top: 0, left: 0},
        {top: 0, left: 15},
        {top: 15, left: 15},
        {obj: square3},
        {count: 0}
    ];
    let arrPosition4 = [
        {top: 0, left: 0},
        {top: 0, left: 15},
        {top: 15, left: 15},
        {top: 15, left: 0},
        {obj: square4},
        {count: 0}
    ];

    function calcPosition(currentLi){
        let objCoordsCurrentLi = currentLi.getBoundingClientRect();
        squareContainer.style.left = objCoordsCurrentLi.x + (objCoordsCurrentLi.width / 2) - 12 + 'px';
        squareContainer.style.display = 'block';
    }

    function move(obj){
        let sq = obj[4].obj;
        let count = obj[5].count;
        setInterval(function(){
            if(count > 3) count = 0;
            sq.style.top = obj[count].top + 'px';
            sq.style.left = obj[count].left + 'px';
            count++;
        }, 2400);
    }

    move(arrPosition4);
    move(arrPosition3);
    move(arrPosition2);
    move(arrPosition1);
    //////////////////////////////////////




    ////////////////////////////////////При клике добавляет лишкам класс active-menu
    for(let key of arrHeaderLi){
        key.addEventListener('click', function(){
            for(let value of arrHeaderLi){
                value.classList.remove('active-menu');
            }
            this.classList.add('active-menu');
            calcPosition(this);
        });
    }
    ///////////////////////////////////////////////////////



    fillArrays();
    checkAccessBtnLeft(arrayItemsLeft);

    btnLeft.addEventListener('click', handler);
    btnRight.addEventListener('click', handler2);

    function handler(){
        arrayItemsCenter[0].style.zIndex = zIndex;
        arrayItemsCenter[0].classList.add('active-left');
        arrayItemsCenter[0].classList.remove('active');
        arrayItemsLeft.push(arrayItemsCenter[0]);
        arrayItemsCenter.length = 0;
        let temp = arrayItemsRight.pop()
        arrayItemsCenter.push(temp);
        arrayItemsCenter[0].classList.add('active');
        arrayItemsCenter[0].classList.remove('active-right');
        zIndex++;
        if(arrayItemsRight.length == 0){
            btnLeft.disabled = true;
        }
        if(arrayItemsLeft.length > 0){
            btnRight.disabled = false;
        }
    }

    function handler2(){
        zIndex--;
        arrayItemsCenter[0].style.zIndex = 'auto';
        arrayItemsCenter[0].classList.add('active-right');
        arrayItemsCenter[0].classList.remove('active');
        arrayItemsRight.push(arrayItemsCenter[0]);
        arrayItemsCenter.length = 0;
        let temp = arrayItemsLeft.pop()
        arrayItemsCenter.push(temp);
        arrayItemsCenter[0].classList.add('active');
        arrayItemsCenter[0].classList.remove('active-left');
        if(arrayItemsLeft.length == 0){
            btnRight.disabled = true;
            btnLeft.disabled = false;
        }
        if(arrayItemsLeft.length > 0){
            btnLeft.disabled = false;
        }
    }

    function checkAccessBtnLeft(arr){
        if(arr.length == 0){
            btnRight.disabled = true;
        }
    }

    function fillArrays(){
        for(let key in items){
            if(items.hasOwnProperty(key)){
                arrayItemsRight.push(items[key]);
            }
        }
        let active = arrayItemsRight.pop();
        arrayItemsCenter.push(active);
    }



    for(let key of links){
        key.addEventListener('click', function(e){
            e.preventDefault();
            if(key.dataset.hasOwnProperty('portfolio')){
                contact.style.opacity = 0;
                contact.style.zIndex = 0;
                home.style.opacity = 0;
                home.style.zIndex = 0;
                works.style.opacity = 1;
                works.style.zIndex = 1;
            }
            if(key.dataset.hasOwnProperty('home')){
                contact.style.opacity = 0;
                contact.style.zIndex = 0;
                works.style.opacity = 0;
                works.style.zIndex = 0;
                home.style.opacity = 1;
                home.style.zIndex = 1;
            }
            if(key.dataset.hasOwnProperty('contact')){
                contact.style.opacity = 1;
                contact.style.zIndex = 1;
                works.style.opacity = 0;
                works.style.zIndex = 0;
                home.style.opacity = 0;
                home.style.zIndex = 0;
            }
        });
    }
};