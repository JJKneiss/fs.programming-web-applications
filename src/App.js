import './App.css';

import { Component } from 'react';
import Routes from './components/Routes.js'
import { BrowserRouter as Router } from 'react-router-dom';

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
