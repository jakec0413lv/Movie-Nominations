import React, { useState } from 'react';

const SearchForm = ( {Search} ) => {

    const [ userInput, setUserInput ] = useState('');

    const handleInputChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleChange = (e) => {
        e.preventDefault();
        Search(userInput);
    }
    return (
        <div>
        <h3>Movie Title</h3>
        <form onChange={handleChange}>
            <input value={userInput} type="text" onChange={handleInputChange} placeholder="The Avengers, Harry Potter, etc..." required/>
        </form>
        </div>
    );
};

export default SearchForm;