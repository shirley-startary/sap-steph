import React from 'react';
import Chart from 'chart.js';
import NavigationBar from '../components/navigationBar';

const objetivos = [
  {
    label: 'objetivo 1',
    value: '15',
  },
  {
    label: 'objetivo 2',
    value: '11',
  },
  {
    label: 'objetivo 3',
    value: '5',
  },
  {
    label: 'objetivo 4',
    value: '2',
  },
  {
    label: 'objetivo 5',
    value: '7',
  },
  {
    label: 'objetivo 6',
    value: '5',
  },
  {
    label: 'objetivo 7',
    value: '1',
  },
  {
    label: 'objetivo 8',
    value: '1',
  },
  {
    label: 'objetivo 9',
    value: '2',
  },
  {
    label: 'objetivo 10',
    value: '9',
  },
  {
    label: 'objetivo 11',
    value: '7',
  },
  {
    label: 'objetivo 12',
    value: '5',
  },
  {
    label: 'objetivo 13',
    value: '5',
  },
  {
    label: 'objetivo 14',
    value: '5',
  },
  {
    label: 'objetivo 15',
    value: '5',
  },
  {
    label: 'objetivo 16',
    value: '13',
  },
  {
    label: 'objetivo 17',
    value: '5',
  },
];

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
              },
            },
          ],
        },
      },
      data: {
        labels: objetivos.map(objetivo => objetivo.label),
        datasets: [{
          label: 'Objetivo más seleccionado',
          data: objetivos.map(objetivo => objetivo.value),
          backgroundColor: '#B08EA2',
        }],
      },
    });
  }

  render() {
    return (
      <canvas ref={this.canvasRef} />
    );
  }
}

class Graphics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: objetivos,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <NavigationBar />
        <div className="main chart-wrapper">
          <BarChart
            data={data}
            title="Objetivo más seleccionado"
            color=""
          />
        </div>


        <style jsx>
          {`
            .main {
              padding: 15px;
              padding-top: 100px;
            }
            .main.chart-wrapper {
              width: 96%;
              height: 400px;
            }
          `}
        </style>
        <style jsx global>
          {`
            body {
              margin: 0;
              font-family: system-ui;
              background: #F7F7F7;
            }
            .position {
              padding: 100px;
            }
          `}
        </style>
      </div>
    );
  }
}


export default Graphics;
