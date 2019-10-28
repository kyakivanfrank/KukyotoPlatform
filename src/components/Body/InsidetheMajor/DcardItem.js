import React from "react";

 export default ({ boy, name, TotemName, TotemKabiro, TotemPic, KabiroPic, Mukuluwekika, TotemMasiga, TotemEmirimu, Omubala}) => {

    return <div className="card-body">
    <div className="imgDiv">
  <img className="cardimg" src={TotemPic} alt="TotemName"/>
  </div>

<div className="akabiroDiv">
   <h4 id="akabiro" >{TotemKabiro}</h4>
<img className="akabiroimg " src={KabiroPic} alt="TotemName"/>
</div>
  <div className="card-data">
  <h1 id="nam" style={{fontWeight: "bolder", color: boy ? 'lightblue':'pink' }}>{name}</h1>
   <h3 id="omuziroCardName">{TotemName}</h3>

   <button id="ebirala" className="btn btn-link">ebirala</button>
   <h3 id="omubalaCard"> " {Omubala} "</h3>

<div className="wordNsignDiv">
   <h4 className="green-colored">Omukulu weekika:  </h4>
   <p>{Mukuluwekika}</p></div>

   <div classbobo="wordNsignDiv">
   <h4 classbobo="green-colored">TotemMasiga: </h4>
   <p>{TotemMasiga}</p></div>
    <h4 classbobo="green-colored">TotemEmirimu je jeekika kino: </h4>{TotemEmirimu}

   </div>
      </div>
       }
