import React from "react";
import Dcard from "./Dcard";

export default ({favorites, filtered}) => {

    if(favorites.length >= 2) 
    {
     favorites.reverse()
    favorites.pop(favorites.length)
    }
// from here is where the data fro  the shortlister will come

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

