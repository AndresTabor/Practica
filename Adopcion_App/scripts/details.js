const details = JSON.parse(localStorage.getItem('Detail'));
const {id, img, name, sexo, raza, edad, ubicacion, personalidad, historia, contacto, imgContacto} = details;
let favoritos = [];
if(localStorage.getItem('favoritos')){
    favoritos = JSON.parse(localStorage.getItem('favoritos'));
}



//Muestro la informacion al cargar el DOM
document.addEventListener('DOMContentLoaded', () =>{
    //const details = JSON.parse(localStorage.getItem('Detail'));
    const element = document.getElementById('contenedor-ppal'); 
    
    //Asigno los iconos segun la informacion en el local Storage
    let generoIcon;
    sexo === "Macho" ? generoIcon = "./images/icons/male.png" 
    : generoIcon = "./images/icons/female.png";

    const personalityIcon = {
        "Jugueton" : "./images/icons/playful.png",
        "Inquieto" : "./images/icons/restless.png",
        "Tierno"   : "./images/icons/loving.png",
        "Cariñoso" : "./images/icons/tender.png"
    }
    let pIcon= [];
    personalidad.forEach(e => {
        pIcon.push(personalityIcon[e]);
    });
    
    element.innerHTML = `
    <div class="img-container" style= "background-image: url(${img})";>
            <div class="arrow-container">
                <a href="./home.html">
                    <i 
                    class="bi bi-arrow-left-short" 
                    id="back-arrow">
                    </i>
                </a>
            </div>
        </div>
        <div id="details-container">
            <div id="pet-info">
                <div>
                    <h1>${name}</h1>
                    <div 
                    class="gender-icon"
                    style="background-image: url(${generoIcon});">
                    </div>
                    <button id="btn-fav" onclick="sendFavorites()">
                        <i 
                        class="bi bi-suit-heart-fill" 
                        id="icon-fav"></i>
                    </button>
                </div>
                <div class="secondary-info">
                    <div class="info-container">
                        <div 
                        class="race-icon"
                        style="background-image: url(./images/icons/race.png);">
                        </div>
                        <p>${raza}</p>
                    </div>
                    <div class="info-container">
                        <div 
                        class="race-icon"
                        style="background-image: url(./images/icons/age.png);">
                        </div>
                        <p>${edad}</p>
                    </div>    
                </div>
                <div id="location">
                    <i class="bi bi-geo-alt"></i>
                    <p>
                    ${ubicacion}
                    </p>
                </div>
            </div>
            <div id="pet-personality">
                <h2>Personalidad</h2>
                <div id="personality-container">
                    <div class="personality-description">
                        <div 
                        class="personality-icon"
                        style="background-image: url(${pIcon[0]});">
                        </div>
                        <p>${personalidad[0]}</p>
                    </div>
                    <div class="personality-description">
                        <div 
                        class="personality-icon"
                        style="background-image: url(${pIcon[1]});">
                        </div>
                        <p>${personalidad[1]}</p>
                    </div>
                    <div class="personality-description">
                        <div 
                        class="personality-icon"
                        style="background-image: url(${pIcon[2]});">
                        </div>
                        <p>${personalidad[2]}</p>
                    </div>
                </div>
            </div>
            <div id="pet-story">
                <h2>Historia de ${name}</h2>
                <p>${historia}</p>
            </div>
            <div id="pet-contact">
                <div class="user-container-info">
                    <div 
                    id="img-contact-user" 
                    style="background-image: url(${imgContacto});">
                    </div>
                    <div>
                        <p>Publicado por</p>
                        <h3>${contacto}</h3>
                    </div>
                </div>
                <a href="./contact.html">
                <button id="btn-contact">
                Contactar
                </button>
                </a>
                   
                
            </div>
        </div>
    `
})





const sendFavorites = () =>{
    //validar que no este en favoritos
    let validacion = favoritos.filter(pet => pet.id == id)
    if(validacion.length === 0){
        favoritos.push(details);
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
        let icono = document.getElementById('icon-fav');
        icono.style.color = "#A786DF";
    //elimino de favoritos en caso de que ya este   
    }else{
        favoritos.forEach(e =>{
            e.id == id ? favoritos.splice(e,1)
            : console.log('no');
        })
        let icono = document.getElementById('icon-fav');
        icono.style.color = "#D9D4E7";
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }
    
    
}





