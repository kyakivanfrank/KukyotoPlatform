import React from "react";
// import Comments from '../comments/Comments';

export default ()=> {
     const dispPhnumber=()=> {return{ display: "block"}}
return (
 <div className="container writebox">
<div className="donation">
<p id="instructions">Manya: Tusiima nnyo okufissawo akadde nookozesa ekibanja kyaffe, tusaba olwokwongera mu okutereza otusigemu ayamba okutambuza emirimu</p>
      <button onClick={ dispPhnumber()   } id="displayNumberbtn" className="btn btn-success">Sindika ensimbi</button>
<div className="dispPhNumber"  style={ dispPhnumber() }>
<h4 >Weereza ku nnamba zino wammanga</h4>
<h2 id="phnnumbers">Airtel: 0708481316</h2>
<h2 id="phnnumbers">MTN: 0776440763 </h2>
</div>
      </div>
      <div className="comment">READ THE COMMENTS HERE
<div className="comments-list" >
<p>
the comment section is not yet functional, please visit our
social media pages and comment from there. we'll surely receive and reply to the all the commenters thanks you</p>
{/*<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>*/}
</div>
      <form id="comment-input-N-btn">
      <input id="commentInput form-control" placeholder="tusindikire yo ekilowoozo" className="form-control" type="text"/>
      <button id="commentBtn" className="btn btn-success">Koomenti</button>
            </form>
            </div> {/* this is the comments section */}
      </div>

)
}