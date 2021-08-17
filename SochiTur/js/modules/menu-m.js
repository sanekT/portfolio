function menuM(){
    let div = document.querySelector('.header__top-down-square');
    let menu = document.querySelector('.menu-m');
    let menuUl = document.querySelector('.menu-m__list');

    div.addEventListener('click', function(){
        let a = getComputedStyle(menuUl).display;
        if(a == 'block'){
            menuUl.style.display = 'none';
            menu.style.height = '0px';
            menu.style.padding = '0px';
        }else{
            menuUl.style.display = 'block';
            menu.style.height = 'auto';
            menu.style.paddingTop = '30px';
            menu.style.paddingBottom = '10px';
        }
    })
}

export default menuM;