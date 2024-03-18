import React from 'react';
import Clock from './components/Clock';
import Weather from './components/Weather';
import Quote from './components/Quote';
import './App.css'; // Use this to style your components

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Weather />
        <Quote />
      </header>
    </div>
  );
}

export default App;
