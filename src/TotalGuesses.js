import React from "react";

const TotalGuesses = (props) => {
    if(props.guessedWords.length){
        return (
            <div data-test="component-total-guesses" className="">
                <span data-test="total-guesses-number">
                    Total Guesses: #{props.guessedWords.length}
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-total-guesses" />
        )
    }
};

export default TotalGuesses;