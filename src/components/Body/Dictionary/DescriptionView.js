import React from "react";
import DescrViewItem from "./DescrViewItem";

export default ({favoriteWords, filteredWordlist}) => {

    // const DefaultRandomID = ()=> {
    //     return  
        // console.log( Math.round(Math.random()*filteredWordlist.length))
    // } // these are supposed to be default props

    if(favoriteWords.length >= 2) 
    {
     favoriteWords.reverse()
    favoriteWords.pop(favoriteWords.length)
    }

    const favWord = favoriteWords.map( id=> {
        const chosenitem = filteredWordlist[id];
       return <DescrViewItem key={id.id} chosenitem={chosenitem} />
    });

return <div id="descArea">
   {favWord}
   </div>
      
    }