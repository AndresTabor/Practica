let formulario = document.querySelector("form");
let listarCitas = document.getElementById("listarCitas");
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda')
let citas = [];
let acumuladorRegistro = Number(localStorage.getItem('numRegistros'));
console.log(acumuladorRegistro);
if (localStorage.getItem('citas')) {
    citas = JSON.parse(localStorage.getItem('citas'));
}

const capturarDatos = () => {
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let sintomas = document.getElementById("sintomas").value;
    let id = acumuladorRegistro;
    let registro = {
        id,
        nombre,
        fecha,
        hora,
        sintomas,
    };

    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "guardar",
        denyButtonText: `no guardar`,
    }).then((result) => {   
        if (result.isConfirmed) {
        Swal.fire("Agenda guardada", "", "success");
        citas.push(registro);
        localStorage.setItem("citas", JSON.stringify(citas));
        console.log(citas);
        localStorage.setItem('numRegistros', acumuladorRegistro +=1) 
        

        } else if (result.isDenied) {
        Swal.fire("La agenda no fue guardada", "", "info");
        }
    });

    formulario.reset();
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  capturarDatos();
});

const pintarDatos = () => {
    listarCitas.innerHTML = ""

  let citasLocalStorage = JSON.parse(localStorage.getItem("citas"));
  console.log(citasLocalStorage);

  listarCitas.innerHTML = "";

  citasLocalStorage.map((cita) =>{
    const { nombre, fecha, hora, sintomas } = cita;
    listarCitas.innerHTML += `
        <tr>
        <td>${nombre}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${sintomas}</td>
        </tr>
        `;
  });
};

document.addEventListener("DOMContentLoaded", pintarDatos());

buscar.addEventListener('click', e =>{
    e.preventDefault()
    let input = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('citas'))

    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())
    console.log(filtro)
    filtro.length === 0 ?
        busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`
        :
        (
            filtro.map(cita => { 
                const {id, nombre,fecha,hora,sintomas} = cita;
                busqueda.innerHTML += `
                    <div style="color:white;">${nombre}</div>
                    <div style="color:white;">${fecha}</div>
                    <div style="color:white;">${hora}</div>
                    <div style="color:white;">${sintomas}
                    <button onclick ="borrar(${id})">Borrar</button></div><br>             
                `   
            })
        )
})

const borrar = (clave) => {
    posicion = clave
    let dataRegistros = JSON.parse(localStorage.getItem('citas'))
    console.log(dataRegistros)
    dataRegistros.splice(posicion,1)
    //console.log(dataRegistros)
    localStorage.setItem('citas',JSON.stringify(dataRegistros.slice(clave,1)));
    localStorage.setItem('numRegistros', acumuladorRegistro -=1) 
}

