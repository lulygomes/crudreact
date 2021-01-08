import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes />
    <GlobalStyles />
  </Router>
);

export default App;
