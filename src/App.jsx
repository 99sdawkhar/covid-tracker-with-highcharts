import { useEffect , useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import theme from "./themes/index";
import Homepage from "./components/Homepage/Homepage";
import CountryPage from "./components/CountryPage/CountryPage";
import axiosInstance from "./api/axiosInstance";

function App() {
  const [loadingMap, setLoadingMap] = useState(false);
  const [allCountriesSummary, setAllCountriesSummary] = useState(null);
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    setLoadingMap(true);
    axiosInstance
      .get("/summary")
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setGlobalData(data.Global);
          setAllCountriesSummary(data.Countries);
          setLoadingMap(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Homepage 
              globalData={globalData}
              allCountriesDetails={allCountriesSummary}
              loadingMap={loadingMap}
            />
          } />
          <Route path="/country/:countryId" element={
            <CountryPage 
              allCountriesSummary={allCountriesSummary}
            />
          } />
          <Route
            path="*"
            element={<Navigate replace to="/"/>}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
