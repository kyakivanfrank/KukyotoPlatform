import React from "react";

export default ({word, wordType,english,description, useofWord, relatedWords})=> <div className="descDiv">

    <h1 id="dictWord">{word}</h1>
    <h4 id="translato">{english}</h4>

    <h4 id="wordtype">{wordType}</h4>
    <h3 id="lilDescr"> {description}</h3>
    <h3 id="useofWord">{useofWord}</h3>
    <h4 id="relatedWords">{relatedWords}</h4>
    </div>


