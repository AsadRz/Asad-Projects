import React from 'react';
import Person from './Person/Person';

const persons = props =>
    props.persons.map((person, index) =>
    {
        return (
            <Person
                name={person.name}
                age={person.age}
                clickHandler={() => props.clicked(index)}
                key={person.id}
                changeHandler={(event) => props.changed(event, person.id)}
            />
        )
    })


export default persons