var num1 = 0;
var num2 = 0;
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

function recibirValor(valor){
    console.log(valor);
    if (operacion === null) {
        num1 = num1 *10 + valor;
        setearValor(num1);
    } else {
        num2 = valor;
        setearValorConcat(num2);
    }
}

function evaluarOperacion(op){
    operacion = op;
    setearValor(op)
}

function igual() {
    let valorFinal = 0;
    if (operacion === '+') {
        valorFinal = num1 + num2;
    } else if (operacion === '-') {
        valorFinal = num1 - num2;
    } else if (operacion === 'X') {
        valorFinal = num1 * num2;
    } else if (operacion === '/') {
        if (num2 !== 0) {
            valorFinal = num1 / num2;
        } else {
            valorFinal = "Math ERROR";
        }
    }

    setearValor(valorFinal);
    num1 = valorFinal === "number" ? valorFinal : 0;
    num2 = 0;
    operacion = null;
}

function borrar(){
    num1 = 0;
    num2 = 0;
    operacion = null;
    setearValor(0);
}
