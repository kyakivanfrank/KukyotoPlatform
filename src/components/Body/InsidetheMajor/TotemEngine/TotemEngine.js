import React  from  "react";
// import InputBox from "../InputBox";
import TotemsList from "./TotemsList";
import datalist from "../../../datalist";



class TotemEngine extends React.Component {

constructor(props)
{super(props);
    this.state = { filteredTotemsData : datalist.FirebaseTotemsData.filter( eachTotem => eachTotem.TotemName.includes(""))
 }
}

// addkeys=(keys)=>{
//     this.setState( { filteredTotemsData : datalist.FirebaseTotemsData.filter( eachTotem => eachTotem.TotemName.includes(keys)) } );
//     };  // keyboard input

    render (){

return (
    <section className="names-widget">
{/* <InputBox  addkeys={this.addkeys} /> */}
    <TotemsList filteredTotemsData={this.state.filteredTotemsData}/>
    </section>);
}}

export default TotemEngine;