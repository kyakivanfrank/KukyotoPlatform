import React from "react";

export default ({chosenitem})=> <div className="descDiv">

    <h1 id="dictWord">{chosenitem.word}</h1>
    <h4 id="translato">{chosenitem.english}</h4>

    <h4 id="wordtype">{chosenitem.wordType}</h4>
    <h3 id="lilDescr">{chosenitem.description}</h3>
    <h3 id="useofWord">{chosenitem.useofWord}</h3>
    <h4 id="relatedWords">{chosenitem.relatedWords}</h4>
    </div>

    

