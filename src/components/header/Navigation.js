import React from 'react';
import { div, header, nav, a, button, span, ul, li } from 'reactstrap';

import KukyotoLogo  from '../Body/InsidetheMajor/img/kukyotoLogo.gif';

const Navigation =(props)=> 

<header >
<div id="rotated-div">
<div id="anti-rotated-div" className="container2">

<nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="/">
    <img id="logopic" src={KukyotoLogo} alt="kukyotoLogo"/>
</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="nav ml-auto justify-content-center" >
	<li className="nav-item"><a className="nav-link active" href="/">Developers</a></li>
	<li className="nav-item about"><a className="nav-link" href="/">About</a></li>
</ul>
  </div>
</nav>
</div>
</div>
</header>

export default Navigation;

 