import React from "react";
import TotemItem from "./TotemItem";


export default ({ filtered }) => {

    const availableones = filtered.map( totem => { return <TotemItem key={totem.id} totem={totem}  />})
    return <div className="totems">{availableones}</div> 
        }
