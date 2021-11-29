const usersEnpoint = "http://localhost:4001/users/";
const element = document.getElementById('contenedor');
const form = document.querySelector('form')


document.addEventListener ('DOMContentLoaded', async () =>{
    dataLoad = await getData(usersEnpoint);
    //console.log(dataLoad)
    const { id, img, nombre, apellido, correo } = dataLoad;
    const user = {
    id,
    img,
    nombre,
    apellido,
    correo
    };
    showData(dataLoad,element);
    const form = document.querySelector('form')  
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();
        await changeProfile();
    })
    
})

//obtener datos
const getData = async (url) => {
    resp = await fetch(url);
    dataProfile = await resp.json();
    return dataProfile[1]
}


//Muestrar datos
const showData =  (list, element) => {
    const profile =  list;
    const {id, img, nombre, apellido, correo} = profile;
    element.innerHTML = `
    <h1 name="arriba">Perfil</h1>
        <div id="perfil-data">
            <div 
            id="img-container"
            style="background-image: url(${img});"></div>
            <div id="info-container">
                <p class="nombre">${nombre} ${apellido}</p>
                <p class="proceso">Editar Cuenta</p>
            </div>
        </div>
        <div id="form-container">
            <form class="form-group">
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input id="name" type="text" class="form-control mt-2" name="name" autoComplete="off" 
                    placeholder="${nombre}" value="${nombre}"required/>
                </div>
                <div class="form-group">
                    <label for="lastName">Apellido</label>
                    <input id="lastName" type="text" class="form-control mt-2" name="lastName" autoComplete="off"
                    placeholder="${apellido}" value="${apellido}"required/>

                </div>
                <div class="form-group">
                    <label for="lastName">Correo</label>
                    <input id="inputCorreo" type="text" class="form-control mt-2" name="correo" autoComplete="off"
                    placeholder="${correo}" value="${correo}" required/>                

                </div>

                <div class="d-grid gap-2 mx-auto mt-2">
                    <button type="submit" class="btn btn-dark" id="${id}" >
                        Guardar
                    </button>
                </div>
            </form>                
            
        </div>
    ` 
}


//actualiza datos perfil
const changeProfile = async() => {
    //alert('datos actualizados')
    usuarioDestino = await getData(usersEnpoint);
    const {id, img} = usuarioDestino;
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('inputCorreo').value;
    
    const user = {
        img,
        nombre,
        apellido,
        correo    
    }
    
    await fetch(usersEnpoint + id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })  
};
