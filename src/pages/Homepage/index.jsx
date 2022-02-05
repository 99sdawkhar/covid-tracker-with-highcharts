import React, { useEffect, useState } from 'react';
import WorldMap from '../../components/WorldMap/WorldMap';
import options from '../../data/worldmap/options'
import axiosInstance from '../../api/axiosInstance';

const Homepage = () => {

  const [loadingMap, setLoadingMap] = useState(false);
  const [allCountriesDetails, setAllCountriesDetails] = useState(null);
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    setLoadingMap(true);
    axiosInstance.get('/summary')
    .then((res) => {
      if (res.status === 200) {
        const data = res.data;
        setGlobalData(data.Global);
        setAllCountriesDetails(data.Countries);
        setLoadingMap(false);
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return <div>
    {loadingMap ? 
    <p>Loading</p> :
      <WorldMap mapOptions={options} allCountriesDetails={allCountriesDetails} globalData={globalData} />
    }
  </div>;
};

export default Homepage;
