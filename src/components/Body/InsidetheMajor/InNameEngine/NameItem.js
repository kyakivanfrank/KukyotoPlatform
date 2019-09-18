import React from 'react';


export default ({nem, addfavorites})=> {

  const getStyle =()=>{ 
        return { 
          padding : '1px 10px',
          margin: '1px',
          background : nem.boy ? 'lightblue' : 'pink',
          fontWeight: "bold",
          fontSize: '12px',
          borderRadius: '9px',
          borderStyle: 'none'
          }
        
        }
          return <span > <button onClick={()=> addfavorites(nem.id)}
           style={getStyle()}> { nem.erinnya } </button> </span> 

}





