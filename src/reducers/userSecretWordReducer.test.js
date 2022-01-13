import { actionTypes } from "../actions";
import userSecretWordReducer from "./userSecretWordReducer";

test('return null for an undefined state', () => {
    const newState = userSecretWordReducer(undefined, {});
    expect(newState).toBe(null);
})

test('return the previous state for an unknown action type', () => {
    const newState = userSecretWordReducer(null, {type: 'test'});
    expect(newState).toBe(null);
})

test('return inProgress for a action type of `USER_ENTERING` ', () => {
    const newState = userSecretWordReducer(null, { type:  actionTypes.USER_ENTERING});
    expect(newState).toEqual('inProgress');
})

test('return done for a action type of `ENTER_OWN_SECRET_WORD` ', () => {
    const newState = userSecretWordReducer(null, { type:  actionTypes.ENTER_OWN_SECRET_WORD});
    expect(newState).toEqual('done');
})