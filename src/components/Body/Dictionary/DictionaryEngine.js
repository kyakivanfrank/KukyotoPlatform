import React from "react";
import InputBox from "../InsidetheMajor/InputBox";
import Words from "./Words";
import DescriptionView from "./DescriptionView";
import wordarchive from "./wordarchive";

const rnd = wordarchive.length;
const getRandomint= big => Math.floor(Math.random()*Math.floor(big));

export default class DictionaryEngine extends React.Component{

constructor(props){
super(props);
this.state= { filteredWordlist : wordarchive.filter( eachWord => eachWord.word.includes("")),
favoriteWords : [getRandomint(rnd)]
}}

addkeys=(keys)=>{
    this.setState( { filteredWordlist: wordarchive.filter( eachWord => eachWord.word.includes(keys)) } );
    };
    
    addfavoriteWords=id=>
    {   const favWordsList = this.state.favoriteWords.concat([id]); 
        this.setState( { favoriteWords : favWordsList } )
    };

    clickeditem=(arr)=>
    {
    const arraylength = arr.length-1;
    return arr[arraylength];
    }

render(){

    // console.log(this.addkeys)
    return (<section className="names-widget">
        <InputBox addkeys={this.addkeys} />
<Words 
filteredWordlist={ this.state.filteredWordlist } addfavoriteWords={ this.addfavoriteWords.bind(this) }
 />

<DescriptionView clickeditem={this.clickeditem(this.state.favoriteWords)} filteredWordlist={ this.state.filteredWordlist }/>
        </section>);
}}