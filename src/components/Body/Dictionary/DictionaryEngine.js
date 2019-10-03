import React from "react";
import InputBox from "../InsidetheMajor/InputBox";
import Words from "./Words";
import DescriptionView from "./DescriptionView";
import datalist from "../../../components/datalist";
import firebase from '../../../firebase';

firebase.firestore().collection('Dictionary').add({ Word : 'mmeeza', WordType : 'kintu',
english : 'table', description : 'enkintu okutuuzibwa emeere', 
useofWord : 'emmeeza emenyese', 
relatedWords : ['ntebe','kitanda','mukeeka' ]
});

export default class DictionaryEngine extends React.Component{

constructor(props){
super(props);
this.state= { filteredWordlist : datalist.wordarchive.filter( eachWord => eachWord.word.includes("")),

favoriteWords : []
}}

addkeys=(keys)=>{
    this.setState( { filteredWordlist: datalist.wordarchive.filter( eachWord => eachWord.word.includes(keys)) } );
    };
    addfavoriteWords=id=>
    {   const favWordsList = this.state.favoriteWords.concat([id]); 
        this.setState( { favoriteWords : favWordsList } )
    };

render(){
    return <section className="names-widget">
        <InputBox addkeys={this.addkeys} />
<Words filteredWordlist={ this.state.filteredWordlist } addfavoriteWords={ this.addfavoriteWords.bind(this) }/>
<DescriptionView favoriteWords={this.state.favoriteWords} filteredWordlist={ this.state.filteredWordlist }/>
        </section>;
}}