import React from 'react'

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
   <Part part={props.Part[0].name} exercise={props.Part[0].exercises}/>
   <Part part={props.Part[1].name} exercise={props.Part[1].exercises}/>
   <Part part={props.Part[2].name} exercise={props.Part[2].exercises}/>
 </di>
  
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.Part[0].exercises + props.Part[1].exercises + props.Part[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  //array
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return(
    <div>
      <Header course={course} />
      <Content Part={parts}/> 
      <Total Part={parts}/>
    </div>
  )
}

export default App;