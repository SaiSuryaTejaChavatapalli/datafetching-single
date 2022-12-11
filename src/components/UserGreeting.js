import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:true
      }
    }
  render() {
    //--------------------------------------------
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Hello Sai Surya Tej</div>
    // }
    // else{
    //     message=<div>Hello Anonymys</div>
    // }
    // return message
    //--------------------------------------------
//    if(this.state.isLoggedIn){
//     return <div>Welcome Sai Surya Teja</div>
//    }
//    else{
//     return <div>Welcome Guest</div>
//    }
//-------------------------------------
// return this.state.isLoggedIn?(<div>Hello SST</div>):(<div>Hello Unknown</div>)
//----------------------------------------------------------------------
return this.state.isLoggedIn&&<div>SNL</div>
  }
}

export default UserGreeting