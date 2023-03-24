


let data=[{ "day": "mon","amount": 17.45},{"day": "tue","amount": 34.91},{ "day": "wed","amount": 52.36},{ "day": "thu", "amount": 31.07},
  { "day": "fri", "amount": 23.39 }, {"day": "sat","amount": 43.28 },{"day": "sun","amount": 25.48 }]

 

const xValue = [];
const yValue = [];
/* async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
} */

let barColor = ["rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(118, 181, 188)", "rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)"];

/* fetchData().then((data) => { */

  /*  console.log(data) */
  for (let i = 0; i < data.length; i++) {
    let day = `${data[i].day}`;
    xValue.push(day);
    let value = `${data[i].amount}`;
    yValue.push(value);
  }
/* }); */
let config = {

  type: "bar",
  data: {
    labels: xValue,
    datasets: [{
      data: yValue,
      backgroundColor: barColor,
      barThickness: 35,
      borderSkipped: false,
      borderRadius: 2,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Spending - last 7 days',
        font: {
          size: 14
        }
      }
    },
    scales: {
      x: {
        border: {
          color: 'white'
        },
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        }
      },
      y: {
        display: false,
        border: {
          color: 'white'
        },
      }
    }
  },
}

const ctx = document.getElementById('myChart').getContext('2d');
 myChart = new Chart(ctx, config);
