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
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('manufacturer').innerHTML = data.manufacturer;
    document.getElementById('price').innerHTML = data.price;
    document.getElementById('available').innerHTML = data.available;
    document.getElementById('pruduct-img').innerHTML = data.img;
}


