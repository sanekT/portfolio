function hotels(){
    let objHotels = {
        1: {
            name: 'Богатырь',
            stars: 4
        },
        2: {
            name: 'Жемчужина',
            stars: 5
        },
        3: {
            name: 'Сочи-магнолия',
            stars: 3
        },
        4: {
            name: 'Золотой колос',
            stars: 5
        }
        
    };
    let select = document.querySelector('.form-hotel #hotels');
    let nameHotel = document.querySelector('.order__hotel-img-title');
    let div = document.querySelector('.order__hotel-img');
    let options = select.options;
    
    select.addEventListener('change', function(){
        let str = `img/order/hotel-${this.value}.jpg`
        nameHotel.innerHTML = options[this.value].text;
        let img = document.createElement('img');
        img.src = str;
        document.querySelector('.order__hotel-img img').remove();
        div.append(img);
    });
}

export default hotels;