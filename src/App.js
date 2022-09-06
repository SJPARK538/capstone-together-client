import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import JobBoard from './components/JobBoard/JobBoard';
import JobDetail from './components/JobDetail/JobDetail';
import JobPosting from './components/JobPosting/JobPosting';
import Register from './components/Register/Register';
import About from './pages/About/About'
import MyAccount from './pages/MyAccount/MyAccount';

class App extends React.Component {
  render(){
    const isLoggedIn = true;
    
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
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user/:id" component={MyAccount} />
      </Switch>
    </BrowserRouter>
    )
  }
}


export default App;
