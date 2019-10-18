import React from 'react';
import { section } from 'reactstrap';
import Names from "./Names";
import InputBox from "../InputBox";
// import datalist from "../../../../components/datalist";
import ShortlistedDcard from '../ShortlistedDcard';

class NameEngine extends React.Component{

        constructor(props)
        {super(props);
        this.state = {
        
            filtered: this.props.totems.map(totem => totem.TotemNamesList
              .filter(randomTotemNameObj => randomTotemNameObj.name.includes(''))),
            favorites : []} } 

        addkeys=(keys)=>{
            this.setState( { filtered: this.props.totems.map(totem => totem.TotemNamesList
              .filter(randomTotemNameObj => randomTotemNameObj.name.includes(keys))) } );
            };  // keyboard input

        addfavorites=id=>
      { const arrFav = this.state.favorites;
        const favList = arrFav.concat([id]);
        this.setState( { favorites : favList } ) // shortlisting favorite items
         }
    render(){

// console.log(this.state.filtered)
return(   
<section className="names-widget">

<InputBox  addkeys={this.addkeys} /> 

<div className="NamesBinder">
<div className="shortlist-Space">
<ShortlistedDcard favorites={ this.state.favorites } filtered={ this.state.filtered }/>
</div>
<div className="poolOfnames"><Names filtered={ this.state.filtered } addfavorites={ this.addfavorites.bind(this) } /></div>

</div>

</section>
);}
}
export default NameEngine;

 