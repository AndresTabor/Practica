let favoritos = [];
const element = document.getElementById('contenedor-elementos');

if(localStorage.getItem('favoritos')){
    favoritos = JSON.parse(localStorage.getItem('favoritos'));
    console.log(favoritos)
}

document.addEventListener('DOMContentLoaded', () =>{
    favoritos.forEach(pet => {
        const {id, img, name, raza} = pet;
        
        element.innerHTML += `
        <div class="card-container" style="background-image:url(${img})";> 
        <div class="efecto h-100 w-100"></div>                                
            <div class="text-white description-container">
                <h5 class="">${name}</h5>
                <p class="">${raza}</p>
            </div>
            <div class="detector" id= ${id}></div>
        </div>
        `
    })

})








