import React from 'react';


export default ({nem, addfavorites})=> {

  const getStyle =()=>{ 
        return { 
          padding : '1px 8px',
          margin: '0px 2px 0px 2px' ,
          background : nem.boy ? 'lightblue' : 'pink',
          fontWeight: "bold",
          fontSize: '12px',
          borderRadius: '9px',
          borderStyle: 'none'
          }
        }
          return <span id="nameItem-span" ><button onClick={()=> addfavorites(nem.id)}
           style={getStyle()}>{ nem.erinnya }</button>
           </span> 

}





