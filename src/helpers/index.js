
export function getLeterMatchCount(guessedWord, secretWord) {
    const secrteLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessedWord)
    return secrteLetters.filter(letter => guessedLetterSet.has(letter)).length
}