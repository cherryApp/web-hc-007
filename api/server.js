const http = require('http');
const fs = require('fs');
const path = require('path');

const port = '3210';

// create server
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/cart.json':
            console.log('Cart ');
            let fpCart = path.join(__dirname, 'cart.json');
            fs.readFile(fpCart, 'utf8', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                res.end(data);
            });
            break;

        case '/list.json':
            console.log('List ');
            let fpList = path.join(__dirname, 'list.json');
            fs.readFile(fpList, 'utf8', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                res.end(data);
            });
            break;

        case '/product.json':
            console.log('Product ');
            let fpProduct = path.join(__dirname, 'product.json');
            fs.readFile(fpProduct, 'utf8', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                res.end(data);
            });
            break;
         default:
            res.end('Ez a Default oldal');
            break;

    }
});
server.listen(port);