import { actionTypes } from "../actions";
import successReducer from './successReducer';

test('when previous state is undefined, return false', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false)
})

test('return previous state when unkown action type', () => {
    const newState = successReducer(false, { type: 'unknown' });
    expect(newState).toBe(false)
})

test('return `true` for action type CORRECT_GUESS', () => {
    const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true)
})

test('return `false` for action type RESET_GAME', () => {
    const newState = successReducer(false, { type: actionTypes.RESET_GAME });
    expect(newState).toBe(false)
})