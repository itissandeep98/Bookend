import React from 'react';
import './App.css';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="container">
        <Main />
      </div>
    </BrowserRouter>

  );
}

export default App;
