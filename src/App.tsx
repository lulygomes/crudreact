import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Router>
    <GlobalStyles />
  </Router>
);

export default App;
