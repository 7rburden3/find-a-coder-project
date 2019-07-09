import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import DevzContainer from './containers/DevzContainer'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope, faKey);

class App extends Component {
  render(){
  return (
    <DevzContainer />
  );
}
}

export default App;
