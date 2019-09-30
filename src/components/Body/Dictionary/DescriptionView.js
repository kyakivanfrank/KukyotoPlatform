import React from "react";
import DescrViewItem from "./DescrViewItem";

export default ({favoriteWords, filteredWordlist}) => {
    if(favoriteWords.length >= 2) 
    {
     favoriteWords.reverse()
    favoriteWords.pop(favoriteWords.length)
    }


    console.log(favoriteWords)
    const favWord = favoriteWords.map( id=> {
        const chosenitem = filteredWordlist[id];
       return <DescrViewItem key={id.id} chosenitem={chosenitem} />
    });

return <div id="descArea">
   {favWord}
   </div>
      
    }