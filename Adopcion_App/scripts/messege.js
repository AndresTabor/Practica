let titulo = document.getElementById('title');
let bandeja = document.getElementById('bandeja-container');
let cabeceraBandeja = document.getElementById('cabecera-bandeja');
let conversacion = document.getElementById('conversacion-container');
let contenedor = document.getElementById('contenedor');

function viewMessege() {
    titulo.style.display = "none";
    bandeja.style.display = "none";
    cabeceraBandeja.style.display = "none";
    conversacion.style.display = "block";
    contenedor.style.padding = "0";
    
}