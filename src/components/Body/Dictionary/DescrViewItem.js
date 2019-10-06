import React from "react";

 const DescrViewItem = ({ chosenitem }) => (
    <div className="descDiv">
    
    <div className="wordNsignDiv">
    <h1 id="dictWord">{chosenitem.word}</h1><div id="GoodBad-Sign"></div>
    </div>
    <h4 id="wordtype">/'{chosenitem.wordType}'/</h4>

    <div className="wordNsignDiv"><div className="mulungereza">Mulungereza:</div><h4 id="translato">{chosenitem.english}</h4></div>

    <h3 className="mulungereza">Kitegeeza:</h3><h3 id="lilDescr">{chosenitem.description}</h3>
   
  <h3 className="mulungereza">Enkozesa ya kyo:</h3><h3 id="useofWord">{chosenitem.useofWord}</h3>

  <div className="wordNsignDiv"><h3 className="mulungereza">Ebyefananyiliza:</h3><h4 id="relatedWords">{chosenitem.relatedWords}</h4></div>

    </div>
);

// DescrViewItem.defaultProps = {

//   word : "kikere"


// };

export default DescrViewItem;
    

