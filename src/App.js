import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Countries from './components/Countries'

function App() {

  return (
      <Fragment>
          <Navbar />
          <Countries />
      </Fragment>
  );
}

export default App;
