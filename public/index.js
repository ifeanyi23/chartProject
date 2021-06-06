
let myChart = document.getElementById('myChart').getContext('2d');
let lineChart = document.getElementById('lineChart').getContext('2d');
// Global Options
//Chart.defaults.global.defaultFontFamily = "Helvetica Neue";
Chart.defaults.font.size = 16;
Chart.defaults.font.family = 'Lato';

const url = 'http://localhost:3000/vic.json'
fetch(url).then(response => response.json())
.then(cur => {
    console.log(cur);
    var countries = cur.population.map(cur => {
        return cur.country
    })
    var birthRate = cur.population.map(cur => {
        return cur.birthRate;
    })
    var deathRate = cur.population.map(cur => {
        return cur.deathRate;
    })

  //console.log(countries)
    let massPopChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [{
                label: 'Birth Rate',
                data: birthRate,
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
                data: deathRate,
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
            labels:countries,
            datasets: [{
                label: 'Birth Rate',
                data: birthRate,
                
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
                data: deathRate,
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
    
})







