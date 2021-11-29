let favoritos = [];
const element = document.getElementById('contenedor-elementos');

if(localStorage.getItem('favoritos')){
    favoritos = JSON.parse(localStorage.getItem('favoritos'));
}

if(localStorage.getItem('categoriaActual')){
    categoriaActual = localStorage.getItem('categoriaActual')
}else{
    categoriaActual = 'dogs/'
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

element.addEventListener('click', (e) => {
    const cardDetalles = e.target.classList.contains("detector");
    const id = e.target.id;
    
    //busco la  data de la card y envio al localStorage                         
    if(cardDetalles){
    //     const data = await getPets(dataEnpoint + categoriaActual);
    const petView = favoritos.find(pet => pet.id === Number(id));
    localStorage.setItem("Detail",JSON.stringify(petView));
    localStorage.setItem('categoriaActual', categoriaActual);
    window.location.href = "../details.html"
    }  

})








