import React from 'react'

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
}
  
const Total = ({ course }) => {
    const sum = course.parts.map(x => x.exercises).reduce((i, j) => i + j, 0)
    return(
      <p>Total of {sum} exercises</p>
    ) 
}
  
const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
}
  
const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((c, i) => 
            <Part key={c.id} part={c} />
        )}
      </div>
    )
}
  
const Course = ({ course }) => {
    return (
      <div>
        <Header course = {course}/>
        <Content course = {course}/>
        <Total course = {course}/>
      </div>
    )
}

export default Course