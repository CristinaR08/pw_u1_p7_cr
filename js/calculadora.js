var num1 = "";
var num2 = "";
var operacion = null;

function setearValor(valor) {
    //let valorActual = document.getElementById('idDisplay').innerText;
    // console.log(valorActual)
    document.getElementById('idDisplay').innerText = valor;
}

function setearValorConcat(valor) {
    let valorActual = document.getElementById('idDisplay').innerText;
    document.getElementById('idDisplay').innerText = valorActual + valor;
}

function recibirValor(valor) {
    console.log(valor);
    if (operacion === null) {
        num1 += valor;
        setearValor(num1);
    } else {
        num2 += valor;
        setearValorConcat(valor);
    }
}

function evaluarOperacion(op) {
    operacion = op;
    setearValor(op)
}

function igual() {
    let valorFinal = 0;
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (operacion === '+') {
        valorFinal = numero1 + numero2;
    } else if (operacion === '-') {
        valorFinal = numero1 - numero2;
    } else if (operacion === 'X') {
        valorFinal = numero1 * numero2;
    } else if (operacion === '/') {
        valorFinal = numero2 !== 0 ? numero1 / numero2 : "Math ERROR";
    }

    setearValor(valorFinal);
    num1 = typeof valorFinal === "number" ? valorFinal.toString() : "";
    num2 = "";
    operacion = null;
}

function borrar() {
    num1 = "";
    num2 = "";
    operacion = null;
    setearValor(0);
}
