import React from 'react';

import Devpic from "../../components/img/check1.png"

export default ({ name, aboutdev })=> <div className="devbox">
<div className="devflex ">

<img id="devpic" src={Devpic} alt="omuziro"/>

<div className="devstats">
<h2 >{name}</h2>
<h4 >Founder</h4>
</div>

</div>

<p>Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. 
Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorpe</p>

</div>



