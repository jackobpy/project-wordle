import React from 'react';

function GuessInput({guesses, setGuesses, isDisabled}) {
  const [guess, setGuess] = React.useState('');
  return <form className="guess-input-wrapper" onSubmit={(event) => {
    event.preventDefault();
    nextGuesses = [...guesses, guess];
    console.log({nextGuesses});
    setGuesses(nextGuesses);
    setGuess('');}}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input required 
  disabled={isDisabled}
  id="guess-input" 
  type="text" 
  value={guess} 
  onChange={(event) => setGuess(event.target.value.toUpperCase())} 
  minLength={5} 
  maxLength={5} 
  pattern="[a-zA-Z]{5}"
  title="5 letter word"/>
</form>;
}

export default GuessInput;
