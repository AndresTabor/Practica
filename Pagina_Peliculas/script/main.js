//se declara el objeto con la informacion de las peliculas
const dataImages =
[
    {
        "id":1,
        "name":"The Tomorrow War",
        "image": "https://www.alohacriticon.com/wp-content/uploads/2021/07/la-guerra-manana-poster-sinopsis.jpg",
        "fecha": "10/10/2021",
        "description":"<strong>Sinopsis:</strong></br>Un grupo de viajeros en el tiempo se transporta desde el año 2051 para entregar un mensaje urgente: la humanidad está perdiendo la guerra mundial contra unos alienígenas. La única esperanza es que los ciudadanos del presente se unan a la lucha.",
        "actores": "<strong>Reparto: </strong>Chris Pratt, Yvonne Strahovski, J.K. Simmons, Betty Gilpin, Ryan Kiera Armstrong, Sam Richardson, Keith Powers, Jasmine Mathews, Mary Lynn Rajskub, Edwin Hodge, Seychelle Gabriel, Felisha Terrell, Stacy Johnson"

    },
    {
        "id":2,
        "name":"America The Motion Picture",
        "image": "https://images.moviefit.me/t/o/510607-america-the-motion-picture.jpg",
        "fecha": "10/10/2021",
        "description":"<strong>Sinopsis:</strong></br>George Washington, armado con motosierras, y su colega cervecero Sam Adams tratan de acabar con los británicos en esta visión sarcástica de la Guerra de la Independencia.",
        "actores": "<strong>Reparto: </strong>Channing Tatum, Jason Mantzoukas, Olivia Munn, Andy Samberg, Raoul Max Trujillo, Bobby Moynihan, Judy Greer, Will Forte, Simon Pegg, Killer Mike"
    }, {
        "id":3,
        "name":"Fats and Futious 9",
        "image": "https://pics.filmaffinity.com/Fast_Furious_9-833854731-mmed.jpg",
        "fecha": "10/10/2021",
        "description":"<strong>Sinopsis:</strong></br>Dom Toretto (Vin Diesel) lleva una vida tranquila con Letty y su hijo, el pequeño Brian, pero saben que el peligro siempre acecha. Esta vez, esa amenaza obligará a Dom a enfrentarse a los pecados de su pasado si quiere salvar a quienes más quiere. El equipo se vuelve a reunir para impedir un complot a escala mundial, liderado por uno de los asesinos más peligrosos y mejor conductor a los que se han enfrentado; un hombre que además es el hermano desaparecido de Dom, Jakob (John Cena). Novena entrega de la famosa franquicia.",
        "actores": "<strong>Reparto: </strong>Vin Diesel, Michelle Rodriguez, Jordana Brewster, Tyrese Gibson, Ludacris, John Cena, Charlize Theron, Helen Mirren, Kurt Russell, Sung Kang, Lucas Black, Finn Cole, Vinnie Bennett, Nathalie Emmanuel, Martyn Ford, Alexander Wraith, Bow Wow, Michael Rooker, Cardi B, Don Omar, Ozuna, JD Pardo, Thue Ersted Rasmussen, Anna Sawai, Shea Whigham, Jim Parrack, Siena Agudong, Jason Statham, Igby Rigney"
    }, {
        "id":4,
        "name":"Luca",
        "image": "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
        "fecha": "10/10/2021",
        "description":"<strong>Sinopsis:</strong></br>La historia se desarrolla en un hermoso pueblo al lado del mar en la Riviera Italiana. Es la del crecimiento de un niño que experimenta un verano inolvidable con helado, pasta e interminables viajes en scooter. Luca comparte estas aventuras con su nuevo mejor amigo, pero toda la diversión se ve amenazada por un gran secreto: es un monstruo marino de otro mundo ubicado justo debajo de la superficie del agua.",
        "actores": "<strong>Reparto: </strong>Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Marco Barricelli, Saverio Raimondo, Maya Rudolph, Jim Gaffigan"
    }, {
        "id":5,
        "name":"Dragon Fury",
        "image": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/354bddd3a6eb926b03c0bde4721f26dac3c5dcb8d9023a9d6c08fce0a5ca65c0._RI_V_TTW_.jpg",
        "fecha": "10/10/2021",
        "description":"<strong>Sinopsis:</strong></br>Un equipo de expertos viaja a lo profundo de las montañas para encontrar una criatura peligrosa.",
        "actores": "<strong>Reparto: </strong> Nicola Wright, Chelsea Greenwood, Sofia Lacey, Chrissie Wunna, Richard Lovell, Rachel Roberts, 	Andrew Rolfe"
    }, {
        "id":6,
        "name":"Rogue Hostage",
        "image": "https://pics.filmaffinity.com/rogue_hostage-493098401-large.jpg",
        "fecha": "10/10/2021",
        "description":"<strong>Sinopsis:</strong></br>El padre soltero y exmarine Kyle Snowden, en una parada rutinaria de su trabajo en los Servicios de Protección Infantil, se ve atrapado en la tienda de su padrastro junto a un grupo de clientes inocentes. ",
        "actores": "<strong>Reparto: </strong>Holly Taylor, John Malkovich, Michael Jai White, Tyrese Gibson, Lauren Vélez, Christopher Backus, John D. Hickman, Leslie Stratton, Fedna Jacquet, Aleksander Vayshelboym, Zani Jones Mbayise, Adrian Alvarado, Brooke Carrell, Rohan Gurbaxani, Charlie Sara, Brandi Bravo, Susannah Hoffman, Abraham Vasquez, Carlos S. Sanchez"
    }, {
        "id":7,
        "name":"Infinity",
        "image": "https://pics.filmaffinity.com/Infinite-926019748-large.jpg",
        "fecha": "10/10/2021",
        "description":"<strong>Sinopsis:</strong></br>Evan Michaels (Mark Wahlberg) es un hombre con problemas que lucha por sobrevivir. Le atormentan los recuerdos, como pesadillas. Hasta que descubre que sus alucinaciones no son realmente lo que parecen. En realidad son visiones de otras vidas ya vividas, recuerdos de sus vidas pasadas. De esta forma, conoce a un grupo de personas que son como él, seres casi inmortales conocidos como El Infinito que se han ido reencarnando a lo largo de los siglos. Evan tratará de unirse a sus filas.",
        "actores": "<strong>Reparto: </strong>Mark Wahlberg, Dylan O'Brien, Sophie Cookson"
    }, {
        "id":8,
        "name":"Black Widow",
        "image": "https://lumiere-a.akamaihd.net/v1/images/blueb_007d_g_spa-ar_70x100_43a5cf52.jpeg",
        "fecha": "10/10/2021",
        "description":"<strong>Sinopsis:</strong></br>Natasha Romanoff, alias Viuda Negra, se enfrenta a los capítulos más oscuros de su historia cuando surge una peligrosa conspiración relacionada con su pasado. Perseguida por una fuerza que no se detendrá ante nada para acabar con ella, Natasha debe lidiar con su historia como espía y con la estela de relaciones destruidas que dejó atrás mucho antes de convertirse en Vengadora.",
        "actores": "<strong>Reparto: </strong>Scarlett Johansson, Florence Pugh, Rachel Weisz, David Harbour, William Hurt, Ray Winstone, O.T. Fagbenle, Michelle Lee, Olivier Richters, Nanna Blondell, Joakim Skarli, Obie Matthew, Paul O'Kelly, entre otros."
    }
]
//obtenemos el contenedor donde iran las tarjetas y ejecutamos la funcion load data al cargar la pagina
const card = document.getElementById("cards");
document.addEventListener("DOMContentLoaded",()=>{
    loadData(dataImages);
});
//carga las tarjetas con el previe de la data
function loadData(dataImages) {
    dataImages.forEach(data => {
        const item = document.createElement("div");
        item.innerHTML=`
            <div class="col d-flex justify-content-center mb-4">
                <div class="card" style="width: 18rem;">
                    <img src=${data.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">${data.fecha}</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#informacionPelicula" onclick = "enviarInformacion(${data.id -1})">
                         Ver más</button>
                    </div>
                 </div>
            </div>
        `
        card.appendChild(item);
    });
}
//carga la data de cada pelicula en la alerta de detalles
function enviarInformacion(idPelicula) {
    document.getElementById("informacionPeliculaLabel").innerHTML = `${dataImages[idPelicula].name}`;
    document.getElementById("modal-description").innerHTML = `${dataImages[idPelicula].description}`
    document.getElementById("modal-actors").innerHTML = `${dataImages[idPelicula].actores}`
    document.getElementById("modal-year").innerHTML = `${dataImages[idPelicula].fecha}`
}
/*<a href="javascript: abrirInformacion(${data.id})" class="btn btn-primary">Ver más</a>*/