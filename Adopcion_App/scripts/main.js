const btnCategoriaDog = document.getElementById('btn-categoria-dog');
const btnCategoriaCat = document.getElementById('btn-categoria-cat');
const element = document.getElementById('contenedor-elementos');
if(localStorage.getItem('categoriaActual')){
    categoriaActual = localStorage.getItem('categoriaActual')
}else{
    categoriaActual = 'dogs/'
}

const dataEnpoint = 'http://localhost:4002/';

//optengo la data segun la categoria
btnCategoriaDog.addEventListener('click', () => {
    categoriaActual = 'dogs/';
    dataLoad = getPets(dataEnpoint + categoriaActual);
    element.innerHTML =" ";
    showPets(dataLoad, element);
})

btnCategoriaCat.addEventListener('click', () => {
    categoriaActual = 'cats/';
    dataLoad = getPets(dataEnpoint + categoriaActual);
    element.innerHTML =" ";
    showPets(dataLoad, element);
})
//carga la data de los perros al inicio
document.addEventListener ('DOMContentLoaded', async () => {
    dataLoad = await getPets(dataEnpoint + categoriaActual);
    showPets(dataLoad,element);

})
//optengo la data de las pets
const getPets = async(url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
    
}
//pinto la data en el DOM
const showPets = async(list,element) => {
    const pets = await list;
    pets.forEach(pet => {
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
}

//detecto click en la card
element.addEventListener('click', async(e) => {
    const cardDetalles = e.target.classList.contains("detector");
    const id = e.target.id;
    //busco la la data de la card y envio al localStorage                         
    if(cardDetalles){
        const data = await getPets(dataEnpoint + categoriaActual);
        const petView = data.find(pet => pet.id === Number(id));
        localStorage.setItem("Detail",JSON.stringify(petView));
        localStorage.setItem('categoriaActual', categoriaActual);
        window.location.href = "../details.html"
    }  

})


