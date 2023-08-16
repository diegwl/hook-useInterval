import React, { useState } from 'react';
import './App.css'
import { useInterval } from './utils/useInterval';


function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  const [isRunning, setIsRunning] = useState(true);
  
  useInterval(() => setCounter((c) => c + 1), isRunning ? delay : null);

  return (
    <div>
      <div>
        <h1>Contador: {counter}</h1>
        <h1>Delay: {delay}</h1>
        <h1>Status: {isRunning ? "Contando" : "Pausado"}</h1>
      </div>
      <div className='container'>
        <button onClick={() => {setDelay((d => d + incrementor))}}>+{incrementor}</button>
        <button onClick={() => {setDelay((d => d - incrementor))}}>-{incrementor}</button>
        <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))}/>
      </div>
      <div className='container'>
        <button onClick={() => (setIsRunning(r => r = false))}>Pause</button>
        <button onClick={() => (setIsRunning(r => r = true))}>Run</button>
        <button onClick={() => (setCounter(c => c = 0))}>Zerar</button>
      </div>
    </div>
  )
}

export default App
