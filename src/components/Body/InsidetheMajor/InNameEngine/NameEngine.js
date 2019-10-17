import React from 'react';
import { section } from 'reactstrap';
import Names from "./Names";
// import InputBox from "../InputBox";
import datalist from "../../../../components/datalist";
// import ShortlistedDcard from '../ShortlistedDcard';

class NameEngine extends React.Component{

        constructor(props)
        {super(props);
        this.state = {
        totemsData : this.props.totems.map(totem => totem.TotemNamesList
         .filter(randomTotemName => randomTotemName.name)),
            filtered: datalist.nameprojectDatalist.filter(name => name.erinnya.includes('')),
            favorites : []}} 

        // addkeys=(keys)=>{
        //     this.setState( { filtered: datalist.nameprojectDatalist.filter( name => name.erinnya.includes(keys)) } );
        //     };  // keyboard input

        addfavorites=id=>
      { const arrFav = this.state.favorites;
        const favList = arrFav.concat([id]);
        this.setState( { favorites : favList } ) // shortlisting favorite items
         }
    render(){

// console.log(this.state.totemsData)
return(   
<section className="names-widget">

{/* <InputBox  addkeys={this.addkeys} />  this one also must go */}

<div className="NamesBinder">
<div className="shortlist-Space">
{ /*<ShortlistedDcard favorites={ this.state.favorites } filtered={ this.state.filtered }/>*/}
</div>
<div className="poolOfnames"><Names filtered={ this.state.filtered } addfavorites={ this.addfavorites.bind(this) } /></div>
</div>

</section>
);}
}
export default NameEngine;

 