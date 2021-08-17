function toggleSection(){

    let li = document.querySelectorAll('.menu__list-item');
    let home = document.querySelector('main .home');
    let works = document.querySelector('main .portfolio');
    let contact = document.querySelector('main .contact');

    for(let key of li){
        key.addEventListener('click', function(e){
            //e.preventDefault(); 
            if(this.querySelector('a').dataset.section == 'portfolio'){
                abc(0,0,1,1,0,0);
            }
            if(this.querySelector('a').dataset.section == 'home'){
                abc(0,0,0,0,1,1);
            }
            if(this.querySelector('a').dataset.section == 'contact'){
                abc(1,1,0,0,0,0);
            }
        });
    }

    function abc(a1,a2,b1,b2,c1,c2){
        contact.style.opacity = a1;
        contact.style.zIndex = a2;
        works.style.opacity = b1;
        works.style.zIndex = b2;
        home.style.opacity = c1;
        home.style.zIndex = c2;
    }
}

export default toggleSection;
