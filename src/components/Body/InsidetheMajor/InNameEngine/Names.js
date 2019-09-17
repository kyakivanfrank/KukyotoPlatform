import React from 'react';

import NameItem  from './NameItem';

export default ({ filtered, addfavorites })=> {

  return filtered.map( nem => ( <NameItem key={ nem.id } 
    addfavorites={addfavorites} nem={nem}/>));
    
  }
  

 