import React from "react";
import TotemItem from "./TotemItem";
import NameEngine from '../InNameEngine/NameEngine';



class TotemsList extends React.Component{
    constructor(props){
        super(props);
        this.state = { totems : this.props.filteredTotemsData }
    }

render(){
    return (
        <div>
        <div className="totems">
        { this.state.totems.map( totem => { return <TotemItem key={ this.state.totems.indexOf(totem) } totem={totem}  /> }) }
        </div> 
        < NameEngine totems={this.state.totems}/>
        </div>

    )
}}
export default TotemsList;