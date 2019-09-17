import React from 'react';


import { input } from 'reactstrap';

class Inputbox extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      keystrokes: ''
    }
  }

  onChange=(e)=> {
    this.setState({ keystrokes: e.target.value })
setTimeout(() => {
this.onSubmit(e);
}, 100);
}


  onSubmit=(e)=>{
    this.props.addkeys(this.state.keystrokes);
  };
  
  render (){

    console.log(this.state.keystrokes)

    return (
      <div>
      <form onSubmit={this.onSubmit}><input id="inputboxdict" className="form-control"  addkeys={this.state.keystrokes}  type="text"
      value = {this.state.keystrokes} onChange = {this.onChange}/>
      </form>
      </div>
    );
  }

  }
export default Inputbox;
