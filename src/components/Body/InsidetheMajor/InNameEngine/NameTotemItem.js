import React from 'react';


export default ({erinnya, omuziro, id, boy})=>{

  const getStyle =()=>{ 
    return { 
      padding : '2px 10px',
      margin: '1px',
      background : "white",
      borderColor : boy ? 'lightblue' : 'pink',
      borderWidth: '5px',
      fontWeight: "bold",
      fontSize: '12px',
      borderRadius: '50px',
      }}
    
    return <span><button className="btn btn-none"  style={getStyle()}>
    <div className="lineup">
     <span><h3 id="name-NT" >{ erinnya }</h3><h4 id="totem-NT"> {omuziro}</h4></span>
     
     </div>
     </button>
     </span> 
  }

