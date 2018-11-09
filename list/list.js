var url = '/api/list.json';
function getData(url) {
    fetch(url).then(function (r) {
        return r.json();
    }).then(function (j) {
        listData(j);
    })
}

getData(url);

function listData(data){
    var template = document.querySelector('.product-card').innerHTML;
    var cards = document.querySelector('.cards');

    for (var k in data) {
        var card = document.createElement('div');
        card.style.display = 'inline-block';
        card.className = 'product-card';
        card.innerHTML = template;
        cards.appendChild(card);

        card.querySelector('.product-img').src = data[k].img;
        card.querySelector('.name').innerHTML = data[k].name;
        card.querySelector('.price').innerHTML = data[k].price;
    }
}


