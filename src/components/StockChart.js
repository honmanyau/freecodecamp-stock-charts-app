import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import * as muiColours from 'material-ui/styles/colors';



const styles = {
  message: {
    textAlign: 'center',
    fontSize: '2em'
  },
  chart: {
    height: '100%'
  }
};

class StockChart extends React.Component {
  colourPicker(index) {
    const colours = ["grey", "cyan", "indigo", "pink", "brown", "deepOrange", "amber", "green"];
    const shade = 500 - 200 * (Math.floor(index / colours.length) % 3);

    return muiColours[colours[index % colours.length] + shade];
  }

  render() {
    if (!this.props.fetch.inProgress && this.props.fetch.chartData) {
      const date = new Date();
            date.setDate(-this.props.period);
      const year = date.getFullYear();
      const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      const chartData = this.props.fetch.chartData;
      const symbols = Object.keys(chartData);
      let labels = [];
      let datasets = [];

      for (let i = 0; i < symbols.length; i++) {
        const rawData = Object.assign({}, {...chartData[symbols[i]]['Technical Analysis: SMA']});
        const xData = [];
        const points = [];

        for (let key in rawData) {
          let x = key.length > 10 ? key.slice(0, 10) : key;

          if (x.split('-').join('') < [year, month, day].join('')) {
            break;
          }

          xData.push(x)

          points.push({
            x: x,
            y: rawData[key].SMA
          });
        }

        labels = labels.length > xData.length ? labels : xData;

        datasets.push({
          label: symbols[i],
          data: points,
          borderColor: this.colourPicker(i),
          fill: false,
          pointRadius: 0,
          lineTension: 0,
          pointHitRadius: 5
        })
      }

      return(
        <div style={styles.chart}>
          <Line
            data={{
              labels: labels.reverse(),
              datasets
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true
            }}
          />
        </div>
      )
    }
    else if (this.props.fetch.inProgress) {
      return <div style={styles.message}>Fetching data! (╯°□°）╯︵ ┻━┻</div>;
    }
    else {
      return <div style={styles.message}>No data available! Please enter a ticket symbol! (๑◕︵◕๑)</div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    fetch: state.fetch
  }
}

export default connect(mapStateToProps, null)(StockChart);
