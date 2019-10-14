import React from 'react';
import { section } from 'reactstrap';
import Names from "./Names";
import InputBox from "../InputBox";
// import Shortlists from "../Shortlists";
// import Totems from "../TotemEngine/Totems";
import datalist from "../../../../components/datalist";
import ShortlistedDcard from '../ShortlistedDcard';

class NameEngine extends React.Component{

        constructor(props)
        {super(props);
        this.state = {
            filtered: datalist.nameprojectDatalist.filter(name => name.erinnya.includes('')),
            favorites : []}} 

        addkeys=(keys)=>{
            this.setState( { filtered: datalist.nameprojectDatalist.filter( name => name.erinnya.includes(keys)) } );
            };  // keyboard input

        addfavorites=id=>
      { const arrFav = this.state.favorites;
        const favList = arrFav.concat([id]);
        this.setState( { favorites : favList } ) // shortlisting favorite items
         }
    render(){

return(   
<section className="names-widget">
<InputBox  addkeys={this.addkeys} />

{
    // <Totems filtered={ this.state.filtered }/>
}
{
// <div className="shortlists" placeholder="click an item to view details">
// <Shortlists favorites={ this.state.favorites } filtered={ this.state.filtered } />
//  </div>
}
<div className="NamesBinder">
<div className="shortlist-Space"><ShortlistedDcard favorites={ this.state.favorites } filtered={ this.state.filtered }/></div>
<div className="poolOfnames"><Names filtered={ this.state.filtered } addfavorites={ this.addfavorites.bind(this) } /></div>
</div>

</section>
);}
}
export default NameEngine;

 