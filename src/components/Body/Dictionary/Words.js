import React from 'react';

import WordItem  from './WordItem';

const Words = ({ filteredFirestoreObjsList, addfavoriteWords }) => {
     return filteredFirestoreObjsList.map( doc =>  ( 
         <WordItem 
         key={ doc[0] } id={ doc[0] }
          addfavoriteWords={addfavoriteWords} 
          Word={ doc[1].Word }
           />
          ));
};
 
export default Words;