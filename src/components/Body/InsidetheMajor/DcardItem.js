import React from "react";

 export default ({ boy, erinnya, omuziro, akabbiro, ekifananyi, akifananyikyakabbiro, omukuluwekika, amasiga, emirimu, omubala}) => {

    return <div className="card-body">
    <div className="imgDiv">
  <img className="cardimg" src={ekifananyi} alt="omuziro"/>
  </div>

<div className="akabiroDiv">
<div className="col-lg-9"><h4 id="akabiro" >{akabbiro}</h4></div>
<div className="col-lg-3 akabiDV"><img className="akabiroimg " src={akifananyikyakabbiro} alt="omuziro"/></div>
</div>
  <div className="card-data">
  <h1 id="nam" style={{fontWeight: "bolder", color: boy ? 'lightblue':'pink' }}>{erinnya}</h1>
   <h3 id="omuziroCardName">{omuziro}</h3>

   <button id="ebirala" className="btn btn-link">ebirala</button>
   <h3 id="omubalaCard"> " {omubala} "</h3>

<div className="wordNsignDiv">
   <h4 className="green-colored">Omukulu weekika:  </h4>
   <p>{omukuluwekika}</p></div>

   <div className="wordNsignDiv">
   <h4 className="green-colored">Amasiga: </h4>
   <p>{amasiga}</p></div>
    <h4 className="green-colored">Emirimu je jeekika kino: </h4>{emirimu}

   </div>
      </div>
       }
