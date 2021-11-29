const details = JSON.parse(localStorage.getItem('Detail'));
const {contacto, imgContacto} = details;
console.log(contacto);
const element = document.getElementById('contenedor');



document.addEventListener('DOMContentLoaded', () =>{
    element.innerHTML = `
    <header>
        <div class="arrow-container">
            <a href="./details.html">
                <i 
                class="bi bi-arrow-left-short" 
                id="back-arrow">
                </i>
            </a>
        </div>
        <div id="perfil-data">
            <div 
            id="img-container"
            style="background-image: url(${imgContacto});"></div>
            <div id="info-container">
                <p class="nombre">${contacto}</p>
                
            </div>
        </div>
    </header>
    <main>
        <div>
            <p>Aún no hay mensajes</p>
        </div>
        <div>
            <input type="text" placeholder="Aa" id="input-messege">
        </div>
    </main>
    
    `
})
    


