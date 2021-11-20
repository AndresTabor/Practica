let dataUsuarios = [];
if (localStorage.getItem('registro')) {
    dataUsuarios = JSON.parse(localStorage.getItem('registro'));
    console.log(dataUsuarios)
}

let fornm = document.querySelector("form");
fornm.addEventListener("submit", (e) => {
    e.preventDefault();
    validacion();
});
//capturar datos

const validacion = () =>{
    let mail = document.getElementById('floatingEmail').value;
    let password = document.getElementById('floatingPassword').value;
    console.log(password);
    console.log(mail);
    let verificacion = dataUsuarios.filter(user => user.correo == mail)
    verificacion.length === 0 ? alert('el usuario no se encuentra registrado') 
    : verificacion[0].contraseña == password ? location.href = "./citas.html"
    : alert('Contraseña incorrecta')  
    
}
