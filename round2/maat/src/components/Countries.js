import Country from './Country'
import SpecificCountry from './SpecificCountry'
import React from 'react'

const Countries = (props) => {

let filteredCountries = props.countries

filteredCountries = filteredCountries.filter((p) => {
    return p.name.toLowerCase().includes(props.filter.toLowerCase())
});

if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
        filteredCountries.map((country) =>
            <Country key={country.name} country={country} />
        )
    )
} else if (filteredCountries.length === 1) {
    return (
        filteredCountries.map((country) =>
            <SpecificCountry key={country.name} country={country} />
        )
    )
} else {
    return (
        <p>Too many matches, specify another filter</p>
        )
}

}

export default Countries