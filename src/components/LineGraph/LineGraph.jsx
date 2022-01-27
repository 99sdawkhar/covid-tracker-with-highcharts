import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const LineGraph = ({ yAxisData }) => {
  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: yAxisData
    }]
  }

  return <div>
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
    allowChartUpdate = { true }
  />
  </div>;
};

export default LineGraph;
