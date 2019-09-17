import React from 'react';


export default ({erinnya, omuziro, id, boy})=>{

  const getStyle =()=>{ 
    return { 
      padding : '3px 10px',
      margin: '1px',
      background : "white",
      borderColor : boy ? 'lightblue' : 'pink',
      borderWidth: '5px',
      fontWeight: "bold",
      fontSize: '12px',
      borderRadius: '50px',
      }}
    
    return <span><button className="btn btn-none"  style={getStyle()}> <div className="lineup">
     <span><h3>{ erinnya }</h3><h4>{omuziro}</h4></span>
     <button id="close" className="btn btn-none">
     
     </button></div>

     </button>
     </span> 
  }

