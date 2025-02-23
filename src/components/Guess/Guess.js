import React from 'react';
import {checkGuess} from '../../game-helpers.js';
import {range} from '../../utils.js';

function Guess({word, answer}) {
  const result = checkGuess(word, answer);
  return <p className="guess">
    {range(5).map((i) => <span key={i} className={`cell ${result && result[i].status}`}>{word && word[i]}</span>)}
</p>;
}

export default Guess;
