//Gráfico de barra
const ctx = document.getElementById('g_barra').getContext('2d');
const g_barra = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: ['Nootbook', 'Cadeira gamer', 'Monitor', 'Smartphone', 'Agenda eletronica', 'Smartwhat'],
        datasets: [{
            label: 'Itens Recebidos',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
             borderWidth: 3
        }]
    },
        options: {
            scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});
//Gráfico de barra
const ctx_1 = document.getElementById('g_barra_1').getContext('2d');
const g_barra_1 = new Chart(ctx_1, {
    type: 'bar',
        data: {
        labels: ['Maria', 'Carol', 'Lucas', 'Pedro', 'Ana', 'José'],
        datasets: [{
            label: 'Melhores vendedores',
            data: [155, 145, 142, 133, 128, 127],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
             borderWidth: 3
        }]
    },
        options: {
            indexAxis: 'y',
            scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});
//Gráfico de linha
const ctx_line = document.getElementById('g_linha').getContext('2d');
const g_linha = new Chart(ctx_line, {
    type: 'line',
        data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Faturamento anual',
            data: [12, 9, 13, 5, 17, 7, 12, 9, 13, 5, 17, 7],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
             borderWidth: 3
        }]
    },
        options: {
            scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});
//Gráfico de circulo
const ctx_cir = document.getElementById('g_circulo').getContext('2d');
const g_circulo = new Chart(ctx_cir, {
    type: 'doughnut',
        data: {
        labels: ['Notebook', 'Smartphone', 'Smartwhat'],
        datasets: [{
                label: 'Produtos',
                data: [300, 50, 100],
                backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgb(255, 205, 86)'
                ],
                hoverOffset: 3
              }]
    },
        options: {
            scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});
//Gráfico de radar
const ctx_radar = document.getElementById('g_radar').getContext('2d');
const g_radar = new Chart(ctx_radar, {
    type: 'radar',
        data: {
        labels: ['Janeiro', 'Março', 'Maio', 'Julho', 'Setembro',  'Dezembro'],
        datasets: [{
            label: '2021',
            data: [65, 59, 62, 81, 76, 85],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }, {
            label: '2022',
            data: [71, 58, 70, 92, 86, 91],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }]
    },
        options: {
            scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});