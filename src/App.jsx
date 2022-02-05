import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import theme from "./themes/index";
import Homepage from "./pages/Homepage/index";
import CountryPage from "./components/CountryPage/CountryPage";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/country/:countryId" element={<CountryPage />} />
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
