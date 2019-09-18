import React from "react";
import DescrViewItem from "./DescrViewItem";


export default ({clickeditem,  filteredWordlist}) => {
    

const chosenitem = filteredWordlist[clickeditem];
        return <DescrViewItem word={chosenitem.word} wordType={chosenitem.wordType} english={chosenitem.english} 
        description={chosenitem.description} useofWord={chosenitem.useofWord} relatedWords={chosenitem.relatedWords} />
    }
