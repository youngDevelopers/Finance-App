import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import NavBar from "./pages/navbar";
import Predictions from "./pages/predictions";
import { themeSettings } from "./theme";

function App() {

  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <NavBar />
            <Routes >
              <Route path="/" element={ <Dashboard/> } />
              <Route path="/predictions" element={ <Predictions/> } />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
