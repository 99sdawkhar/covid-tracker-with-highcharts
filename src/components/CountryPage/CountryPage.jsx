import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import GlobalInformation from '../../components/GlobalInformation/GlobalInformation';
import LineGraph from '../../components/LineGraph/LineGraph';
import SelectContainer from '../../components/SelectContainer/SelectContainer';
import { formatDate, dateBefore } from '../../utils/formatDate';

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
    const getCoronaReportByDate = (country, from, to) => {
      axiosInstance.get(`/country/${country}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then((res) => {
        const yAxisData = res.data.map((r) => r.Cases);
        setYAxisCoronaCaseArr(yAxisData);
        const countrySummary = allCountriesSummary.Countries.find((c) => c.Slug === country)
        setTotalConfirmed(countrySummary.TotalConfirmed);
        setTotalRecovered(countrySummary.TotalRecovered);
        setTotalDeaths(countrySummary.TotalDeaths);
        console.log(countrySummary);
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
    }

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
  
  return <div>
    {loading ? 
    <p>Fetching data. Pleae wait...</p>
    : (
      <>
        <GlobalInformation 
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={selectedCountry?.value}
        />
        <SelectContainer 
          name="country-select"
          parentClass="select-container"
          options={allCountriesSummary?.Countries}
          optionLabel={'Country'}
          optionValue={'Slug'}
          placeholder={'Select Country'}
          getSelectedValue={(val) => setSelectedCountry(val)}
        />
        <SelectContainer 
          name="days-select"
          parentClass="select-container"
          options={daysOption}
          placeholder={'Select Days'}
          getSelectedValue={(val) => setSelectedDate(val)}
        />
        <LineGraph 
          yAxisData={yAxisCoronaCaseArr}
        />
      </>
    )}
  </div>;
};

export default CountryPage;
