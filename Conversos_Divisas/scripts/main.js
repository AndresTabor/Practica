let cantidadDinero;
let monedaLocal;
let monedaDestino;
//var moneda = ['Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
let dolar = 3789.00;
let euro = 4397.71;
let pesoMexicano = 183.95;
let libraEsterlina = 5142.93;
let total = 0;
let contador = 0;
//Creamos el elemento
const $container = document.getElementById("container");
const advertencia = document.createElement("p");
advertencia.setAttribute("class", "advertencia");
$container.appendChild(advertencia); 
advertencia.style.display="none";

//Ejecutamos la funcion para capturar datos y la de validacion de los mismos
function tomarDatos(){
    cantidadDinero = Number(document.getElementById("dineroAConvertir").value);
    console.log(cantidadDinero);
    monedaLocal = document.getElementById("moneda_elegida").value;
    console.log(monedaLocal); 
    monedaDestino = document.getElementById("moneda_convertir").value;
    console.log(monedaDestino);
    validacion();   
}
//verificamos la moneda que selecciono con un ciclo 
/*moneda.forEach(element =>  {
    if (element == monedaLocal) {
        
    }
});*/
//Validamos los datos y ejecutamos la funcion calcular 
function validacion() {
    advertencia.style.display="block";
    if (monedaLocal == monedaDestino || monedaDestino == "no_seleccion" || monedaLocal == "no_seleccion" || Number.isNaN (cantidadDinero) == true ) {  
        advertencia.innerHTML= "Por favor ingrese datos validos";
        advertencia.style.backgroundColor = "#f44336";
    }
    else{
        advertencia.style.backgroundColor = "green";
        calcularConversion(cantidadDinero);
    }
}

/*function validacion() {
    if (monedaLocal == monedaDestino || monedaDestino == "no_seleccion" || monedaLocal == "no_seleccion" || Number.isNaN (cantidadDinero) == true ) {  
        if (contador == 0) {
            const advertencia = document.createElement("p");
            advertencia.setAttribute("class", "advertencia");
            advertencia.innerHTML= "<strong>Por favor ingrese datos validos</strong>"
            $container.appendChild(advertencia); 
            contador += 1;      
        }
    }
    else{
        calcularConversion(cantidadDinero);
    }
}*/

//Esta funcion permite realizar la conversion de monedas 
function calcularConversion(cantidadDinero){
    switch (monedaLocal) {
        case "p_colombiano":
            if (monedaDestino == "dolar") {
                total= cantidadDinero / dolar;                
            }
            else if (monedaDestino == "p_mexicano") {
                total= cantidadDinero / pesoMexicano;
            }
            else if (monedaDestino == "euro") {
                total= cantidadDinero / euro;
            }
            else if (monedaDestino == "libra_esterlina") {
                total= cantidadDinero / libraEsterlina;
            }
            break;
        case "p_mexicano":
            if (monedaDestino == "dolar") {
                total= cantidadDinero / dolar;                
            }
            else if (monedaDestino == "p_colombiano") {
                total= cantidadDinero * pesoMexicano; 
            }
            else if (monedaDestino == "euro") {
                total= cantidadDinero / euro; 
            }
            else if (monedaDestino == "libra_esterlina") {
                total= cantidadDinero * libraEsterlina; 
            }
            break;
        case "dolar":
            if (monedaDestino == "p_mexicano") {
                total= cantidadDinero * (1/(pesoMexicano/dolar));                
            }
            else if (monedaDestino == "p_colombiano") {
                total= cantidadDinero * dolar; 
            }
            else if (monedaDestino == "euro") {
                total= cantidadDinero * (1/(euro/dolar)); 
            }
            else if (monedaDestino == "libra_esterlina") {
                total= cantidadDinero * (1/(libraEsterlina/dolar)); 
            }
            break; 
        case "euro":
            if (monedaDestino == "dolar") {
                total= cantidadDinero * ((euro/dolar));                
            }
            else if (monedaDestino == "p_colombiano") {
                total= cantidadDinero * euro; 
            }
            else if (monedaDestino == "p_mexicano") {
                total= cantidadDinero * ((euro/pesoMexicano)); 
            }
            else if (monedaDestino == "libra_esterlina") {
                total= cantidadDinero * (1/(libraEsterlina/euro)); 
            }
            break; 
        case "libra_esterlina":
            if (monedaDestino == "dolar") {
                total= cantidadDinero * ((libraEsterlina/dolar));                
            }
            else if (monedaDestino == "p_colombiano") {
                total= cantidadDinero * libraEsterlina; 
            }
            else if (monedaDestino == "p_mexicano") {
                total= cantidadDinero * ((libraEsterlina/pesoMexicano)); 
            }
            else if (monedaDestino == "euro") {
                total= cantidadDinero * ((libraEsterlina/euro)); 
            }
            break;  
    
        default:
            alert("Seleccione una moneda valida");                         
            break;
    }
    advertencia.innerHTML= total;
    
}

