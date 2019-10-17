import React from 'react';


export default ({nameObj, addfavorites})=> {

  const getStyle =()=>{ 
        return { 
          padding : '1px 8px',
          margin: '0px 2px 0px 2px' ,
          background : nameObj.boy ? 'lightblue' : 'pink',
          fontWeight: "bold",
          fontSize: '12px',
          borderRadius: '9px',
          borderStyle: 'none'
          }
        }

          return <span id="nameItem-span" ><button 
          // onClick={()=> addfavorites(name.id)}
           style={getStyle()}>{nameObj.name}</button>
           </span> 

}





