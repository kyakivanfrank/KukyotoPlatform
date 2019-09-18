import React from 'react';

export default ({  totem })=> <button className="totem-btn" >
		<span id="totembtn-span">
			<div id="totem-pic"> <img className="mzirochippic" src={totem.ekifananyi} alt="ekifananyikyomuziro"  /> </div>
			<h4 >{ totem.omuziro }</h4>
		</span>
	</button>

