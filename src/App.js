import { BrowserRouter, Routes, Route, Switch, Redirect,Router } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import JobBoard from './components/JobBoard/JobBoard';
import JobDetail from './components/JobDetail/JobDetail';
import JobPosting from './components/JobPosting/JobPosting';




class App extends React.Component {
  render(){
    const isLoggedIn = true
    return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>  
        <Route exact path="/" >
            {isLoggedIn ? <Home />: <Redirect to="/login" /> }
        </Route>
        <Route exact path="/job" component={JobBoard} /> 
        <Route exact path="/job/:id" component={JobDetail} />
        <Route exact path="/jobs/add" component={JobPosting} />
        

      </Switch>
    </BrowserRouter>

    )
  }
}


export default App;
