function setHeightForSections(){
    let sectionHomeHeight = getComputedStyle(document.querySelector('.home')).height;
    let sectionPortfolioHeight = getComputedStyle(document.querySelector('.portfolio')).height;
    let sectionContactHeight = getComputedStyle(document.querySelector('.contact')).height;

    let maxHeight = Math.max(parseInt(sectionHomeHeight),parseInt(sectionPortfolioHeight),parseInt(sectionContactHeight));
    
    document.querySelector('.height').style.height = maxHeight + 'px';
    document.querySelector('.home').style.height = maxHeight + 'px';
    document.querySelector('.portfolio').style.height = maxHeight + 'px';
    document.querySelector('.contact').style.height = maxHeight + 'px';

    let heightScreen = document.documentElement.clientHeight;
    let bodyHeight = parseInt(getComputedStyle(document.body).height);

    if(heightScreen > bodyHeight){
        document.body.style.height = '100vh';
    }

    let num = (parseInt(getComputedStyle(document.body).height) - 52) / 2;
    let num2 = maxHeight / 2;
    let num3 = num - num2;

    document.querySelector('.header').style.marginBottom = num3 + 'px';
}

export default setHeightForSections;