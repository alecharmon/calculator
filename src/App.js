import React, { Component } from 'react';
import Calculator from './Calculator';

import './App.css';

class App extends Component {

  render() {
    const bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
    return (
    <div>
      <link rel="stylesheet" href={bootstrapUrl}/>
      <div className="App">
        <Calculator />
      </div>
    </div>
    );
  }
}

export default App;
