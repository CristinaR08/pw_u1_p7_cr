var num1 = 0;
var num2 = 0;

function setearValor(valor) {
    let valorActual = document.getElementById('idDisplay').innerText;
    console.log(valorActual)
    document.getElementById('idDisplay').innerText = valor;
}

function setearValorConcat(valor) {
    let valorActual = document.getElementById('idDisplay').innerText;
    console.log(valorActual)
    document.getElementById('idDisplay').innerText = valorActual + valor;
}

function recibirValor(valor){
    console.log(valor);
    if(num1===null){
        num1 = valor;
    }else{
        num2 = valor;
    }
}

function evaluarOperacion(op){
    operacion = op;
    setearValorConcat
}

// function recibirValor2(valor){
//     console.log(valor);
//     this.num2 = valor;
//     console.log(num2);
//     console.log(num1);
// }

function igual(){
    let valorFinal;
    if(operacion === '+'){
        num1 + num2;
    }else if(operacion === '-'){
        num1 - num2;
    }else if(operacion === 'X'){
        num1*num2;
    }setearValor(valorFinal);
}

