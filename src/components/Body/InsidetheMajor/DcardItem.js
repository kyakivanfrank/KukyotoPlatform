import React from "react";

 export default ({ boy, erinnya, omuziro, akabbiro, ekifananyi, akifananyikyakabbiro, omukuluwekika, amasiga, emirimu, omubala}) => {

    return (
      <div className="card-body">
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

   <h4>omukulu weekika</h4>
   <p>{omukuluwekika}</p>
   <h4>amasiga gekika kino</h4>
   <p>{amasiga}</p>
    <p>emirimu je gyaku{emirimu}</p>


   </div>



      </div>
      
       )
        
    

}
