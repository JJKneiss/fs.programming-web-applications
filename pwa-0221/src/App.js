import './App.css';

import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
export default App;
