const form1 = document.form1;
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

        // Deshabilito 
        funcionalidad = false;
    } 
    

    else {
        if (contador >= 2) {
            let input = document.querySelectorAll('input')[1]
            let label = document.querySelectorAll('label')[1]
            // agrego nombre al array
            arrayN.push(input.value)
            contador--;
            
            input.placeholder = `Ingresá ${contador} nombre(s) más`;
            label.innerText = `Ingresá ${contador} nombre(s) más`;
            input.value = '';
        } else {
            document.querySelector('#btn1').disabled = true;
            arrayN.push(document.querySelectorAll('input')[1].value)
            document.querySelector('h3').innerText = 'Los nombres ingresados fueron:'
            document.querySelector('p').innerText = `${arrayN.join(', ')}.`;
        }
    }

})
