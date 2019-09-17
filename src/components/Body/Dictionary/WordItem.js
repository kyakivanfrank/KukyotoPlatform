import React from 'react';



export default ({word, addfavoriteWords})=> {

  const getStyle =()=>{ 
        return { 
          padding : '1px 10px',
          margin: '1px',
          fontWeight: "bold",
          fontSize: '12px',
          borderRadius: '9px',
          borderStyle: 'none'
          }}

          return <span > <button onClick={()=> addfavoriteWords(word.id)}
           style={getStyle()}> { word.word } </button> </span> 
}





