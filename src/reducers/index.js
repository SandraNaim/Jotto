import { combineReducers } from "redux";
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import gaveUp from './gaveUpReducer';
import userSecretWord from './userSecretWordReducer';

export default combineReducers({
    success,
    guessedWords,
    secretWord,
    gaveUp,
    userSecretWord
})