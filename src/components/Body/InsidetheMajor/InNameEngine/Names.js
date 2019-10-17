import React from 'react';

import NameItem  from './NameItem';

export default ({ filtered, addfavorites })=> {


 return filtered.map(TotemsNameList => TotemsNameList
  .map(nameObj =>  < NameItem key={ TotemsNameList.indexOf( nameObj ) } /* addfavorites={addfavorites}*/  nameObj={nameObj} /> ))
 
  }
  

 