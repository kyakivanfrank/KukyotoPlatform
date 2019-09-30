import React from "react";
import NameTotemItem from "./InNameEngine/NameTotemItem";

export default ({favorites, filtered}) => {

    const chosenName = favorites.map(id => {
        const chosen = filtered[id];
        return <NameTotemItem key={chosen.id} erinnya={chosen.erinnya} boy={chosen.boy} omuziro={chosen.omuziro}/>
    })

    return ( <div>
    {chosenName}
    </div>
    )}
