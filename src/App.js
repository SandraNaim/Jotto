import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSecretWord, resetGame } from './actions';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import ResetButton from './ResetButton';
import SecretWordReveal from './SecretWordReveal';
import TotalGuesses from './TotalGuesses';

function App() {
  const success = useSelector(state => state.success);
  const guessedWords = useSelector(state => state.guessedWords);
  const secretWord = useSelector(state => state.secretWord);
  const gaveUp = useSelector((state) => state.gaveUp);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSecretWord());
  }, [])

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <SecretWordReveal display={gaveUp} secretWord={secretWord} />
      <ResetButton
        display={success || gaveUp}
        resetAction={() => dispatch(resetGame())}
      />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
      <TotalGuesses guessedWords={guessedWords} />
    </div>
  );
}

export default App;
