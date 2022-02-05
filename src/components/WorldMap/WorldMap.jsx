import { React, useEffect, useLayoutEffect, useState, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import proj4 from 'proj4';
import { useNavigate } from 'react-router-dom';

import mapDataWorld from '../../data/worldmap/worldGeoData.json';

import theme from '../../themes';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { MapSection } from './Map.styled';
import  { doubleClicker, formatData, resetDoubleClick } from './MapLogic';
import { debounce } from '../../utils/helperFunction';

// setting projection co-ordinates system
if (typeof window !== 'undefined') {
  window.proj4 = window.proj4 || proj4;
}

const WorldMap = ({ mapOptions, allCountriesDetails }) => {
  const navigate = useNavigate();

  const [worldMapData, setWorldMapData] = useState([]);
  const [allowChartUpdate, setAllowChartUpdate] = useState(false);

  // zoom map on mobile devices
  const chartComponent = useRef(null);
  const { width, height } = useWindowDimensions();
  
  useEffect(() => {
    setAllowChartUpdate(true);

    const scoreData = formatData(allCountriesDetails);
    if (scoreData) {
      setWorldMapData(scoreData);
    }
  }, []);
  
  // setting chart Height from resize events
  function setSizeAndView() {
    if (width < 768 && chartComponent.current) {
      chartComponent?.current?.chart.setSize(width, height - 50);
      chartComponent?.current?.chart?.mapView.setView(
        [4800, 8200], // lat-long to zoom on
        -2 // zoom size
      );
    }
  }
  
  const debouncedSetView = useRef(debounce(() => setSizeAndView(), 300)).current;

  // setting chart Height from resize events
  useLayoutEffect(() => {
    debouncedSetView();
  }, []);
 
  // passing formatted data to the highcharts library through options object
  if (worldMapData.length > 0) {
    mapOptions = {
      ...mapOptions,
      series: [
        {
          data: worldMapData,
          mapData: mapDataWorld,
          states: {
            hover: {
              color: theme.colors.BLUE_DARK_SHADE,
            },
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
          },
          events: {
            click(e) {
              if (doubleClicker.clickedOnce === true && doubleClicker.timer) {
                resetDoubleClick();
              } else {
                doubleClicker.clickedOnce = true;
                doubleClicker.timer = setTimeout(() => {
                  resetDoubleClick();
                  navigate(`/country/${e.point.name.toLowerCase().replace(/\s+/g, '-')}`);
                }, doubleClicker.timeBetweenClicks);
              }
            },
          },
        },
      ],
      tooltip: {
        headerFormat: `<span>Confirmed Cases</span><br/>`,
        pointFormat: "<span><i><b>{point.name}<b>: <b>{point.value}<b></i></span>",
      },
    };
  }

  return (
    <MapSection className="map-section">
      <div className="wrapper">
        <HighchartsReact
          allowChartUpdate={allowChartUpdate}
          constructorType="mapChart"
          highcharts={Highcharts}
          ref={chartComponent}
          options={mapOptions}
        />
      </div>
    </MapSection>
  );
};

export default WorldMap;