import countriesIso from '../../data/worldmap/countryIso';

// formatting data according to highmaps library requirement
export const formatData = (allCountriesDetails, type = 'TotalConfirmed') => {
  const scoreData = [];
  const countries = [];
  const rankingCountries = [];
  
  if (allCountriesDetails) {
    allCountriesDetails.forEach((country) => {
      countries.push(country.Country);
      rankingCountries.push({
        country: country.Country,
        score: country[type],
        // deaths: country.TotalDeaths,
        // score: country.TotalConfirmed,
      });
    });
  }

  countriesIso.forEach((county) => {
    if (countries.some((element) => element.includes(county.Name))) {
      rankingCountries.forEach((rankingCountry) => {
        if (
          rankingCountry.country.toLowerCase() === county.Name.toLowerCase()
        ) {
          scoreData.push([
            county.Code.toLowerCase(),
            parseFloat(rankingCountry.score),
          ]);
        }
      });
    }
  });
  return scoreData;
};

// reset zoom on double click options
export const doubleClicker = {
  clickedOnce: false,
  timer: null,
  timeBetweenClicks: 400,
};

// reset zoom on double click
export const resetDoubleClick = () => {
  clearTimeout(doubleClicker.timer);
  doubleClicker.timer = null;
  doubleClicker.clickedOnce = false;
};
