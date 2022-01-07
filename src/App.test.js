import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { getSecretWord as mockGetSecretWord } from './actions';
import { findByTestAttr } from '../test/testUtils';

// activate global mock to make sure getSecrteWord dosen't make netword call
jest.mock('./actions')

const setup = () => {
  // use mount instead of shallow because useEffect is not called on shallow
    return mount(<App />)
} 

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock calls from previous state
    mockGetSecretWord.mockClear();
  })

  test('getSecretWord on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() does not trigger useEffect
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });

})