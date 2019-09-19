import React from 'react';

import { input } from 'reactstrap';
class Inputbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keystrokes: ''
    }}

  onChange=(e)=> {
    this.setState({ keystrokes: e.target.value })
  setTimeout(() => { this.onSubmit(e);
  }, 50);
}
  onSubmit=(e)=>{
    this.props.addkeys(this.state.keystrokes);
  };
  render (){
      // onSubmit={this.onSubmit} // this is a form prop
      // value = {this.state.keystrokes} // this is an input prop

    return (
      <div>
      <form >
      <input id="inputbox" className="form-control"
       addkeys={this.state.keystrokes} 
       type="text"
      onChange = {this.onChange}/>
      </form>
      </div>
    );
  }}
export default Inputbox;
