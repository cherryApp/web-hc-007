// Lista generálása a kapott adatok alapján.

// Adatok lekérése a szerverről.
// A cím, ahol a json formátumú adatok találhatóak.
var url = '/api/list.json';

/**
 * A getData függvény az adatok lekéréséért felel.
 * @param {string} url 
 */
function getData(url) {
    fetch(url).then(function(r) {
        return r.json();
    }).then(function(j) {
        // Miután lekértük az adatokat, átadjuk a megjelenítő függvénynek.
        showData(j);
    })
}

/**
 * A kapott adatokat megjeleníti a HTML elemekben.
 * @param {array|object} data 
 */
function showData(data) {
    
}


// Elindítjuk a lekérést.
getData(url);