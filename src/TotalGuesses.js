import React from "react";

const TotalGuesses = (props) => {
    if(props.guessedWords.length){
        return (
            <div className="">
                <span>
                    Total Guesses: #{props.guessedWords.length}
                </span>
            </div>
        )
    } else {
        return (
            <div />
        )
    }
};

export default TotalGuesses;