import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Header from "./header";
import SearchResults from "./SearchResults"
import SearchForm from "./searchForm"
import Nominations from "./Nominations"

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ nominationChoices, setNominationChoices ] = useState([]);
  const [ displayChoice, setDisplayChoice ] = useState("");

  const fiveNominations = (nominationChoices.length === 5)

  const apiKey = ""
  const queryParams = "&s="

  const searchAPI = async (userInput) => {
    let data = []
    setDisplayChoice(userInput)
    const url =`http://www.omdbapi.com/?apikey=${apiKey}${queryParams}${userInput}`
    try{
      const response = await fetch(url);
      if(response.ok){
        const jsonResponse = await response.json();
        data.push(jsonResponse);
        
        if(data.length > 0){
          
          setSearchResults(jsonResponse.Search.slice(0,5))
        }
      }
    }catch(error){
      console.log(error);
    }
  }

  const addNomination = (choice) => {
    if(fiveNominations){
      return;
    }
    setNominationChoices((prev) => {
      return [choice, ...prev];
    })
  }

  const removeNomination = (item) => {
    console.log(item)
    const newNominations = nominationChoices.filter(choice => choice.imdbID !== item);
    setNominationChoices(newNominations);
  }

  return (
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div className= "searchBar">
        <SearchForm Search = {searchAPI}/>
      </div>
      <div className="banner">
        {fiveNominations && <h3>All nominations have been made!</h3>}
      </div>
      <div className= "displayTitle">
        <h3>Search results for "{displayChoice}"...</h3>
      </div>
      <div className="displayS">
          <SearchResults searchResults={searchResults} onNomClick={addNomination} nominationChoices = {nominationChoices}/>
      </div>
      <div className= "nomTitle">
        <h3>Nominations</h3>
      </div>
      <div className="displayN">
          <Nominations nominationChoices = {nominationChoices} removeNomination={removeNomination}/>
      </div>
    </div>
  );
}

export default App;
