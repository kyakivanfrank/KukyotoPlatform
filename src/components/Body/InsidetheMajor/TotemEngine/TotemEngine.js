import React  from  "react";
import InputBox from "../InputBox";
import TotemsList from "./TotemsList";
import datalist from "../../../datalist";
import NamesList from "../InNameEngine/NamesList"


class TotemEngine extends React.Component {

constructor(props)
{super(props);
    this.state = { filteredTotemsData : datalist.FirebaseTotemsData.filter( eachTotem => eachTotem.TotemName.includes(""))
 }
}

addkeys=(keys)=>{
    this.setState( { filteredTotemsData : datalist.FirebaseTotemsData.filter( eachTotem => eachTotem.TotemName.includes(keys)) } );
    };  // keyboard input




    render (){

        console.log(this.state.filteredTotemsData)
return (
    <section className="names-widget">
<InputBox  addkeys={this.addkeys} />
<TotemsList filteredTotemsData={this.state.filteredTotemsData}/>
<div className="NamesBinder">
<div className="poolOfnames"><NamesList filteredTotemsData={ this.state.filteredTotemsData }  /></div>
</div>

    </section>
    
    );

        }
}

export default TotemEngine;