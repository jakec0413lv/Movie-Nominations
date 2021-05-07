import React from 'react';
import Choice from './Choice'

const Nominations = ({nominationChoices, removeNomination}) => {

    const handleClick = ({target}) => {
        const item = JSON.parse(target.value);
        removeNomination(item.imdbID);
    }

    return (
        <div>
            {nominationChoices.map((choice) => {
                const choiceObj = JSON.stringify(choice);
                return (
                    <div>
                    <Choice choice = {choice} />
                    <button onClick={handleClick} value={choiceObj}>Remove</button>
                    </div>
                )})}
        </div>
    )
}

export default Nominations;