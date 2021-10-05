import React, { Fragment } from 'react'

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  // part exercises
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
 <di>
   <Part part={props.P1.name} exercise={props.P1.exercises}/>
   <Part part={props.P2.name} exercise={props.P2.exercises}/>
   <Part part={props.P3.name} exercise={props.P3.exercises}/>
 </di>
  
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
   name: 'Using props to pass data',
   exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <div>
      <Header course={course} />
      <Content P1={part1} P2={part2} P3={part3}/> 
      <Total part1={part1.exercises} part2={part2.exercises} part3={part3.exercises}/>
    </div>
  )
}

export default App;