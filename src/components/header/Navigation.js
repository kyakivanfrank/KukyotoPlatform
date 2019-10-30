import React from 'react';
import { div, header, nav, a, button, span, ul, li } from 'reactstrap';

import KukyotoLogo  from '../../components/img/kukyotoLogo.gif';

const Navigation =(props)=> 

<header className="fixed-top" >
<div id="rotated-div">
<div id="anti-rotated-div" className="container">

<nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="/">
    <img id="logopic" src={KukyotoLogo} alt="kukyotoLogo"/>
</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="nav ml-auto justify-content-center" >
{/*	<li className="nav-item"><input className="form-control navInput"/></li>*/}
	<li className="nav-item"><a className="nav-link active" href="/"><h3 className="navfonts">Abajikola</h3></a></li>
  <li className="nav-item about"><a className="nav-link" href="/"><h3 className="navfonts">Ebitukwatako</h3></a></li>
  <li className="nav-item donate-btn"><a className="nav-link" href="/"><h3 className="navfonts">Tusigemu</h3></a></li>

</ul>
  </div>
</nav>
</div>
</div>
</header>

export default Navigation;

 