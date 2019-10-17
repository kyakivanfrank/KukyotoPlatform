import React from 'react';

import NameItem  from './NameItem';

export default ({ filtered, addfavorites })=> {

  return filtered.map( name => ( <NameItem key={ name.id } 
    addfavorites={addfavorites} name={name}/>));
    
  }
  

 