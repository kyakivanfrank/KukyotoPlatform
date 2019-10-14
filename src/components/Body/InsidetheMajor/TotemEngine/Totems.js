import React from 'react';
import { section } from 'reactstrap';
import Names from "./Names";
import InputBox from "../InputBox";
// import Shortlists from "../Shortlists";
// import Totems from "../TotemEngine/Totems";
import datalist from "../../../../components/datalist";
import ShortlistedDcard from '../ShortlistedDcard';

class Totems extends React.Component{

        constructor(props)
        {super(props);
        this.state = {
            filteredTotems: datalist.FirebaseTotemsData.find( totem => { return totem.TotemName === "" })
        }
    } 
        addkeys=(keys)=>{
            this.setState( { filteredTotems: datalist.FirebaseTotemsData.findfind( totem => { return totem.TotemName === keys })})
            };  // keyboard input to totems

    //     addfavorites=id=>
    //   { const arrFav = this.state.favorites;
    //     const favList = arrFav.concat([id]);
    //     this.setState( { favorites : favList } ) // shortlisting favorite items
    //      }
    render(){

return(   
<section className="names-widget">
<InputBox  addkeys={this.addkeys} />


<div className="NamesBinder">
<div className="shortlist-Space"><ShortlistedDcard favorites={ this.state.favorites } filtered={ this.state.filtered }/></div>
<div className="poolOfnames"><Names filtered={ this.state.filtered } addfavorites={ this.addfavorites.bind(this) } /></div>
</div>

</section>
);

}
}
export default Totems;

 