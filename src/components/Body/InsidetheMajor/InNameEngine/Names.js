import React from 'react';

import NameItem  from './NameItem';

class Names extends React.Component{

constructor(props){
    super(props);
    this.state = { nameObj : this.props.filtered.map(TotemsNameList => TotemsNameList
        .map(nameObj => nameObj ))

    }
}


render(){

    return (
    this.props.filtered.map(TotemsNameList => TotemsNameList
        .map(nameObj =>  < NameItem key={ TotemsNameList.indexOf( nameObj ) } id={TotemsNameList.indexOf( nameObj ) } 
         addfavorites={this.props.addfavorites} filtered={this.props.filtered}  nameObj={nameObj} /> ))
    )
}

}
export default Names;
  

 