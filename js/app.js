/* ------------------------------------------------------------ /
/                       PRIMER FORMULARIO                      /
/------------------------------------------------------------*/

const form1 = document.querySelector('form[name="form1"]');
const numInput = document.querySelector('#numero');
const grupo2 = document.querySelector('#grupo2');

// Un booleano para que el botón cambie de función entre la primera y la segunda accíón
let funcionalidad = true; 
let arrayN = [];
let contador;

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (funcionalidad === true) {

        contador = numInput.value;

        // Creo el nuevo input + label para pedir nombres
        let nombresInput = document.createElement('input')
        nombresInput.type = 'text';
        nombresInput.required = true;
        nombresInput.className = 'form__input';
        nombresInput.id = 'nombres'
        nombresInput.placeholder = `Ingresá ${numInput.value} nombres`;
        let nombresLabel = document.createElement('label')
        nombresLabel.for = 'nombres';
        nombresLabel.className = 'form__label';
        nombresLabel.innerText = `Ingresá ${numInput.value} nombres`;

        // Los agrego
        grupo2.appendChild(nombresInput);
        grupo2.appendChild(nombresLabel);

        // Deshabilito la primera funcionalidad del boton
        funcionalidad = false;
    } 
    

    else {
        // Mientras falte ingresar nombres
        if (contador >= 2) {
            let input = document.querySelectorAll('input')[1];
            let label = document.querySelectorAll('label')[1];
            // Agrego nombre al array
            arrayN.push(input.value);
            contador--;
            
            input.placeholder = `Ingresá ${contador} nombre(s) más`;
            label.innerText = `Ingresá ${contador} nombre(s) más`;
            input.value = '';
        } else {
            // Deshabilito el botón
            document.querySelector('#btn1').disabled = true;
            // Agrego el último ingreso
            arrayN.push(document.querySelectorAll('input')[1].value);
            // Presento los nombres
            document.querySelector('#form1__h3').innerText = 'Los nombres ingresados fueron:';
            document.querySelector('#form1__p').innerText = `${arrayN.join(', ')}.`;
        }
    }

})

/* ------------------------------------------------------------ /
/                       SEGUNDO FORMULARIO                     /
/------------------------------------------------------------*/


const eleccion = document.querySelectorAll('input[type="radio"]')


function parImpar (opcion) {
    let arrayNum = [];
    let resto;
    opcion === 'par'? resto = 0 : resto = 1; 
    for (let i = 0; i < 100; i++) {
        if (i % 2 === resto && i % 5 === 0) {
            arrayNum.push(i);
        }
    }
    document.querySelector('#form2__h3').innerText = `Los números ${opcion}es y múltiplos de 5 entre 1 y 100:`;
    document.querySelector('#form2__p').innerText = `${arrayNum.join(', ')}.`;
}

// Escucho cambio en la elección del botón
eleccion.forEach((elem) => {
    elem.addEventListener('change', (e) => {
        let o = e.target.value;
        // Corro la función y mando el valor de la elección
        parImpar(o);
    })
})

/* ------------------------------------------------------------ /
/                        TERCER FORMULARIO                     /
/------------------------------------------------------------*/

const form3 = document.querySelector('form[name="form3"]');

const operando1 = document.querySelector('#operando1')
const operando2 = document.querySelector('#operando2')
const operacion = document.querySelector('#operacion')

form3.addEventListener('submit', (e) => {
    let resultado = document.querySelector('#form3__p')
    e.preventDefault();
    console.log(e.target)
    console.log(operando1.value)
    console.log(operacion.value)

    switch (operacion.value) {
        case 'suma':
            resultado.innerText = `El resultado de la operación ${operacion.value} entre los números ${operando1.value} y ${operando2.value} es igual a ${(operando1.value) + (operando2.value)}`;
            break;

        case 'resta':
            resultado.innerText = `El resultado de la operación ${operacion.value} entre los números ${operando1.value} y ${operando2.value} es igual a ${operando1.value - operando2.value}`;
            break;

        case 'mult':
            resultado.innerText = `El resultado de la operación ${operacion.value}iplicación entre los números ${operando1.value} y ${operando2.value} es igual a ${operando1.value * operando2.value}`;
            break;
    }

})