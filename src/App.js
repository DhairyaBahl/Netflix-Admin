import React from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import UserList from './Components/UserList/UserList'
import User from './Components/User/User'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import NewUser from './Components/NewUser/NewUser';
import MovieList from './Components/MovieList/MovieList';
import NewMovie from './Components/NewMovie/NewMovie';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Header/>
        <div className="main">
          <Sidebar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/users">
              <UserList/>
            </Route>
            <Route path="/user/:userId">
              <User/>
            </Route>
            <Route path = "/newUser">
              <NewUser/>
            </Route>
            <Route path = "/movies">
              <MovieList/>
            </Route>
            <Route path="/newMovie">
              <NewMovie/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
