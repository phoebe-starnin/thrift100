import React from 'react';
import backgroundImage from './THRFT.jpg';
import './App.css';
// test

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // Make sure the image covers the full viewport height
    margin: 0,       // Remove default margin
    overflow: 'hidden', // Hide overflow to prevent scrolling
  };
  

  return (
    <div style={backgroundStyle}>
      {/* Your content goes here */}
      <header className="App-header">
        <p>
          Leila <code></code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className = 'signIn' onClick = {() => alert('Button clicked!')}> 
        Sign In
        </button>
      </header>
    </div>
  );
}

export default App;

