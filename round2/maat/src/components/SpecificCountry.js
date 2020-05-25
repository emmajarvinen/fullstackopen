import React from 'react'

const Language = ({ c }) => {
    return (
        <div>
            <li> {c.name} </li>    
        </div>
    )
}

const Content = ({ country }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages: </h3>
            {country.languages.map((c) => 
            <Language key={c.iso639_1} c={c} />
            )}
            <p></p>
            <img src={country.flag} alt="Flag"></img>
        </div>
    )
}

const SpecificCountry = ({ country }) => {
    return (
      <div>
        <Content country = {country}/>
      </div>
    )
}

export default SpecificCountry