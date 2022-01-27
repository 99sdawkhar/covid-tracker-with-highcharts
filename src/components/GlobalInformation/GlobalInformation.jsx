import React from 'react';
import Card from '../Card/Card';
import LineGraph from '../LineGraph/LineGraph';

const GlobalInformation = ({
  totalConfirmed,
  totalRecovered,
  totalDeaths,
  country,
}) => {
  return <div>
    <h2>{country === undefined ? 'World Wide' : country} - Corona Report</h2>
    <ul>
      <Card>
        <h3>Total Confirmed</h3>
        <span>{totalConfirmed}</span>
      </Card>
      <Card>
        <h3>Total Recovered</h3>
        <span>{totalRecovered}</span>
      </Card>
      <Card>
        <h3>Total Deaths</h3>
        <span>{totalDeaths}</span>
      </Card>
    </ul>
  </div>
};

export default GlobalInformation;
