var url = '/api/cart.json';
function getData(url) {
    fetch(url).then(function (r) {
        return r.json();
    }).then(function (j) {
        console.log(j);
    })
}
getData(url);
