import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>I am {person.nam}, Iam {person.age} old,my skill is {person.skill}</h2>
    </div>
  )
}

export default Person