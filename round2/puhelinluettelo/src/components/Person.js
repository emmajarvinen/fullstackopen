import React from 'react'

const Content = ({ person }) => {
    return (
    <p>{person.name} {person.number}</p>
    )
}

const Person = ({ person }) => {
    return (
      <div>
        <Content person = {person}/>
      </div>
    )
}

export default Person