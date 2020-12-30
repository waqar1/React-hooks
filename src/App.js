import React, { useState } from 'react';
import { useForm } from './customhooks/useForm';
import { useFetch } from './customhooks/useFetch';
import './App.css';
import { Hello } from './Hello';

const App = () => {
  // can be divided into two separate useState if don't want to use an object
  const [{ countOne, countTwo }, setCount] = useState({ countOne: 0, countTwo: 10 });
  const [showHello, setShowHello] = useState(true);

  // Custom Hook
  const [values, handleChange] = useForm({ email: '', password: ''});

  // Custom Hook
  // Passed counter value to get dynamic facts :)
  const { data, loading } = useFetch(`http://numbersapi.com/${countOne}/math`);

  return (
    <div className="App">
      <div>
        <div className="section-header">useState hook example</div>
        <div>
          <div>Count 1: {countOne}</div>
          <div>Count 2: {countTwo}</div>
          <button
            onClick={() =>
              setCount(currentState => ({
                ...currentState,
                countOne: currentState.countOne + 1
              }))
            }
          >
            Increment Count 1
          </button>
          <div>
            Form example
            <div>
              <input name="email" value={values.email} onChange={handleChange}/><br/>
              <input type="password" name="password" value={values.password} onChange={handleChange}/>
              <div>Email: {values.email}</div>
              <div>Password: *intentionally visible :) {values.password}</div>
            </div>
          </div>
        </div>
        <div className="section-header">useEffect hook example</div>
        <button onClick={() => setShowHello(!showHello)}>Show Hello</button>
        {showHello && <Hello/>}
        <div>Fetch Custom Hook Data</div>
        {loading ? 'loading...' : data}
      </div>
    </div>
  );
}

export default App;
