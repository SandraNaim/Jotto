import { actionTypes } from "../actions";
import secretWordReducer from "./secretWordReducer";

test('return empty string for an undefined state', () => {
    const newState = secretWordReducer(undefined, {});
    expect(newState).toBe("");
})

test('return the previous state for an unknown action type', () => {
    const newState = secretWordReducer("", {type: 'test'});
    expect(newState).toBe("");
})

test('return action payload for a action type of `SET_SECRET_WORD` ', () => {
    const newState = secretWordReducer("", { 
        type: actionTypes.SET_SECRET_WORD, 
        payload: { secretWord: 'party' } 
    });
    expect(newState).toEqual({ secretWord: 'party' });
})