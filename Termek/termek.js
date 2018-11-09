var url = '/api/product.json';

function getData(url) {
    fetch(url).then(function (r) {
        return r.json();
    }).then(function (j) {
        loadData(j);
    })
}
getData(url);

function loadData(data){
    document.getElementById('name').innerHTML = data.name ;
    document.getElementById('manufacturer').innerHTML = data.manufacturer ;
    document.getElementById('price').innerHTML = data.price ;
    document.getElementById('available').innerHTML = data.available ;
    document.getElementById('description').innerHTML = data.description ;
    document.getElementById('ratings').innerHTML = data.ratings ;

}

