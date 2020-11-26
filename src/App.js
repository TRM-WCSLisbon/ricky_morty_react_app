import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';

import GlobalStyle from './components/globalStyle';

const App = () => (
  <Router>
    <Home />
    <GlobalStyle />
  </Router>
);

export default App;
