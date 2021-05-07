import React from 'react';
 
const Choice = ({choice}) => {
const imdbUrl = "https://www.imdb.com/title/" + choice.imdbID;
   return (
       <div>
            <a href={imdbUrl} target="_blank">{choice.Title}</a><p>{choice.Year}</p> 
       </div>
   );
};
 
export default Choice;