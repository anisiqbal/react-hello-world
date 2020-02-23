import React, { Component } from 'react';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
       <Greet name="Bruce" heroName="Batman" />
       <Greet name="Clark" heroName="Superman"/>
       <Greet name="Diana" heroName="wonder Woman" />
      {/* < Welcome/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
