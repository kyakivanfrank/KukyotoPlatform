import React from 'react';
import './App.css';
import Navigation from "./components/header/Navigation";
import ProjComponent from "./components/ProjComponent";
import About from "./components/Body/About";
import FooterComp from "./components/Footer/FooterComp"
import Donation from "./components/Body/Donation";
import Major from "./components/Body/Major";
import { div } from 'reactstrap';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state ={}
  }
  
  render (){
return <div >
<Navigation />

<Major/>
<div className="container main-tasks" >
<h3 id="heading">Emirimu gyaffe</h3>
<div className="components">
<ProjComponent title="Amannya ne'emiziro" />
<ProjComponent title="Dikisonale yo luganda" />
</div>
<button className="donate-btn" onClick={this.onClickDonation}>Siima byetukola</button>
</div>
<About/>
<Donation/>
<FooterComp/>
</div>
  }}
export default  App;