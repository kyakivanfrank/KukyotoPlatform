import React from 'react';
import { section } from 'reactstrap';
import InputBox from "../InputBox";
import datalist from "../../../../components/datalist";

class TotemsEngine extends React.Component{

        constructor(props)
        {super(props);
        this.state = {
            filteredTotems: datalist.FirebaseTotemsData.find( totem => { return totem.TotemName === "" })
        }
    } 
        addkeys=(keys)=>{
            this.setState( { filteredTotems: datalist.FirebaseTotemsData.findfind( totem => { return totem.TotemName === keys })})
            };  // keyboard input to totems

   
    render(){

return(   
<section className="names-widget">
<InputBox  addkeys={this.addkeys} />



</section>
);

}
}
export default TotemsEngine;

 