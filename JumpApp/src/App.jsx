import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome({name}){
  return(
    <h1>Welcome, {name}!</h1>
  );
}

function Count() {
  const [count, setCount] = useState(0); // define state here

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function App() {
  return(
    <div>
      <Welcome name="Aditya"/>
      <Welcome name="Bob"/>
      <Welcome name="Alice"/>
    </div>
  );
}

export default App
