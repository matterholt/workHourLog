import React, { Component } from 'react';
import DailyHour from './componets/DailyHour';
import './style/WkDay.css';

class App extends Component {
  render() {
    return (
      <div className="week">
        <h1>Weekly Hours</h1>
        <DailyHour />
      </div>
    );
  }
}

export default App;
