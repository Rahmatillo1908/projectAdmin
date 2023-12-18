import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/Global/TopBar";
import Sidebar from "./scenes/Global/Sidebar";
import Dashboard from "./scenes/deshboard/Index";
import Team from "./scenes/team/index";
import Invoices from "./scenes/invoices/Index";
import Contacts from "./scenes/contacts/Index";
import Bar from "./scenes/bar/Index";
import Form from "./scenes/form/Index";
import Line from "./scenes/line/Index";
import Pie from "./scenes/pie/Index";
import FAQ from "./scenes/faq/Index";
import Geography from "./scenes/geography/Index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/Index";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;