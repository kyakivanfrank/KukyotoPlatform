import React from "react";
import InputBox from "../InsidetheMajor/InputBox";
import Words from "./Words";
import DescriptionView from "./DescriptionView";
// import datalist from "../../../components/datalist";
import firebase from '../../../firebase';

// firebase.firestore().collection('Dictionary').add({ Word : 'mmeeza', WordType : 'kintu',
// english : 'table', description : 'enkintu okutuuzibwa emeere', 
// useofWord : 'emmeeza emenyese', 
// relatedWords : ['ntebe','kitanda','mukeeka' ]
// });

export default class DictionaryEngine extends React.Component{

constructor(props){
super(props);
this.state= { 
favoriteWords : [],
filteredFirestoreObjsList : ["this is a void state /  nothing is kept in here"]
}}

RetrievefirestoreData = (keys) =>{
    firebase.firestore().collection("Dictionary").get()
    .then(querySnapshot => { this.setState( { filteredFirestoreObjsList :
              querySnapshot.docs.map( doc => [ doc.data() ] // if you want you can fetch the object id by doc.id
              )
        
            });
         });
         }

        // .filter( eachFireStoreObj => eachFireStoreObj.Word.includes("") )

    componentDidMount(){
        this.RetrievefirestoreData();
    }

        addfavoriteWords=key=>
        {   const favWordsList = this.state.favoriteWords.concat([key]); 
            this.setState( { favoriteWords : favWordsList } )
        };



render(){

// console.log(this.state.filteredFirestoreObjsList[3])

    return <section className="names-widget">
        <InputBox addkeys={this.RetrievefirestoreData} />
<Words filteredFirestoreObjsList={ this.state.filteredFirestoreObjsList } addfavoriteWords={ this.addfavoriteWords.bind(this) }/>

 <DescriptionView favoriteWords={this.state.favoriteWords} filteredFirestoreObjsList={ this.state.filteredFirestoreObjsList }/>

        </section>;
}}