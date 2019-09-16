import React from 'react';
import Timer from './Timer';
import './App.css';

const milliseconds = 50000;
function App() {
  return (
    <div className="App">
      <Timer ms={milliseconds} />
    </div>
  );
}








export default App;
