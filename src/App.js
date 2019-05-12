import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working</p>     
        <Person name ="Sam" age="47"/>
        <Person name ="Susan" age="47"/>
        <Person name ="Sam" age="47">I like Hiking</Person> 
      </div>
      
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work???'));
  }
}

export default App;
