import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import About from "./components/Body/About";
import FooterComp from "./components/Footer/FooterComp"
import Donation from "./components/Body/Donation";
import StartPage from "./components/Body/StartPage/StartPage";
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
<BrowserRouter>
<Switch>
<Route path="/StartPage" exact component={ StartPage }/>
<Route path="/Major" exact component={ Major }/>
</Switch>
</BrowserRouter>

<About/>
<Donation/>
<FooterComp/>
</div>
  }}
export default  App;