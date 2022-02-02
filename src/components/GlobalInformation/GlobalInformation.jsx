import React from 'react';
import NumberFormat from 'react-number-format';
import Card from '../Card/Card';

import GlobalInfo from './global-info.styled';

const GlobalInformation = ({
  totalConfirmed,
  totalRecovered,
  totalDeaths,
  country,
}) => {
  return (
    <GlobalInfo>
      <h2>{country === undefined ? 'World Wide' : country} - Corona Report</h2>
      <div className="card-collection">
        <Card>
          <h3>Total Confirmed</h3>
          <span>
            <NumberFormat
              value={totalConfirmed}
              displayType={'text'}
              thousandSeparator={true}
            />
          </span>
        </Card>
        <Card>
          <h3>Total Recovered</h3>
          <span>
            <NumberFormat
              value={totalRecovered}
              displayType={'text'}
              thousandSeparator={true}
            />
          </span>
        </Card>
        <Card>
          <h3>Total Deaths</h3>
          <span>
            <NumberFormat
              value={totalDeaths}
              displayType={'text'}
              thousandSeparator={true}
            />
          </span>
        </Card>
      </div>
    </GlobalInfo>
  )
};

export default GlobalInformation;
