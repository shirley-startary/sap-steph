import React from 'react';
import Chart from 'chart.js';
import NavigationBar from '../components/navigationBar';

const objetivos = [
  {
    label: 'objetivo 1',
    value: '15',
    color: '#eb1c2d',
  },
  {
    label: 'objetivo 2',
    value: '11',
    color: '#D3A029',
  },
  {
    label: 'objetivo 3',
    value: '5',
    color: '#279B48',
  },
  {
    label: 'objetivo 4',
    value: '2',
    color: '#C31F33',
  },
  {
    label: 'objetivo 5',
    value: '7',
    color: '#EF402B',
  },
  {
    label: 'objetivo 6',
    value: '5',
    color: '#26AED9',
  },
  {
    label: 'objetivo 7',
    value: '1',
    color: '#FCB712',
  },
  {
    label: 'objetivo 8',
    value: '1',
    color: '#8F1838',
  },
  {
    label: 'objetivo 9',
    value: '2',
    color: '#F36D26',
  },
  {
    label: 'objetivo 10',
    value: '9',
    color: '#E11484',
  },
  {
    label: 'objetivo 11',
    value: '7',
    color: '#F99D26',
  },
  {
    label: 'objetivo 12',
    value: '5',
    color: '#CF8D2A',
  },
  {
    label: 'objetivo 13',
    value: '5',
    color: '#48773D',
  },
  {
    label: 'objetivo 14',
    value: '5',
    color: '#187DBC',
  },
  {
    label: 'objetivo 15',
    value: '5',
    color: '#3EB049',
  },
  {
    label: 'objetivo 16',
    value: '13',
    color: '#0D568B',
  },
  {
    label: 'objetivo 17',
    value: '5',
    color: '#183668',
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
          label: 'Objetivo mejor contestado',
          data: objetivos.map(objetivo => objetivo.value),
          backgroundColor: objetivos.map(objetivo => objetivo.color),
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

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'doughnut',
      options: {
        maintainAspectRatio: false,
      },
      data: {
        labels: objetivos.map(objetivo => objetivo.label),
        datasets: [{
          data: objetivos.map(objetivo => objetivo.value),
          backgroundColor: objetivos.map(objetivo => objetivo.color),
        }],
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
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
        <div className="main">
          <div className="chart-wrapper">
            <DoughnutChart
              data={data}
              title="Objetivo más seleccionado"
              color=""
            />
          </div>
          <div className="chart-wrapper">
            <BarChart
              data={data}
              title="Objetivo mejor respondido"
              color=""
            />
          </div>
        </div>

        <style jsx>
          {`
            .main {
              padding: 10%;
              padding-top: 100px;
            }
            .chart-wrapper {
              width: 100%;
              height: 400px;
              margin-top: 50px;
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
