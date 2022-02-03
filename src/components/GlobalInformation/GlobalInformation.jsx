import React from 'react';
import NumberFormat from 'react-number-format';
import Card from '../Card/Card';

import GlobalInfo from './global-info.styled';

const GlobalInformation = ({
  confirmed,
  recovered,
  deaths,
  country,
}) => {
  return (
    <GlobalInfo>
      <h2>{country === undefined ? 'World Wide' : country} - Corona Report</h2>
      <div className="card-collection">
        <Card className="confirmed">
          <h3>Total Confirmed</h3>
          <NumberFormat
            value={confirmed?.['NewConfirmed']}
            prefix={'+'}
            displayType={'text'}
            thousandSeparator={true}
            className="confirmed"
          />
          <h4>
            <NumberFormat
              value={confirmed?.['TotalConfirmed']}
              displayType={'text'}
              thousandSeparator={true}
            />
          </h4>
        </Card>
        <Card className="recovered">
          <h3>Total Recovered</h3>
          <NumberFormat
            value={recovered?.['NewRecovered']}
            displayType={'text'}
            prefix={'+'}
            thousandSeparator={true}
            className="recovered"
          />
          <h4>
            <NumberFormat
              value={recovered?.['TotalRecovered']}
              displayType={'text'}
              thousandSeparator={true}
            />
          </h4>
        </Card>
        <Card className="deaths">
          <h3>Total Deceased</h3>
          <NumberFormat
            value={deaths?.['NewDeaths']}
            displayType={'text'}
            prefix={'+'}
            thousandSeparator={true}
            className="deaths"
          />
          <h4>
            <NumberFormat
              value={deaths?.['TotalDeaths']}
              displayType={'text'}
              thousandSeparator={true}
            />
          </h4>
        </Card>
      </div>
    </GlobalInfo>
  )
};

export default GlobalInformation;
