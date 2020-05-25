import React from 'react'

const Form = (props) => {
    //console.log('Form.js, ennen returnii', props)
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" onChange={props.handleName}/>
            </div>
            <div>
                <label htmlFor="number">Number: </label>
                <input type="tel" onChange={props.handleNumber} />
            </div>
            <div>
                <button type="submit"> Add </button>
            </div>
        </form>
        )}

export default Form