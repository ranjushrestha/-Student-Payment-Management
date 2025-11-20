import { useState } from 'react';
import './App.css';
import ButtonDemo from './pages/ButtonPage'; // Import your button demo page

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Button Component Demo</h1>
      <ButtonDemo />
    </div>
  );
}

export default App;
