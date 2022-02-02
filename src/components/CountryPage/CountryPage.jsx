import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import GlobalInformation from '../../components/GlobalInformation/GlobalInformation';
import LineGraph from '../../components/LineGraph/LineGraph';
import SelectContainer from '../../components/SelectContainer/SelectContainer';
import { formatDate, dateBefore } from '../../utils/formatDate';
import CountryPageContainer from './country-page.styled';
import theme from '../../themes';

const daysOption = [{
  label: 'Last 7 Days',
  value: '7'
  },
  {
    label: 'Last 30 Days',
    value: '30'
  },
  {
    label: 'Last 90 Days',
    value: '90'
  }
];

const CountryPage = () => {

  const [loading, setLoading] = useState(false);

  const [totalConfirmed, setTotalConfirmed] = useState(null);
  const [totalRecovered, setTotalRecovered] = useState(null);
  const [totalDeaths, setTotalDeaths] = useState(null);
  const [allCountriesSummary, setAllCountriesSummary] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [yAxisCoronaCaseArr, setYAxisCoronaCaseArr] = useState([]);
  
  useEffect(() => {
    const getCoronaReportByDate = (country = null, from, to) => {
        // axiosInstance.get(`/country/${country}?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
        axiosInstance.get(`${country ? `/country/${country}` : `/world`}?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
        .then((res) => {
          let active= [];
          let confirmed = [];
          let deaths = [];
  
          if (country === null) {
            res.data.forEach((r) => {
              active.push(r.TotalDeaths)
              confirmed.push(r.TotalConfirmed)
              deaths.push(r.TotalDeaths)
            })
          } else {
            res.data.forEach((r) => {
              active.push(r.Active)
              confirmed.push(r.Confirmed)
              deaths.push(r.Deaths)
            })
          }
  
          const yAxisData = {
            'Active': active,
            'Confirmed': confirmed,
            'Deaths': deaths
          }
          console.log(yAxisData);
          setYAxisCoronaCaseArr(yAxisData);
          if (country) {
            const countrySummary = allCountriesSummary.Countries.find((c) => c.Slug === country)
            setTotalConfirmed(countrySummary.TotalConfirmed);
            setTotalRecovered(countrySummary.TotalRecovered);
            setTotalDeaths(countrySummary.TotalDeaths);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }

    const d = new Date();
    const currentDate = formatDate(d);
    const historicDate = dateBefore(d, selectedDate?.value);

    if (selectedCountry) {
      getCoronaReportByDate(selectedCountry.value, historicDate, currentDate);
    } else {
      getCoronaReportByDate(null, historicDate, currentDate);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [selectedCountry, selectedDate])

  useEffect(() => {
    setLoading(true);
    axiosInstance.get('/summary')
    .then((res) => {
      if (res.status === 200) {
        const data = res.data;
        setTotalConfirmed(data.Global.TotalConfirmed);
        setTotalRecovered(data.Global.TotalRecovered);
        setTotalDeaths(data.Global.TotalDeaths);
        setAllCountriesSummary(data);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  return <CountryPageContainer>
    {loading ? (
      <>
      <div className="wrapper">
        <p>Fetching data. Pleae wait...</p>
      </div>
      </>
    )
    : (
      <>
      <div className="wrapper">
        <GlobalInformation 
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={selectedCountry?.value}
        />
        <div className="select-container">
          <SelectContainer 
            name="country-select"
            options={allCountriesSummary?.Countries}
            optionLabel={'Country'}
            optionValue={'Slug'}
            placeholder={'Select Country'}
            getSelectedValue={(val) => setSelectedCountry(val)}
            />
          <SelectContainer 
            name="days-select"
            options={daysOption}
            placeholder={'Select Days'}
            getSelectedValue={(val) => setSelectedDate(val)}
            />
        </div>
        <div className="line-graph-container">
          <LineGraph
            yAxisData={yAxisCoronaCaseArr['Confirmed']}
            title='Confirmed'
            bg={`${theme.colors.CONFIRMED_BG}`}
            axisColor={`${theme.colors.CONFIRMED_AXIS}`}
          />  
          <LineGraph
            yAxisData={yAxisCoronaCaseArr['Active']}
            title='Active'
            bg={`${theme.colors.ACTIVE_BG}`}
            axisColor={`${theme.colors.ACTIVE_AXIS}`}
          />
          <LineGraph
            title='Deaths'
            yAxisData={yAxisCoronaCaseArr['Deaths']}
            bg={`${theme.colors.DEATH_BG}`}
            axisColor={`${theme.colors.DEATH_AXIS}`}
          />
        </div>
      </div>
      </>
    )}
  </CountryPageContainer>;
};

export default CountryPage;
