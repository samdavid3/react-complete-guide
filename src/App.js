import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:"Sam", age:47},
      {name:"Susan", age:47},
      {name:"Sam Active", age:47}
    ]
  }
  switchNameHandler = () =>{
    console.log("I have been called");
    this.setState({
      persons: [
        {name:"Samuel", age:47},
        {name:"Susan", age:47},
        {name:"Samuel Active", age:47}
      ]


    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working</p>
        <button onClick= {this.switchNameHandler}>Change State</button>     
        <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}>I like Hiking</Person> 
      </div>
      
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work???'));
  }
}

export default App;
