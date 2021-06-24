function toggleSection(){

    let links = document.querySelectorAll('.header__menu a');
    let home = document.querySelector('main .home');
    let works = document.querySelector('main .portfolio');
    let contact = document.querySelector('main .contact');

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
}

export default toggleSection;