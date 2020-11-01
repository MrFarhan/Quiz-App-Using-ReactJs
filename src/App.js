import React, { useState, useEffect } from 'react';
import './App.css';
import { QuestionCard } from './Compnents/QuestionCard';


const App = () => {
  const [uName, setUname] = useState()
  const [questionState, setQuestionState] = useState(true)

  let userName;
  useEffect(() => {
    userName = prompt("Please tell your name")
    setUname(userName)

  }, [])

  return (
    <div className="App">
      <div className="main">
        <h1>Quiz App </h1>
        <h2>Welcome {uName}</h2>
        {questionState === true ? <button onClick={()=>setQuestionState(false)}>Start Quiz</button>
          :<QuestionCard userName={uName}/>
        }</div>
    </div>
  );
}

export default App;
