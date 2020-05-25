import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  //const [ newPerson, setNewPerson ] = useState({
  //    name: '',
  //    number: ''
  //})

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const addContact = (event) => {
    //console.log('Lisätään kontakti')
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber
    }
    const names = persons.map((per, i) => per.name)
    if ( (names.indexOf(newName) === -1) ) {
      setPersons(persons.concat(contactObject))
      console.log('added', contactObject.name)
    } else {
      const alert = `${newName} is already added to phonebook.`
      window.alert(alert);
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleInput = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleInput={handleInput}/>
      <h2>Add a new contact</h2>
      <Form onSubmit={addContact} handleName={handleNewName} handleNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )

}
export default App