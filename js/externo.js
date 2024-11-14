function permiso(idElemento, valor) {
    document.getElementById(idElemento).style.backgroundColor = valor
}

function registro(idElemento) {
    document.getElementById(idElemento).innerText = 'Registro Exitoso';
    document.getElementById(idElemento).style.fontSize = '30px';
    document.getElementById(idElemento).style.backgroundColor = 'coral';
}

function agregarImagen(img, estado) {
    document.getElementById(img).style.display = estado;
}

function desaparecer(nom,apel, ed){
    document.getElementById(nom).innerText = 'BIENVENIDX';
    document.getElementById(apel).style.color = 'white';
    document.getElementById(ed).style.color = 'white'
}