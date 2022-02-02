import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import theme from "../../themes";

const LineGraph = ({ yAxisData, title, bg, axisColor }) => {
  const options = {
    chart: {
      type: "area",
      backgroundColor: bg,
      borderRadius: "10px",
    },
    title: {
      text: title,
      style: {
        fontFamily: `${theme.fonts.CODEC_PRO_REGULAR}, sans-serif`,
        fontSize: "17px",
        fontWeight: "600",
        color: axisColor,
      },
    },
    tooltip: {
      backgroundColor: {
        linearGradient: [0, 0, 0, 60],
        stops: [
          [0, "#fff"],
          [1, "#E0E0E0"],
        ],
      },
      borderWidth: 1,
      borderColor: "#AAA",
      borderColor: theme.colors.PRIMARY_COLOR,
      borderWidth: 2,
      padding: 18,
      style: {
        fontSize: "20px",
      },
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      lineWidth: 2,
      lineColor: axisColor,
      labels: {
        enabled: true,
        style: {
          fontFamily: `${theme.fonts.CODEC_PRO_REGULAR}, sans-serif`,
          fontSize: "16px",
          color: axisColor,
        },
      },
      title: {
        text: null,
      },
    },
    yAxis: {
      lineWidth: 2,
      lineColor: axisColor,
      opposite: true,
      gridLineColor: 'transparent',
      labels: {
        enabled: true,
        style: {
          fontFamily: `${theme.fonts.CODEC_PRO_REGULAR}, sans-serif`,
          fontSize: "17px",
          color: axisColor,
        },
      },
      title: {
        text: null,
      },
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 1,
      },
      series: {
        color: axisColor,
      },
    },
    series: [{ data: yAxisData }],
  };

  return (
    <div style={{ "padding": "20px"}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        allowChartUpdate={true}
      />
    </div>
  );
};

export default LineGraph;
