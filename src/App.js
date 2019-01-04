import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';
import logo from './logo.svg';

const App = () => {
 //creating state and It's setter.
 const [count, setCount] = useState(0);

 //creating Lifehook functionality with this
 //useEffect(()=>{something you want to do});

 return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <button
     style={{ fontSize: 40 }}
     onClick={() => {
      setCount(count + 1);
      console.log(count);
     }}>
     Add Count : {count}
    </button>
    <p>
     Edit <code>src/App.js</code> and save to reload.
    </p>
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
     Learn React
    </a>
   </header>
  </div>
 );
};

// this hot function provide us a hot reloading feature for fast development performance aur easy
// feel enviroment. for this kinda hot reloading you need eport each and every hooks component which
// you export or use in your project.

export default hot(App);
