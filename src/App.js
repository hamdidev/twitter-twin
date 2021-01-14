import React from 'react'
import Sidebar from './components/Sidebar';
import './App.css';
import Feed from './components/Feed';
import Widgets from './components/Widgets';


function App() {
  return (
    <div className="app">
    <Sidebar />
    <Feed />
    <Widgets />
    </div>
  );
}

export default App;
