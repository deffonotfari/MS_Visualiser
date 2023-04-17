// setup 
const data = {
    labels: [
      'Tesco',
      'Aldi',
      'Lidl',
      'Sainsbury',
      'Morrisons',
      'ASDA',
      'M&S Food',
      'The Cooperative Food',
      'Heron Foods',
      'Waitrose',
      'SPEAR',
      'Costco',
      'Ocado',
      'Farmfoods',
      'Costcutters',
      'One Stop',
      'Nisa',
      'Premier Store',
      'Iceland',
      'Londis'
    ],

    datasets: [{
      label: 'Revenue',
      data: [61096240000,108868000000,117497000000,30983301000, 8400000000, 20400000000, 35900000, 7700000000, 
        419000000, 12500000000, 26022080, 16206063510, 2498200000, 872500000, 254040556, 1374291100, 
        1380000000, 27648460, 4000000000, 21062139],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        '#DAD7CD', '#3A5A40', '#3B28CC','7C6354'
      ],
      hoverOffset: 20
    }]
};
  
// config 
const config = {
    type: 'pie',
    data: data,
};
  
// render init block
const myChart = new Chart(
document.getElementById('myChart'),
config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;

