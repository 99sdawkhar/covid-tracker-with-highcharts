import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import theme from "./themes/index";
import Homepage from "./pages/Homepage";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
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
