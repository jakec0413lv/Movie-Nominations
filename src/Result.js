import React from 'react';
 
const Result = ({result}) => {
const imdbUrl = "https://www.imdb.com/title/" + result.imdbID;
   return (
       <div>
            <a href={imdbUrl} target="_blank">{result.Title}</a><p>{result.Year}</p> 
       </div>
   );
};
 
export default Result;