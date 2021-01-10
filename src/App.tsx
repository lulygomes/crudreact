import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles, { Grid } from './styles/global';

import Header from './components/Header';
import Routes from './routes';
import Nav from './components/Nav';

import { HeaderProvider } from './context/HeaderContext';

const App: React.FC = () => (
  <Router>
    <Grid>
      <HeaderProvider>
        <Header />
        <Nav />
        <Routes />
        <GlobalStyles />
      </HeaderProvider>
    </Grid>
  </Router>
);

export default App;
