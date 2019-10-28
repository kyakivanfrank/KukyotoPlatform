import React from "react";
import DcardItem from "./DcardItem";

export default ({favorites, filtered}) => {

    if(favorites.length >= 2) 
    {favorites.reverse()
    favorites.pop(favorites.length)
    }
 // this art is going to be so technical needs alot of knowhow
 // about this please refer from the vvumvula book. 
    const chosenName = favorites.map( id => {
        const chosen = filtered[id];
        return <DcardItem NameDescription ={chosen.NameDescription} name={chosen.name} boy={chosen.boy} TotemName={chosen.TotemName}
        TotemKabiro={chosen.TotemKabiro} TotemPic={chosen.TotemPic} KabiroPic={chosen.KabiroPic} Mukuluwekika={chosen.Mukuluwekika}
         TotemMasiga={chosen.TotemMasiga} TotemEmirimu={chosen.TotemEmirimu} Omubala={chosen.Omubala} />
    })

    return <div id="Card-cont">{chosenName}</div>
    }

