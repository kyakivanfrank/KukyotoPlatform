import React from "react";
import Dcard from "./Dcard";

export default ({favorites, filtered}) => {

    const chosenName = favorites.map(id => {

        const chosen = filtered[id];
        return <Dcard id={chosen.id} erinnya={chosen.erinnya} boy={chosen.boy} omuziro={chosen.omuziro} akabbiro={chosen.akabbiro} 
        ekifananyi={chosen.ekifananyi} akifananyikyakabbiro={chosen.akifananyikyakabbiro} 
        omukuluwekika={chosen.omukuluwekika} amasiga={chosen.amasiga} emirimu={chosen.emirimu} omubala={chosen.omubala}/>
    })

    return ( <div>
    {chosenName}
    </div>
    )}

