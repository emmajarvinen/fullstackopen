import Person from './Person'
import React from 'react'

const Persons = (props) => {

let filteredPersons = props.persons

filteredPersons = filteredPersons.filter((p) => {
    return p.name.toLowerCase().includes(props.filter.toLowerCase())
});

//console.log(filteredPersons)
//console.log('Props.filter',props.filter)

return (
    filteredPersons.map((person) =>
        <Person key={person.name} person={person} />
    )
)}

export default Persons