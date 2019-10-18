import React from "react";
import logo from '../img/kukyotoBlack.gif';
import Subscription from "./Subscription";

export default ()=> <footer>

<div className="fixed-bottom"> 

<Subscription/>
</div>

<div className="footing">

<div className="container footerData">

<div className="footerparts">
we look forward to do business with you if youhave any ideas
any vital info goes here
</div>

<div className="footerparts">
fot info contact us on email address kukyoto platform. contact numbers are displayed
terms and condtions will display in a modal on the screen in the link below
</div>

<div className="footerparts">
</div>

<div className="footerparts">
<div><img id="footerLogo"  src={logo} alt="logo"/></div>
<div id="socialmediaBar">
<a href="/"><div id="whatsapp" className="socialIconz"></div></a>
<a href="/"><div id="facebook" className="socialIconz"></div></a>
<a href="/"><div id="twitter" className="socialIconz"></div></a>

</div>

</div>

</div>
<div className="lowest"><p>&copy;2019 KUKYOTO PLATFORM. 
<a href="/"> All rights reserved </a>

| it's a collaboration(Lubwama Lincoln & Kyakusse Frank ivan)</p></div></div>
</footer>