import React from 'react';

export default ({ totem })=> <button className="totem-btn" >
		<span id="totembtn-span">
			<div id="totem-pic"> <img className="mzirochippic" src={totem.TotemPic} alt="ekifananyikyomuziro"  /> </div>
			<h4 className="green-colored" >{ totem.TotemName }</h4>
		</span>
	</button>

