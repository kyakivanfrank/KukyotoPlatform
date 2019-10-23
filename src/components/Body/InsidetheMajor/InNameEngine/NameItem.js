import React from 'react';


export default ({nameObj, id, addfavorites})=> {


  const getStyle =()=>{ 
        return { 
          padding : '1px 8px',
          margin: '0px' ,
          background : nameObj.boy ? 'lightblue' : 'pink',
          fontWeight: "bold",
          fontSize: '12px',
          borderRadius: '9px',
          borderStyle: 'none'
          }
        }
        // console.log(nameObj)

          return <span id="nameItem-span"><button onClick={()=> addfavorites(id)} 
          style={getStyle()}>{nameObj.name}</button>
           </span> 
}





