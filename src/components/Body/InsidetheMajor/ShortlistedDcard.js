import React from "react";
import DcardItem from "./DcardItem";

export default ({favorites, filtered}) => {

    if(favorites.length >= 2) 
    {favorites.reverse()
    favorites.pop(favorites.length)
    }

    const chosenName = favorites.map(id => {
        const chosen = filtered[id];
        return <DcardItem key={chosen.id} erinnya={chosen.erinnya} boy={chosen.boy} omuziro={chosen.omuziro} akabbiro={chosen.akabbiro} 
        ekifananyi={chosen.ekifananyi} akifananyikyakabbiro={chosen.akifananyikyakabbiro} 
        omukuluwekika={chosen.omukuluwekika} amasiga={chosen.amasiga} emirimu={chosen.emirimu} omubala={chosen.omubala}/>
    })

    return <div id="Card-cont">{chosenName}</div>
    }

