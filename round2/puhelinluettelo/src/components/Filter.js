import React from 'react'

const Filter = (props) => {

    return (
        <div>
                <label htmlFor="name">Filter shown with: </label>
                <input type="text" onChange={props.handleInput}/>
        </div>
    )}

export default Filter