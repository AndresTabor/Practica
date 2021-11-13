let datosRegistro;
let promNiños = 0;
let promJoven =0;
let promAdulto =0;
let promMayor =0;
function getRegistro() {
    if (localStorage.getItem('registroNuevo')) {
        datosRegistro = JSON.parse(localStorage.getItem('registroNuevo'));  
    }
    console.log(datosRegistro);
}

function calcularPromedio() {
    datosRegistro.forEach(registro => {
        let edad= Number (registro.años);
        console.log((edad));
        if ( edad > 0 & edad <= 10) {
            console.log("niño");
            promNiños += Number(registro.imc);

        }else if (edad > 10 & edad <= 20) {
            console.log("joven");
            promJoven += Number(registro.imc);

        }else if (edad > 20 & edad <= 30) {
            console.log("adulto");
            promAdulto += Number(registro.imc);

        }else {
            console.log("mayor");
            promMayor += Number(registro.imc);
        }
    });
    promNiños /= datosRegistro.length;
    promJoven /= datosRegistro.length;
    promAdulto /= datosRegistro.length;
    promMayor /= datosRegistro.length;
    console.log(myChart.config._config.data.datasets[0].data = [promNiños, promJoven, promAdulto, promMayor]);
    myChart.update();
    promNiños = 0;
    promJoven =0;
    promAdulto =0;
    promMayor =0;
}

// generamos la grafica
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1 a 10 años', '11 a 20 años', '21 a 30 años', '40+ años'],
        datasets: [{
            label: 'Promedio IMC',
            data: [1, 1, 1, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
    }
});

   