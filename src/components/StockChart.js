import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';



const styles = {
  message: {
    textAlign: 'center',
    fontSize: '2em'
  }
};

class StockChart extends React.Component {
  render() {
    if (!this.props.fetch.inProgress && this.props.fetch.chartData) {
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

          xData.push(x)

          points.push({
            x: x,
            y: rawData[key].SMA
          });

          if (key.slice(0, 4) < 2012) {
            break;
          }
        }

        labels = labels.length > xData.length ? labels : xData;

        datasets.push({
          label: symbols[i],
          data: points,
          backgroundColor: 'transparent',
          pointRadius: '1'
        })
      }

      return <Line
          data={{
            labels: labels.reverse(),
            datasets
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true
          }}
        />
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
