import React from 'react';



export default ({Word, id , addfavoriteWords})=> {

  const getStyle =()=>{ 
        return { 
          padding : '1px 10px',
          margin: '1px',
          fontWeight: "bold",
          fontSize: '12px',
          borderRadius: '9px',
          borderStyle: 'none'
          }}

          console.log(id);

          return <span > <button onClick={()=> addfavoriteWords(id)}
           style={getStyle()}> { Word } </button> </span> 
}





