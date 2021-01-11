import React, { useState } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';

function App() {

  const [ userNameState, setUserNameState ] = useState(
    "steel.box"
  );

  const [ inputTextState, setInputTextState ] = useState(
    {
      text: "",
      length: 0
    }
  );

  const eventHandler = (event) => {
    setUserNameState(
        event.target.value
    )
  }

  const findLengthEventHandler = (event) => {
    const text = event.target.value;
    const length = text.length;
    setInputTextState({
      text: text,
      length: length
    })
  }

  const onDeletingCharacter = (charIndex) => {

    const textArray = [...inputTextState.text];
    textArray.splice(charIndex, 1);
    setInputTextState({
      text: textArray.join(''),
      length: textArray.length    
    })
  }

  let characters = inputTextState.text.split('').map(
    (ch, index) => {
        return <CharComponent ch={ch} key={index} click={() => onDeletingCharacter(index)}/>
    }
)


  return (
  
    <div className="App">
      <header className="App-header">
        <h1>React Basic Syntax Assignment-1</h1>
      </header>
      <div>
        <UserInput userName={userNameState} changed={eventHandler} />
        <UserOutput userName={userNameState} />
        <UserOutput userName={userNameState} />
        <UserOutput userName={userNameState} />
      </div>
      <div>
        <input type="text" value={inputTextState.text} onChange={findLengthEventHandler} />
        <p>Input text length: {inputTextState.length}</p>
        <ValidationComponent length={inputTextState.length}/>
        {characters}
        </div>
    </div>
  );
}

export default App;
