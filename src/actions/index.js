import axios from "axios";
import { getLetterMatchCount } from "../helpers";
import fiveLetterWords from '../five-letter-words.json';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
}

export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    
        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });
    
        if (guessedWord === secretWord) {
            dispatch({ type: actionTypes.CORRECT_GUESS });
        }
    };
};

export const getSecretWord = () => {
    return function(dispatch) {
      return axios.get('http://localhost:3030')
        .then(response => {
          dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: response.data
          })
        });
    }  

    // you can either run it from the 3030 server or just uncomment this line

    // return function(dispatch) {
    //     let data = fiveLetterWords.fiveLetterWords
    //     const word = data[Math.floor(Math.random() * data.length)]
    //     console.log("word:", word)

    //     return dispatch({
    //         type: actionTypes.SET_SECRET_WORD,
    //         payload: word
    //       })
    // }
}