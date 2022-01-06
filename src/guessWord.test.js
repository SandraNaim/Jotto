import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

const setup = (state = {}) => {

    // TODO: apply state it will differ  depending if it is a redux or context
    const wrapper = mount(<App />);
    
    // add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'train' } });

    // simulate click on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });

    return wrapper;
}

describe.skip('no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        });
    });
    test('create GuessedWords table with one row', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    })
})

describe.skip('some word guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
        });
    });
    test('add rows to guessedWords table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(2);
    })
})

describe.skip('guess secret word', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
        });

        // add value to input box
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'party' } };
        inputBox.simulate('change', mockEvent)

        // simulate click on submit button
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() {} });
    });

    test('add rows to guessedWords table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(2);
    })

    test('display congrats component', () => {
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    })

    test('does not display input component', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBe(false);

        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.exists()).toBe(false);
    })
})