import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = () => {
    return shallow(<App />)
} 

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent).toHaveLength(1);
});
