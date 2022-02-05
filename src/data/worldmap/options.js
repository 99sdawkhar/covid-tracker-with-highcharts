import Highcharts from 'highcharts';
import highchartsMap from 'highcharts/modules/map';
import theme from '../../themes';

highchartsMap(Highcharts);

const mapOptions = {
  chart: {
    map: 'custom/world-eckert3-highres',
    backgroundColor: theme.colors.DARK_THEME,
    height: 554,
    resetZoomButton: {
      theme: {
        fill: theme.colors.WHITE,
        stroke: 'silver',
        states: {
          hover: {
            fill: theme.colors.BLUE_DARK_SHADE,
            style: {
              color: theme.colors.WHITE,
            },
          },
        },
      },
      position: {
        align: 'right',
        verticalAlign: 'top',
        x: -30,
        y: 10,
      },
    },
    events: {
      load() {
        if (!this.showResetZoom()) {
          this.showResetZoom();
        }
      },
    },
  },
  title: {
    text: null,
  },
  tooltip: {
    borderColor: theme.colors.BLUE_DARK_SHADE,
    borderWidth: 2,
    padding: 18,
    style: {
      fontSize: '20px',
    },
    pointFormat: '{point.name}: <b>{point.value}</b><br/>',
  },
  credits: {
    enabled: false,
  },
  mapNavigation: {
    enabled: true,
    enableDoubleClickZoom: true,
    enableMouseWheelZoom: false,
    enableButtons: true,
    buttonOptions: {
      theme: {
        fill: theme.colors.WHITE,
        stroke: 'rgba(0, 0, 0, .25)',
        'stroke-width': 2,
        r: 2,
        states: {
          hover: {
        fill: theme.colors.BLUE_DARK_SHADE,
        style: {
          color: theme.colors.WHITE,
        },
          },
          select: {
            stroke: '#039',
            fill: '#a4edba',
          },
        },
      },
      verticalAlign: 'top',
      align: 'right',
      width: 30,
      height: 30,
      x: -28,
    },
    buttons: {
      zoomIn: {
        y: 58,
        style: {
          fontSize: '22px',
        },
      },
      zoomOut: {
        y: 102,
        style: {
          fontSize: '22px',
        },
      },
    },
  },
  legend: {
    enabled: true,
    title: {
      text: 'Covid Index',
      style: {
        color:
          Highcharts?.defaultOptions?.legend?.title?.style?.color ||
          theme.colors.BLUE_DARK_SHADE,
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 600,
        textTransform: 'uppercase',
        fontFamily: `${theme.fonts.CODEC_PRO_REGULAR}, sans-serif`,
      },
    },
    labelFormatter() {
      switch(this.from) {
        case 0:
          return `0 - 500k`;
        case 500000:
          return `500k - 1M`;
        case 1000000:
          return `1M - 5M`;
        case 5000000:
          return `5M - 10M`;
        case 10000000:
          return `10M - MOST CASES`;
      }
    },
    align: 'left',
    verticalAlign: 'bottom',
    floating: true,
    layout: 'vertical',
    valueDecimals: 0,
    symbolRadius: 1,
    itemMarginTop: 5,
    itemMarginBottom: 5,
    itemStyle: {
      fontSize: 12,
      fontFamily: `${theme.fonts.CODEC_PRO_REGULAR}, sans-serif`,
    },
    symbolPadding: 10,
    symbolHeight: 20,
    x: 20,
    y: -100,
  },
  colorAxis: {
    min: 1,
    max: 100,
    type: 'linear',
    custom: {
      allowNegativeLog: true,
    },
    minColor: theme.colors.WORLDMAP_MIN_COLOR,
    maxColor: theme.colors.WORLDMAP_MAX_COLOR,
    dataClasses: [
      {
        from: 0,
        to: 500000,
      },
      {
        from: 500000,
        to: 1000000,
      },
      {
        from: 1000000,
        to: 5000000,
      },
      {
        from: 5000000,
        to: 10000000,
      },
      {
        from: 10000000,
      },
    ],
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 768,
        },
        chartOptions: {
          chart: {
            zoomType: 'xy',
          },
          legend: {
            x: 15,
            y: -70,
            padding: 10,
            symbolHeight: 15,
            symbolWidth: 10,
          }
        },
      },
      {
        condition: {
          maxWidth: 767,
        },
        chartOptions: {
          chart: {
            zoomType: 'xy',
            events: {
              click(event) {
                if (event.target.closest('.highcharts-reset-zoom')) {
                  this.mapView.setView([4800, 8200], -2);
                }
              },
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 540,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                align: 'right',
                verticalAlign: 'bottom',
                x: -10,
                y: -155,
              },
            },
          },
          legend: {
            title: {
              style: {
                fontSize: 18,
              },
            },
            backgroundColor:
              Highcharts?.defaultOptions?.legend?.backgroundColor ||
              'rgba(255, 255, 255, 0.65)',
            y: 14,
            x: 0,
            padding: 20,
            itemDistance: 10,
            layout: 'horizontal',
            width: '100%',
          },
          mapNavigation: {
            buttonOptions: {
              alignTo: 'spacingBox',
              style: {
                transform: 'translateX(50px, 400px)',
              },
              verticalAlign: 'bottom',
              align: 'left',
              margin: 30,
              width: 24,
              height: 24,
            },
            buttons: {
              zoomIn: {
                y: -90,
                x: 5,
                style: {
                  fontSize: 22,
                },
              },
              zoomOut: {
                y: -90,
                x: 45,
                style: {
                  fontSize: 22,
                },
              },
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 415,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                y: -150,
              },
            },
          },
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -80,
                x: 5,
                style: {
                  fontSize: 22,
                },
              },
              zoomOut: {
                y: -80,
                x: 45,
                style: {
                  fontSize: 22,
                },
              },
            },
          },
          legend: {
            padding: 15,
            itemStyle: {
              fontSize: 12,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 395,
        },
        chartOptions: {
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -80,
                x: 5,
                style: {
                  fontSize: 22,
                },
              },
              zoomOut: {
                y: -80,
                x: 45,
                style: {
                  fontSize: 22,
                },
              },
            },
          },
          legend: {
            padding: 14,
            itemStyle: {
              fontSize: 11,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 375,
        },
        chartOptions: {
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -75,
                x: 5,
              },
              zoomOut: {
                y: -75,
                x: 45,
              },
            },
          },
          legend: {
            itemStyle: {
              fontSize: 10,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 360,
        },
        chartOptions: {
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -65,
                x: 5,
              },
              zoomOut: {
                y: -65,
                x: 45,
              },
            },
          },
          legend: {
            title: {
              style: {
                fontSize: 16,
              },
            },
            padding: 12,
          },
        },
      },
      {
        condition: {
          maxWidth: 355,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                y: -140,
              },
            },
          },
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -65,
                x: 5,
              },
              zoomOut: {
                y: -65,
                x: 45,
              },
            },
          },
          legend: {
            itemDistance: 8,
          },
        },
      },
      {
        condition: {
          maxWidth: 320,
        },
        chartOptions: {
          chart: {
            resetZoomButton: {
              position: {
                y: -140,
              },
            },
          },
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -65,
                x: 5,
              },
              zoomOut: {
                y: -65,
                x: 45,
              },
            },
          },
          legend: {
            title: {
              style: {
                fontSize: 14,
              },
            },
            itemStyle: {
              fontSize: 8,
            },
          },
        },
      },
      {
        condition: {
          maxWidth: 315,
          minWidth: 280,
        },
        chartOptions: {
          mapNavigation: {
            buttons: {
              zoomIn: {
                y: -55,
                x: 5,
              },
              zoomOut: {
                y: -55,
                x: 45,
              },
            },
          },
          legend: {
            padding: 10,
            itemDistance: 2,
          },
        },
      },
    ],
  },
  plotOptions: {
    map: {
      nullColor: '#ffffe0',
    },
  },
};

export default mapOptions;
