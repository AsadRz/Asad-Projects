import React, { Component } from 'react';
import './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component
{
  state = {
    persons: [
      { id: 1, name: 'Asad', age: 25 },
      { id: 2, name: 'Ali', age: 24 },
      { id: 3, name: "Sheryar", age: 25 }
    ],
    userName: "Asad",
    showPerson: false
  }


  deletePersonHandler = (personIndex) =>
  {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  textInputeventChangeHandler = (event) =>
  {
    this.setState({
      userName: event.target.value
    })
  }

  eventChangeHandler = (event, id) =>
  {
    const personIndex = this.state.persons.findIndex(p =>
    {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons })

  }

  togglePersonHandler = () =>
  {
    this.setState({ showPerson: !this.state.showPerson });
  }

  // non-efficent method to send props to function is to do this
  //   onClick = {() => this.switchNameHandler('Tariq')

  // recommended Way
  //   this.switchNameHandler.bind(this, 'Saqib')

  render()
  {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.eventChangeHandler}
          />
        </div>
      )

      // Chnage toggle Button background color to Red on Toggle effect 
      // styles.backgroundColor = 'red';
      // styles[':hover'] = {
      //   backgroundColor: 'pink',
      //   color: 'black'
      // }
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
