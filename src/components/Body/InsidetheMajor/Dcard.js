
import React from "react";



 export default ({key, boy, erinnya, omuziro, akabbiro, ekifananyi, akifananyikyakabbiro, omukuluwekika, amasiga, emirimu, omubala}) => {

 
    return (
      
      <div className="card-body">
    <div className="imgDiv">
  <img className="cardimg" src={ekifananyi} alt="omuziro"/>
  </div>
  <img className="akabiroimg" src={akifananyikyakabbiro} alt="omuziro"/>
<h4 id="akabiro">akabbiro {akabbiro}</h4>
  <div className="card-data">
  <h2 id="nam" style={{fontWeight: "bolder", color: boy ? 'lightblue':'pink' }}>{erinnya}</h2>
   <h3>linnya lya {omuziro}</h3>
   <button id="ebirala" className="btn btn-link">soma ebirala</button>
   <p>omubala gwe kika kino guvuga nti "{omubala}"</p>
   <p>era omukulu weekika ye {omukuluwekika} atudde musiga ge {amasiga}</p>
   <p>emirimu je gyaku{emirimu}</p>
   </div>
      </div>
      
       )
        
    

}
