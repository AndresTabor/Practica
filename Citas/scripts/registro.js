//let nuevoRegistro = [];
let dataUsuarios = [];
let fornm = document.querySelector("form");

//obtener registros almacenados
if (localStorage.getItem('registro')) {
    dataUsuarios = JSON.parse(localStorage.getItem('registro'));
}


fornm.addEventListener("submit", (e) => {
    e.preventDefault();
    capturaDatos();
});

//capturar datos
const capturaDatos = () =>{
    let registroUsuario = {};
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let contraseña = (document.getElementById("contraseña").value)
    console.log(typeof(contraseña))
    let correo = document.getElementById("mail").value;
    registroUsuario = { nombre, apellido, contraseña, correo}
    //verificacion de correo
    let validacionEmail = dataUsuarios.filter(user => user.correo == correo)
    if(validacionEmail.length === 0){
        dataUsuarios.push(registroUsuario)
        almacenarDatos(dataUsuarios)
    }else{
        alert ('El correo ya se encuentra en uso')
    }
}

function almacenarDatos(dataRegistro) {
    localStorage.setItem("registro",JSON.stringify(dataRegistro));
    alert("Registro exitoso");
    location.href = "./ingresar.html";
}