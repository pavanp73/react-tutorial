import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {

  const [ userNameState, setUserNameState ] = useState(
    "steel.box"
  );

  const eventHandler = (event) => {
    setUserNameState(
        event.target.value
    )
  }


  return (
  
    <div className="App">
      <header className="App-header">
        <h1>React Basic Syntax Assignment-1</h1>
      </header>
      <body>
        <UserOutput userName={userNameState} />
        <UserOutput />
        <UserOutput />
        <UserInput userName={userNameState} changed={eventHandler} />
      </body>
    </div>
  );
}

export default App;
