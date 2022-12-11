import React, { Component } from 'react'
import Clock from './Clock'

class CompLC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        showClock:false
      }
    }
    onToggleClock=()=>{
        this.setState(
            (prevState)=>{
                const {showClock}=prevState
                return({
                    showClock:!showClock
                }   
                )
            }
        )
    }
  render() {
    const {showClock}=this.state
    return (
      <div>
        <div>
            <button onClick={this.onToggleClock}>{showClock?'Hide Clock':'Show Clock'}</button>
        </div>
        <div>
            {showClock && <Clock />}
        </div>

      </div>
    )
  }
}

export default CompLC