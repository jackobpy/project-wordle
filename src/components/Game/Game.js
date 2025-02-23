import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Result from '../Result';
import {range} from '../../utils.js';
import Guess from '../Guess';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return <>
    <div className="guess-results">{range(NUM_OF_GUESSES_ALLOWED).map((i) => <Guess key={i} word={guesses[i]} answer={answer}/>)}</div>
    <GuessInput guesses={guesses} setGuesses={setGuesses} isDisabled={guesses.includes(answer) || guesses.length === NUM_OF_GUESSES_ALLOWED}/>
    {guesses.includes(answer) ? 
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div> : (guesses.length === NUM_OF_GUESSES_ALLOWED ? 
        <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div> : undefined
      )}
  </>;
}

export default Game;
