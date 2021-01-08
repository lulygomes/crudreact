import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles, { Grid } from './styles/global';

import Header from './components/Header';
import Routes from './routes';
import Nav from './components/Nav';

const App: React.FC = () => (
  <Router>
    <Grid>
      <Header />
      <Nav />
      <Routes />
      <GlobalStyles />
    </Grid>
  </Router>
);

export default App;
