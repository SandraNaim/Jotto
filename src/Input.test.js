import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { checkProps, findByTestAttr } from '../test/testUtils';

const defaultProps = {
    secretWord: 'party'
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Input {...setupProps} />)
} 

describe('render input field', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({ secretWord: 'party' })
    });
    
    test('renders without error', () => {
        const component = findByTestAttr(wrapper,'component-input');
        expect(component.length).toBe(1)
    });
    
    test('does not throw warning when expected props', () => {
        checkProps(Input, defaultProps)
    });
})

