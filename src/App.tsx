import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import { Activity, Community, Feature, Market } from './Pages';


const theme = {
  linear: "linear-gradient(132.95deg, #FFC301 9.31%, #FF6533 79.4%)",
  linearBlue: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(140.08deg, #9CD2EE 3.42%, #00ACEE 95.98%)",
  white: '#FFFFFF',
  cultured: '#F4F4F4',
  raisinBlack: '#232222',
  mostlyWhite: '#F7F7F7',
  dzarkCharcoal: '#333333',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route path="/" element={<Market />} />
        <Route path="/" element={<Layout />}>
          <Route path="/activity" element={<Activity />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
