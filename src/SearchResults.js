import React from 'react';
import Result from './Result'

const SearchResults = ({searchResults, onNomClick, nominationChoices}) => {

    const handleClick = ({target}) => {
        const item = JSON.parse(target.value);
        onNomClick(item);
    }
    if(!searchResults){
        return <div></div>
    }

    return (
        <div>
            {searchResults.map((result,index) => {
                const resultObj = JSON.stringify(result);
                const found = nominationChoices.some(el => el.imdbID === result.imdbID);
                console.log(found);
                return (
                    <div key = {result.imdbID} className="result">
                    <Result  result = {result} />
                    <button onClick={handleClick} value={resultObj} disabled={found}>Nominate</button>
                    </div>
                )})}
        </div>
    )
}

export default SearchResults;

