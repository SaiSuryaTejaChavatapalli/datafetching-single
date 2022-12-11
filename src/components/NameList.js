import React from 'react'
import Person from './Person'
function NameList() {
    // const names=['Bruce','Diana','Clark']
    // const nameList=names.map(name=><h1>{name}</h1>)
    // console.log(nameList)
    const persons=[
        {
            id:1,
            nam:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            nam:'Bat',
            age:30,
            skill:'ct'
        },
        {
            id:3,
            nam:'Br',
            age:0,
            skill:'act'
        },
        {
            id:4,
            nam:'ce',
            age:0,
            skill:'Rct'
        },
    ]
const personList=persons.map(person=><Person person={person} key={person.id}/>)
  return (
    <div>
        {
           personList
        }
    </div>
  )
}

export default NameList