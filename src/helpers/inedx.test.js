import React from 'react';
import { shallow } from 'enzyme';

import { getLeterMatchCount } from './index';

describe('getLetterMatchCount', () => {
    const secretWord = 'party'

    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLeterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0)
    });

    test('returns correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLeterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3)
    });

    test('returns correct count when there are doublicate letters in the guess', () => {
        const letterMatchCount = getLeterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3)
    });
})