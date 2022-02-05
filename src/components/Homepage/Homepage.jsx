import React from "react";

import GlobalInformation from "../GlobalInformation/GlobalInformation";
import WorldMap from '../WorldMap/WorldMap'

import options from "../../data/worldmap/options";
import Loader from "../Loader";

const Homepage = ({
  globalData,
  allCountriesDetails,
  loadingMap
}) => {

  return (
    <div>
      {loadingMap ? (
        <Loader />
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
