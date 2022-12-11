import React from 'react'

function Inline() {
    let myStyle={
        color:'green',
        fontSize:'100px',
        fontFamily:'Roboto'
    }
  return (
    <div>
        <h1 className='error'>Error</h1>
        <h1 style={myStyle}>Inline</h1>
    </div>
  )
}

export default Inline