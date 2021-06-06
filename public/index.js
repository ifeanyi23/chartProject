
const fs = require('fs');
const data = fs.readFileSync(
    `${__dirname}/vic.json`,
      "utf-8"

);
console.log(data)
let myChart = document.getElementById('myChart').getContext('2d');
let lineChart = document.getElementById('lineChart').getContext('2d');
// Global Options
//Chart.defaults.global.defaultFontFamily = "Helvetica Neue";
Chart.defaults.font.size = 16;
Chart.defaults.font.family = 'Lato';





let massPopChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels:['USA', 'FRANCE', 'UK', 'AUSTRALIA', 'CANADA'],
        datasets: [{
            label: 'Birth Rate',
            data: [
                10000,
                25000,
                140000,
                30000,
                170000
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: 'grey',
            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        },
        {
            label: 'Death Rate',
            data: [
                20000,
                55000,
                240000,
                300000,
                10000
            ],
            backgroundColor: [
                'rgba(200, 105, 132, 0.6)',
                'rgba(90, 162, 205, 0.6)',
                'rgba(255, 206, 100, 0.6)',
                'rgba(175, 180, 160, 0.6)',
                'rgba(143, 300, 245, 0.6)',
                'rgba(155, 189, 94, 0.6)'
            ],

            
        }
    
    ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'The Rate of Birth and Death in various Countries',
                font:{
                    size: 24

                }
            },
            legend:{
                position: 'bottom'
            },

           
            tooltip: {
                enabled: true
            }
            
        },

        layout: {
            padding:{
                left: 50,
                right: 50
            }
        },

        

    }
});


let massLineChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels:['USA', 'FRANCE', 'UK', 'AUSTRALIA', 'CANADA'],
        datasets: [{
            label: 'Birth Rate',
            data: [
                10000,
                25000,
                140000,
                30000,
                170000
            ],
            
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

            borderColor: 'green',
            
        },

        {
            label: 'Death Rate',
            data: [
                20000,
                55000,
                240000,
                300000,
                10000
            ],
            backgroundColor: [
                'rgba(200, 105, 132, 0.6)',
                'rgba(90, 162, 205, 0.6)',
                'rgba(255, 276, 206, 0.6)',
                'rgba(175, 180, 160, 0.6)',
                'rgba(143, 300, 245, 0.6)',
                'rgba(155, 189, 94, 0.6)'
            ],
            borderColor: 'red',
        }
    
    ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'The Rate of Birth and Death in various Countries',
                font:{
                    size: 24

                }
            },
            legend:{
                
                position: 'bottom'
            },

            
            tooltip: {
                enabled: true
            }
            
        },
        layout: {
            padding:{
                left: 80,
                right: 80
            }
        }
        

    }
});

