import React from 'react';
import './App.css';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import Navigation from "./components/header/Navigation";
import About from "./components/Body/About";
import FooterComp from "./components/Footer/FooterComp"
import Donation from "./components/Body/Donation";
import StartPage from "./components/Body/StartPage/StartPage";
import Major from "./components/Body/Major";
import { div } from 'reactstrap';

import Devsection from "./components/Body/Devsection";

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
<div>please subscribe as a floating component/ someone can't comment before subscribing</div>

  <BrowserRouter>
  <Switch >
<Route  exact path="/" component={ StartPage }/>
<Route  exact path="/Major" component={ Major }/>
</Switch>
</BrowserRouter>
<About/>
<Devsection/>
<Donation/>
<FooterComp/>
</div>
  }}
export default  App;