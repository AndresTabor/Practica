let fornm = document.querySelector("form");
fornm.addEventListener("submit", (e) => {
    e.preventDefault();
    capturaDatos();
});
//capturar datos

const capturaDatos = () =>{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = Number(document.getElementById("telefono").value);
    let direccion = document.getElementById("direccion").value;
    let observaciones = document.getElementById("observaciones").value;
    let registroUsuario=[nombre,apellido,telefono,direccion,observaciones];
    console.log(registroUsuario);
    if (Number.isNaN(telefono) == true) {
        alert("ingrese un Teléfono valido");  
    }
    almacenarDatos(registroUsuario);
}

function almacenarDatos(datos) {
    localStorage.setItem("data",datos);
    alert("Datos Enviados");
    location.href = "./index.html";
}