import React, { Component } from 'react';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">

    <Counter/>


      {/* <Message/> */}
       {/* <Greet name="Bruce" heroName="Batman" />
       <Greet name="Clark" heroName="Superman"/>
       <Greet name="Diana" heroName="wonder Woman" />

      < Welcome name="Bruce" heroName="Batman" />
      < Welcome name="Clark" heroName="Superman"/>
      < Welcome name="Diana" heroName="wonder Woman" /> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
