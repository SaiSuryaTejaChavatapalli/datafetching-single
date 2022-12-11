import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        date:new Date()
      }
      console.log("constructor called")
    }
    tick=()=>{
        this.setState({
            date:new Date()
        })
    }
    componentDidMount(){
        console.log("Component did mount called")
        this.timerID=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        console.log("component will unmount called")
        clearInterval(this.timerID)
    }
  render() {
    const {date}=this.state
    console.log("render called")
    return (
        <div>
            <div>Clock</div>
            <p>{date.toLocaleTimeString()}</p>
        </div>
      
    )
  }
}

export default Clock