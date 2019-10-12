import React from "react";

 const DescrViewItem = ({ chosenitem }) => {

const chosen = chosenitem[0]

console.log(chosenitem[0])
  
  return <div className="descDiv">
    
    <div className="wordNsignDiv">
    <h1 id="dictWord">{chosen.Word}</h1><div id="GoodBad-Sign"></div>
    </div>
    <h4 id="wordtype">/'{chosen.WordType}'/</h4>

    <div className="wordNsignDiv"><div className="mulungereza">Mulungereza:</div><h4 id="translato">{chosen.english}</h4></div>

    <h3 className="mulungereza">Kitegeeza:</h3><h3 id="lilDescr">{chosen.description}</h3>
   
  <h3 className="mulungereza">Enkozesa ya kyo:</h3><h3 id="useofWord">{chosen.useofWord}</h3>

  <div className="wordNsignDiv"><h3 className="mulungereza">Ebyefananyiliza:</h3><h4 id="relatedWords">{chosen.relatedWords}</h4></div>

    </div>
};

// DescrViewItem.defaultProps = {

//   word : "kikere"


// };

export default DescrViewItem;
    

