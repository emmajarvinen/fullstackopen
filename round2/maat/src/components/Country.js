import React from 'react'

const Content = ({ country }) => {
    return (
    <p>{country.name}</p>
    )
}

const Country = ({ country }) => {
    return (
      <div>
        <Content country = {country}/>
      </div>
    )
}

export default Country