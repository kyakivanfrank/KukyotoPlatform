import React from "react";
import Dcard from "./Dcard";


export default ({clickedItem, filtered}) => {

    const clickedones = clickedItem.map(id => {
        const clicked = filtered[id];
        return <Dcard 
        key={id}
        boy={clicked.boy}
        erinnya={clicked.erinnya}
        omubala={clicked.omubala} 
        akabbiro={clicked.akabbiro}
        omuziro={clicked.omuziro}
        akifananyikyakabbiro={clicked.akifananyikyakabbiro}
        omukuluwekika={clicked.omukuluwekika}
        ekifananyi={clicked.ekifananyi}
        amasiga={clicked.amasiga}
        emirimu={clicked.emirimu} />
    })

    return ( <div>
    {clickedones}
    </div>
    )}
