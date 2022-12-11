import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Sai Surya Teja"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
               name:"Sai Surya Teja" 
            })
        },2000)
    }
  render() {
    console.log("Parent component Render")
    return (
      <div>
        ParentComponent
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
        </div>
    )
  }
}

export default ParentComp