import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import JobBoard from './components/JobBoard/JobBoard';
import JobDetail from './components/JobDetail/JobDetail';
import JobPosting from './components/JobPosting/JobPosting';
import Register from './components/Register/Register';

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
      </Switch>
    </BrowserRouter>
    )
  }
}


export default App;
