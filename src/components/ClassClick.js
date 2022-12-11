import React, { Component } from 'react'

class classClick extends Component {
    clickHandler(){
        console.log("Click me clicked")
    }
  render() {
    return (
      <button onClick={this.clickHandler}>Click Me!</button>
    )
  }
}

export default classClick