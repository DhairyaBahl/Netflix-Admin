import React from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Header/>
        <div className="main">
          <Sidebar/>
          <Home/>
        </div>
      </div>
    )
  }
}

export default App;
