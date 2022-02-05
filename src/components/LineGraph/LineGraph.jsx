import React, { useLayoutEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import theme from "../../themes";

const LineGraph = ({
  graphType,
  xAxisData,
  yAxisData,
  title,
  bg,
  axisColor,
}) => {
  const { width } = useWindowDimensions();

  const chartComponent = useRef(null);

  useLayoutEffect(() => {
    if (width < 768 && chartComponent.current) {
      chartComponent.current.chart.setSize(400, 300);
    }
    if (width < 400 && chartComponent.current) {
      chartComponent.current.chart.setSize(300, 200);
    }
  }, [width]);

  const options = {
    chart: {
      type: graphType,
      backgroundColor: bg,
      borderRadius: 10,
      marginRight: 70,
      marginBottom: 100,
      marginLeft: 65,
    },
    title: {
      text: title,
      style: {
        fontFamily: `${theme.fonts.CODEC_PRO_REGULAR}, sans-serif`,
        fontSize: "18px",
        color: axisColor,
      },
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: xAxisData,
      lineWidth: 2,
      lineColor: "#100F16",
      labels: {
        enabled: true,
        rotation: -45,
        style: {
          fontFamily: `${theme.fonts.CODEC_PRO_REGULAR}, sans-serif`,
          fontSize: "16px",
          color: axisColor,
        },
      },
    },
    yAxis: {
      lineWidth: 2,
      lineColor: "#100F16",
      opposite: true,
      gridLineColor: "transparent",
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
        color: axisColor,
        borderWidth: 0,
        stickyTracking: true,
        whiskerWidth: 5,
      },
    },
    tooltip: {
      backgroundColor: '#100F16',
      borderColor: theme.colors.BLACK,
      borderWidth: 0,
      style: {
        fontFamily: `${theme.fonts.CODEC_PRO_REGULAR}, sans-serif`,
        fontSize: "12px",
        color: '#dff',
        textAlign: 'center',
      },
      headerFormat: '<b>{series.name} Cases on <br>{point.x}<br>',
      pointFormat: "<span><i>{point.y}</i></span>",
    },
    series: [
      {
        data: yAxisData,
        name: title,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              borderRadius: 10,
              marginRight: 35,
              marginBottom: 60,
              marginLeft: 35,
            },
            xAxis: {
              labels: {
                style: {
                  fontSize: "8px",
                },
              }
            },
            yAxis: {
              labels: {
                style: {
                  fontSize: "8px",
                },
              }
            }
          }
        },
      ],
    },
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        allowChartUpdate={true}
        ref={chartComponent}
      />
    </div>
  );
};

export default LineGraph;
