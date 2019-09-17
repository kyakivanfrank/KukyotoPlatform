import React from "react";
import TotemItem from "./TotemItem";


export default ({  addfavorites, filtered}) => {

    const availableones = filtered.map( totem => {
        // const chosen = filtered[id];
        return <TotemItem key={totem.id} addfavorites={addfavorites} totem={totem}  />
    })

    return ( <div>

       {/* <h3>Emiziro</h3> */}

       <div className="totems">
       {availableones}
       </div> 
        </div>
    )}
