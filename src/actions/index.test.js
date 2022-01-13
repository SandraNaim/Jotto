import moxios from "moxios";
import { actionTypes, enterOwnSecretWord, getSecretWord, giveUp, resetGame, setUserEntering } from ".";
import { storeFactory } from "../../test/testUtils";
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from  'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe('getSecretWord', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('secret word is returned', () => {
        const store = storeFactory();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: 'party'
            });
        });

        return store.dispatch(getSecretWord())
            .then(() => {
                const secretWord = store.getState().secretWord;
                expect(secretWord).toBe('party');
            })
    })
})

describe('giveUp', () => {
    test('should create action to give up', () => {
        expect(giveUp()).toEqual({ type: actionTypes.GIVE_UP })
    })
})

describe('setUserEntering', () => {
    test('should create action to give up', () => {
        expect(setUserEntering()).toEqual({ type: actionTypes.USER_ENTERING })
    })
})

describe('resetGame', () => {
    test('should create a rest game action', () => {
        const store = mockStore();
        store.dispatch(resetGame())
        const action = store.getActions();
        expect(action[0]).toEqual({type: "RESET_GAME"});
    })
})

describe('enterOwnSecretWord', () => {
    test('should create set secret word and user own secret word action', () => {
        const store = mockStore();
        let userSecretWord = 'train';
        store.dispatch(enterOwnSecretWord(userSecretWord))
        const action = store.getActions();
        expect(action[0]).toEqual({ type: actionTypes.SET_SECRET_WORD, payload:'train' });
        expect(action[1]).toEqual({ type: actionTypes.ENTER_OWN_SECRET_WORD });
    })
})