import React from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';



class StockChart extends React.Component {
  componentDidMount() {
    this.lines = {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3, 4, 5],
        datasets: [{
          label: "Test",
          data: [{x: 0, y: 1}, {x: 1, y: 2}, {x: 2, y: 3}],
          backgroundColor: 'transparent'
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
      }
    };

    const dataset = {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [1, 6, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
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
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true
            }
          }]
        }
      }
    };

    new Chart (this.chart, this.lines);
  };

  render() {
    const symbols = this.props.fetch.symbols;
    const chartData = this.props.fetch.chartData;

console.log(this.props.fetch);

    if (!this.props.fetch.inProgress && chartData && Object.keys(chartData).length === symbols.length) {
      for (let i = 0; i < symbols.length; i++) {
        const rawData = Object.assign({}, {...chartData[symbols[i]]['Technical Analysis: SMA']});
        const xData = [];
        const yData = [];
        const dataset = {
          label: symbols[i],
          data: null,
          borderColor: 'transparent'
        }

        for (let key in rawData) {
          yData.push(rawData[key].SMA);

          i = 0 ? xData.push(key.slice(0, 10)) : xData.push(key);
        }

        dataset.data = yData;

        if (i === 0) {
          this.lines.data.labels = xData;
          this.lines.data.datasets = dataset;
        }
        else {
          this.lines.data.datasets.push(dataset);
        }
      }
    }


    return(
      <canvas ref={chart => this.chart = chart}></canvas>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetch: state.fetch
  }
}

export default connect(mapStateToProps, null)(StockChart);
