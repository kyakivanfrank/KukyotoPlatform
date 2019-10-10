import React from 'react';

import Devpic from "../../components/img/check1.png"

export default ({ name, professions, writtenDetails})=> {
    
    
    return <div className="devbox">
<div className="devflex ">
<img id="devpic" src={Devpic} alt="omuziro"/>
<div className="devstats">
<h2 >{name}</h2>
<div className="devProBox">{professions.map(profession => <span id="professions">{profession}</span> )}</div>
</div>
</div>
<p id="devParagraph">{writtenDetails}</p>
</div>
}



