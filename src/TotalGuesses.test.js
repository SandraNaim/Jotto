import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import TotalGuesses from "./TotalGuesses";

const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
const defaultProps = { guessedWords };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-total-guesses");
  expect(component.length).toBe(1);
});

test('renders the number of guesses', () => {
    const wrapper = setup(guessedWords);
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.text()).toContain(guessedWords.length.toString());
  });
