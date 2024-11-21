const cambiarTexto = (idElemento, valor) => {
    document.getElementById(idElemento).innerText = valor;
}
const cambiarColor = (idElemento, color) => {
    document.getElementById(idElemento).style.color = color;
}
const cambiarTamano = (idElemento, tamanio) => {
    document.getElementById(idElemento).style.fontSize = tamanio;
}
const agregarElemento = (idElemento, elementoHTML) => {
    document.getElementById(idElemento).innerHTML = document.getElementById(idElemento).innerHTML + elementoHTML
}

const conceptosJS = () => {
    /* Tipos de variables JS
    var, let, const */
    let nombre = "Cristina";
    let numero1 = 10;
    let numero2 = 10.1;
    const PI = 3.1416;

    console.log(nombre);
    console.log(numero1);
    console.log(PI);
    console.log("Entro al metodo de calculo");

    /*Declaracion de arreglos*/
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);
    console.log(diasSemana[5]);
    //dentro de JS el concepto de nulo o no existencia: undefined
    //null !== undefined

    let valor = null;
    console.log(valor);

    //guarda al final del arreglo
    diasSemana.push('Sabado');
    console.log(diasSemana);

    diasSemana.unshift('Dias');
    console.log(diasSemana);

    const numerosImpares = [1, 3, 5, 7, 9, 11]
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10, 12]
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Al fin viernes!!!')
        } else {
            console.log('Aun no llega viernes :c')
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre: "Cristina",
        apellido: "Rivera",
        edad: 26,
        genero: "Femenino",
        ciudadNacimiento: "Quito"
    }

    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);

    if (miEstudiante.edad === 33) {
        console.log('Tiene 33')
    } else {
        console.log('Ya no tiene 33')
    }

    miEstudiante.apellido = 'Teran';
    console.log(miEstudiante);

    //Declaraciones de atributos
    const miProfesor = {
        nombre: "Daniel",
        apellido: "Tobart",
        edad: null,
        direccion: {
            calle: "Av. America",
            casa: "120",
            barrio: "Rumipamba"
        }
    }

    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle = "10 de Agosto";
    console.log(miProfesor);
    console.log(miProfesor.estatura); //undifined (no existe)
    console.log(miProfesor.edad); //existe pero el valor es null

    if (miProfesor.edad === miProfesor.estatura) {
        console.log('Son iguales');
    } else {
        console.log('No son lo mismo');
    }

    //Arreglo de objetos
    console.log("Arreglo de objetos")
    const est1 = {
        nombre: "Cristina",
        apellido: "Rivera",
        edad: 26
    }

    const est2 = {
        nombre: "Daniel",
        apellido: "Teran",
        edad: 15
    }

    const est3 = {
        nombre: "Vannesa",
        apellido: "Castillo",
        edad: 39
    }

    const arregloEstudiantes = [est1, est2, est3];
    console.log(arregloEstudiantes)
    console.log(arregloEstudiantes[1])
    console.log(arregloEstudiantes[1].nombre)

    const arregloEstudiantes2 = [
        { nombre: "Carlos", apellido: "Tobar", edad: 35 },
        { nombre: "Anita", apellido: "Teran", edad: 39 },
        { nombre: "Andrea", apellido: "Andrade", edad: 31 },
        { nombre: "Daniel", apellido: "Correa", edad: 39 },
        { nombre: "Carla", apellido: "Castillo", edad: 31 }];

    console.log(arregloEstudiantes2);
    console.table(arregloEstudiantes2);

    //uso del pop
    console.log("uso del pop")
    const estudiante = arregloEstudiantes2.pop();
    console.log(estudiante);
    console.table(arregloEstudiantes2);

    //Desestructuración de arreglos
    const colores = ['Amarillo', 'Azul', 'Verde', 'Rojo', 'Rosado'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c5);

    const [m1, m2, m3, m4, m5] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
    console.log(m1);
    console.log(m5);
    //console.log(m8); //undefined

    const [, mes2, , , mes5] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
    console.log(mes2);
    console.log(mes5);

    //Desestructuración de objetos
    console.log("Desestructuracion de objetos")
    const automovil = {
        marca: 'Toyota',
        modelo: 'Pruis',
        anio: 2024,
        color: 'Plateado'
    }

    /*
        const { modelo, anio, marca, color } = automovil;
        console.log(marca);
        console.log(modelo);
        console.log(anio);
        console.log(color);*/

    desestructuracion(automovil);

    const { nombreP, raza, estatura } = { nombre: "Perro", raza: "Pastor", estatura: 120 }
    console.log(nombreP);
    console.log(raza);
    console.log(estatura);

    //desestructuración con un atributo de tipo objeto - complejo
    //desestructurar el tipo objeto
    const miTienda = {
        nombre: "Cris' Shop",
        dueño: "Cristina Rivera",
        fechaInicio: 2024,
        direccion: {
            calle: "Cayetano Cestaris",
            casa: "S897",
            barrio: "Colmena"
        }
    }

    //en dos pasos
    /*const { dueño, direccion } = miTienda;
    const { calle, casa, barrio} = direccion;

    console.log(calle);*/

    //en una sola linea
    const dTienda = { dueño, direccion:{calle, casa, barrio} } = miTienda;
    console.log(calle);
    console.log(casa);
    console.log(barrio);

}

// const desestructuracion = (automovil) 
const desestructuracion = ({ modelo, anio, marca, color }) => {
    console.log('Entro a desestructurar')
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}