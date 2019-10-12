import React from 'react';

import WordItem  from './WordItem';

const Words = ({ filteredFirestoreObjsList, addfavoriteWords }) => {
     return filteredFirestoreObjsList.map( doc => ( 
         <WordItem key={ filteredFirestoreObjsList.indexOf(doc) } id={ filteredFirestoreObjsList.indexOf(doc) }
          addfavoriteWords={addfavoriteWords} Word={ doc[0].Word } />
          ));
};
 
export default Words;