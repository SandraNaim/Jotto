import React from 'react';
import { mount } from 'enzyme';

import Input from './Input';
import { checkProps, findByTestAttr, storeFactory } from '../test/testUtils';
import { Provider } from 'react-redux';

const setup = ( initialState={}, secretWord='party') => {
    const store = storeFactory(initialState);
    return mount(<Provider store={store}><Input secretWord={secretWord} /></Provider>)
} 

describe('render', () => {
    describe('success is true', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup({ success: true })
        });
        
        test('renders without error', () => {
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1)
        });

        test('input box does not show', () => {
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(false)
        });

        test('submit button does not show', () => {
            const submitBtn = findByTestAttr(wrapper,'submit-button');
            expect(submitBtn.exists()).toBe(false)
        });
    })

    describe('success is false', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup({ success: false })
        });
        
        test('renders without error', () => {
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1)
        });

        test('input box to show', () => {
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(true)
        });

        test('submit button to show', () => {
            const submitBtn = findByTestAttr(wrapper,'submit-button');
            expect(submitBtn.exists()).toBe(true)
        });
    })
})

describe('render first check on the input field', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({ secretWord: 'party' })
    });
    
    test('renders without error', () => {
        const component = findByTestAttr(wrapper,'component-input');
        expect(component.length).toBe(1)
    });
    
    test('does not throw warning when expected props', () => {
        checkProps(Input, { secretWord: 'party' })
    });
})

describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;

    // we save the use State in orignal value so we can use in all the tests the orignal use state 
    // unless we explicitly mock it
    beforeEach(() => { 
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setup({ success: false });
    })

    afterEach(() => {
        React.useState = originalUseState;
    })

    test('state update with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

    test('field is cleared upon submit', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');

        submitButton.simulate('click', { preventDefault() {} });

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
})

