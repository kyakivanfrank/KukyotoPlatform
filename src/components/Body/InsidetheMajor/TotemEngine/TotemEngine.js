import React  from  "react";
import InputBox from "../InputBox";
import TotemsList from "./TotemsList";
import datalist from "../../../datalist";


class TotemEngine extends React.Component {

constructor(props)
{super(props);
    this.state = { filteredTotemsData : datalist.FirebaseTotemsData.filter( eachTotem => eachTotem.TotemName.includes(""))
 }
}


    render (){

        console.log(this.state.filteredTotemsData)
return (
    <section className="names-widget">
<InputBox  addkeys={this.addkeys} />
<TotemsList filteredTotemsData={this.state.filteredTotemsData}/>
    
    
    
    
    </section>
    
    
    
    
    );

        }
}

export default TotemEngine;