import { actionTypes } from "../actions";
import gaveUpReducer from './gaveUpReducer';

test('when previous state is undefined, return false', () => {
    const newState = gaveUpReducer(undefined, {} );
    expect(newState).toBe(false);
});

test('return previous state when action is unkown type', () => {
    const newState = gaveUpReducer(false, { type: 'test' });
    expect(newState).toBe(false);
})

test('return true if action type is `GIVE_UP` ', () => {
    const newState = gaveUpReducer(false, { type: actionTypes.GIVE_UP });
    expect(newState).toBe(true);
})

test('return false if action type is `RESET_GAME` ', () => {
    const newState = gaveUpReducer(false, { type: actionTypes.RESET_GAME });
    expect(newState).toBe(false);
})