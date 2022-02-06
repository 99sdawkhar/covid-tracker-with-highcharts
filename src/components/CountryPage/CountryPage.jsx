import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axiosInstance from "../../api/axiosInstance";

import GlobalInformation from "../../components/GlobalInformation/GlobalInformation";
import LineGraph from "../../components/LineGraph/LineGraph";
import SelectContainer from "../../components/SelectContainer/SelectContainer";
import Toggle from "../Toggle/Toggle";

import { formatDate, dateBefore, formatDateArr } from "../../utils/formatDate";
import useTitle from "../../hooks/useTitle";

import theme from "../../themes";
import CountryPageContainer from "./country-page.styled";
import Loader from "../Loader";


const daysOption = [
  {
    label: "Last 7 Days",
    value: "7",
  },
  {
    label: "Last 30 Days",
    value: "30",
  },
  {
    label: "Last 90 Days",
    value: "90",
  },
];

const CountryPage = ({ allCountriesSummary }) => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);

  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [deaths, setDeaths] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [yAxisCoronaCaseArr, setYAxisCoronaCaseArr] = useState([]);
  const [xAxisDateArr, setXAxisDateArr] = useState([]);
  const [checked, setChecked] = useState(false);
  const [graphType, setGraphType] = useState("column");

  useTitle(countryId);

  useEffect(() => {
    setLoading(true);
    const getCoronaReportByDate = (country = null, from, to) => {
      axiosInstance
        .get(
          `${
            country ? `/country/${country}` : `/world`
          }?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
        )
        .then((res) => {
          let active = [];
          let confirmed = [];
          let deaths = [];
          let dates = [];

          const sortedData = res.data.sort((a, b) =>
            a["Date"].localeCompare(b["Date"])
          );

          if (country === null) {
            sortedData.forEach((r) => {
              confirmed.push(r.NewConfirmed);
              deaths.push(r.NewDeaths);
              dates.push(r.Date);
            });
          } else {
            sortedData.forEach((r) => {
              active.push(r.Active);
              confirmed.push(r.Confirmed);
              deaths.push(r.Deaths);
              dates.push(r.Date);
            });
          }

          const yAxisData = {
            active: active,
            confirmed: confirmed,
            deaths: deaths,
          };

          setYAxisCoronaCaseArr(yAxisData);
          setXAxisDateArr(formatDateArr(dates));

          if (country) {
            const countrySummary = allCountriesSummary?.find(
              (c) => c.Slug === country
            );
            setConfirmed({
              TotalConfirmed: countrySummary.TotalConfirmed,
              NewConfirmed: countrySummary.NewConfirmed,
            });
            setRecovered({
              TotalRecovered: countrySummary.TotalRecovered,
              NewRecovered: countrySummary.NewRecovered,
            });
            setDeaths({
              TotalDeaths: countrySummary.TotalDeaths,
              NewDeaths: countrySummary.NewDeaths,
            });
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const d = new Date();
    const currentDate = formatDate(d);
    const historicDate = dateBefore(d, selectedDate?.value);

    if (selectedCountry) {
      getCoronaReportByDate(selectedCountry.value, historicDate, currentDate);
    } else {
      getCoronaReportByDate(null, historicDate, currentDate);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedDate]);

  const handleGraphToggle = () => {
    if (checked) {
      setGraphType("column");
      setChecked(false);
    } else {
      setGraphType("area");
      setChecked(true);
    }
  };

  useEffect(() => {
    if (countryId) {
      const getSelectedFromUrl = (country) => {
        if (allCountriesSummary) {
          const s = allCountriesSummary?.find(
            (c) => c.Slug === country
          );
          setSelectedCountry({
            label: s.Country,
            value: s.Slug,
          });
        }
      };
      getSelectedFromUrl(countryId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCountriesSummary]);

  const goToHomepage = () => {
    navigate('/');
  }

  return (
    <CountryPageContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="wrapper">
            <button 
              className="home-button" 
              type="button"
              onClick={goToHomepage}  
            >Go to Homepage</button>
            <GlobalInformation
              confirmed={confirmed}
              recovered={recovered}
              deaths={deaths}
              country={selectedCountry?.value}
            />
            <div className="select-container">
              <SelectContainer
                name="country-select"
                options={allCountriesSummary}
                optionLabel={"Country"}
                optionValue={"Slug"}
                placeholder={"Select Country"}
                getSelectedValue={(val) => setSelectedCountry(val)}
                value={selectedCountry}
              />
              <SelectContainer
                name="days-select"
                options={daysOption}
                placeholder={"Select Days"}
                getSelectedValue={(val) => setSelectedDate(val)}
              />
            </div>
            <Toggle
              labelOne="column chart"
              labelTwo="area chart"
              name="toggle-chart"
              id="toggle-chart"
              onChange={handleGraphToggle}
              checked={checked}
            />
            <div className="line-graph-container">
              {yAxisCoronaCaseArr["confirmed"]?.length > 0 && (
                <LineGraph
                  graphType={graphType}
                  yAxisData={yAxisCoronaCaseArr["confirmed"]}
                  xAxisData={xAxisDateArr}
                  title="Confirmed"
                  bg={`${theme.colors.CONFIRMED_BG}`}
                  axisColor={`${theme.colors.CONFIRMED_AXIS}`}
                />
              )}
              {yAxisCoronaCaseArr["active"]?.length > 0 && (
                <LineGraph
                  graphType={graphType}
                  yAxisData={yAxisCoronaCaseArr["active"]}
                  xAxisData={xAxisDateArr}
                  title="Active"
                  bg={`${theme.colors.ACTIVE_BG}`}
                  axisColor={`${theme.colors.ACTIVE_AXIS}`}
                />
              )}
              {yAxisCoronaCaseArr["deaths"]?.length > 0 && (
                <LineGraph
                  graphType={graphType}
                  yAxisData={yAxisCoronaCaseArr["deaths"]}
                  xAxisData={xAxisDateArr}
                  title="Deceased"
                  bg={`${theme.colors.DEATH_BG}`}
                  axisColor={`${theme.colors.DEATH_AXIS}`}
                />
              )}
            </div>
          </div>
        </>
      )}
    </CountryPageContainer>
  );
};

export default CountryPage;
