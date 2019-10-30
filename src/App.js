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
return <div>
<Navigation />
  <BrowserRouter>
  <Switch >
<Route  exact path="/" component={ StartPage }/>
<Route  exact path="/Major" component={ Major }/> {/*about routing tabs in the you'll try using the render attribute in the routes/ 
 check more from the vvumbula react book*/}
</Switch>
</BrowserRouter>

<About/>
<Devsection/>
<Donation/>
<FooterComp/>
</div>
  }}
export default  App;