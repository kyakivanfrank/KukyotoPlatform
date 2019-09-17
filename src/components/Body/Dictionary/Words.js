import React from 'react';

import WordItem  from './WordItem';

export default ({ filteredWordlist, addfavoriteWords })=> {

  return filteredWordlist.map( word => ( 
    <WordItem key={ word.id }
    addfavoriteWords={addfavoriteWords} word={word}/>
    ));
    
  }
  

 