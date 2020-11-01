import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './components/globalStyle';

const App = () => (
  <Router>
    <Home />
    <GlobalStyle />
  </Router>
);

export default App;
