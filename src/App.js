import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widegts from './Widegts';

function App() {
  return (
    <div className="app">
      
      {/*header */}
      <Header />

      {/*app body */}
      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widegts />
      </div>
      {/*Sidebar */}


    </div>
  );
}

export default App;
