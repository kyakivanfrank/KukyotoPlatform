import React from 'react';

import WordItem  from './WordItem';

const Words = ({ filteredWordlist, addfavoriteWords })=> { return filteredWordlist.map( word => ( 
    <WordItem key={ word.id }
    addfavoriteWords={addfavoriteWords} word={word}/>
    ));
};

  
export default Words;