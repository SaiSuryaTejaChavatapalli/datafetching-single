import React from "react";

const Greet=(props)=>{
   const {name,sigil,children}=props
    return(
        <div>
            <h1>Greet {name}</h1>
            <h3>{sigil}</h3>
            <h2>Greet2 {children }</h2>
        </div>
        
    )

}

export default Greet
