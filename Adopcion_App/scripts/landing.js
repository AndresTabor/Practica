let logo = document.getElementById("logo");
const contenedor = document.getElementById('contenedor');

document.addEventListener('click', inicial)

function inicial(){
    logo.style.height = "150px"
    logo.style.width = "150px"
    setTimeout(() =>{
        window.location.href = "landing.html";
    }, 1000)
}