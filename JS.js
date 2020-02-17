let lista = [];

function funkcija(identifikator) {

    let stvari = document.getElementById(identifikator).innerHTML

    let ul = document.getElementById("to");
    let li = document.createElement("li");

    li.innerHTML = stvari;
    lista = [stvari, ...lista];

    ul.appendChild(li);

    ul.addEventListener('click', function(elem) {
        if (elem.target.tagName === 'LI') {
            brisi(elem.target.id);
        }
    });
}

function brisi(index) {

    var ul = document.getElementById('to');
    ul.innerHTML = '';

    for (let stavka of toolbox) {
        let li = document.createElement("li");
        li.innerHTML = stavka;
        lista.splice(index, 1);
        ul.appendChild(li);
    }
}