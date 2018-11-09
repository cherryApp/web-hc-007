var url = '/api/cart.json';

function getData(url) {
    fetch(url).then(function (r) {
        return r.json();
    }).then(function (j) {
        load(j);
    })
}

getData(url);

document.getElementById('del').addEventListener('click', load);

function load(data) {
    
}