import React from "react";
import TotemItem from "./TotemItem";


export default ({ filteredTotemsData }) => {

    const availableones = filteredTotemsData.map( totem => {
         return <TotemItem key={totem.id} totem={totem}  /> 
        })
    return <div className="totems">{availableones}</div> 
        }
