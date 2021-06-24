function animSquare(){
    let squareContainer = document.querySelector('.square-container');
    let square1 = document.querySelector('.pos1');
	let square2 = document.querySelector('.pos2');
    let square3 = document.querySelector('.pos3');
    let square4 = document.querySelector('.pos4');
    let firstHeaderLi = document.querySelectorAll('.header__menu li')[0];
    let arrHeaderLi = document.querySelectorAll('.header__menu li');

    calcPosition(firstHeaderLi);

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
}

export default animSquare;