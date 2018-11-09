var url = '/api/cart.json';
var data = null;
function getData(url) {
    fetch(url).then(function (r) {
        return r.json();
    }).then(function (j) {
        data = j;
        load(j);
    })
}

getData(url);

<<<<<<< HEAD
var template = document.querySelector('.product-div');
var cont = document.querySelector('.product-container');
template.style.display = 'none';

function load() {
    for (var k in data) {
        var div = document.createElement('div');
        div.className = 'product-div';
        div.innerHTML = template.innerHTML;

        var aInput = div.querySelector('.amount-input');
        aInput.value = data[k].amount;
        aInput.item = data[k];
        aInput.parent = div;
        aInput.addEventListener('change', function() {
            this.item.amount = this.value;
            this.parent.querySelector('.sum-input').value = getSum(this.item);
        });

        div.querySelector('.name-input').value = data[k].name;
        div.querySelector('.sum-input').value = getSum(data[k]);

        cont.appendChild(div);

    }
}

function getSum(data) {
    return data.price * data.amount;
=======

function load(data) {
    document.querySelector('#del').innerHTML;

    
>>>>>>> dccec2a44b2af956d61f29324194088dc6c35494
}