import React,{Component} from "react";
class Welcome extends Component{
    render(){
        const {name,sigil,children}=this.props
        return(
            <div>
                <h1>Welcome {name}</h1>
                <h3>{sigil}</h3>
                <h2>Welcome2 {children}</h2>
            </div>
        ) 
        
    }
    
}
export default Welcome