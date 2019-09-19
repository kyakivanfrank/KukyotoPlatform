import React from "react";
import DescrViewItem from "./DescrViewItem";

export default ({favoriteWords, filteredWordlist}) => {
    if(favoriteWords.length >= 2) 
    {
     favoriteWords.reverse()
    favoriteWords.pop(favoriteWords.length)
    }

    const favWord = favoriteWords.map( id=> {
        const chosenitem = filteredWordlist[id];
       return <DescrViewItem key={id} chosenitem={chosenitem} />
    });

return <div>
   {favWord}
   </div>
      
    }
