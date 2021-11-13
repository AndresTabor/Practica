//capturamos el formulario para almacenar la informacion y prevenir la recarga del formulario
let numRegistro = 0;
let resultado;
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    e.preventDefault();
    numRegistro +=1; 
    let sexo;
    document.getElementsByName('sexo').forEach(radio => {
        if (radio.checked) {
            sexo = radio.value;
        }
    });
    let edad = document.getElementById('edad').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    resultado = calcularImc(peso, altura);
    nuevoRegistro(numRegistro, sexo, edad, peso, altura, resultado);
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('range-imc').value = resultado
    getRegistro();
    calcularPromedio();
})

//se genera el arreglo de registros y la funcion que almacena dentro del objeto json de cada registro
let listadoRegistro = [];

function nuevoRegistro(numRegistro, sexo, edad, peso, altura, resultado) {
    let registro = {
        id: numRegistro,
        genero: sexo,
        años: edad,
        peso: peso,
        altura: altura,
        imc: resultado
    };
    listadoRegistro.push(registro);
    localStorage.setItem('registroNuevo', JSON.stringify(listadoRegistro));
}
function calcularImc(peso, altura) {
    let resultado = (peso/(altura**2)).toFixed(2);
    return resultado;
}

