import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemeHeader from './components/MemeHeader'
import MemeGenerator from './components/MemeGenerator'

function App() {
  return (
    <div>
        <MemeHeader /> 
        <MemeGenerator />
    </div>
  );
}

export default App;
