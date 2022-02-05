import React from "react";

import GlobalInformation from "../GlobalInformation/GlobalInformation";
import WorldMap from '../WorldMap/WorldMap'

import options from "../../data/worldmap/options";

const Homepage = ({
  globalData,
  allCountriesDetails,
  loadingMap
}) => {

  return (
    <div>
      {loadingMap ? (
        <div className="wrapper">
          <p>Fetching data. Pleae wait...</p>
        </div>
      ) : (
        <>
          <GlobalInformation
            confirmed={globalData}
            recovered={globalData}
            deaths={globalData}
          />
          <WorldMap
            mapOptions={options}
            allCountriesDetails={allCountriesDetails}
          />
        </>
      )}
    </div>
  );
};

export default Homepage;
