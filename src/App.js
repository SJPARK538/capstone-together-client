import { BrowserRouter, Routes, Route, Switch, Redirect,Router } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import JobBoard from './components/JobBoard/JobBoard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';



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
        <Route path="/job" component={JobBoard} /> 

      </Switch>
    </BrowserRouter>



    // <Router>
    //   <Route path="/login" component={Login}></Route>  
    //   <Route exact path="/">
    //       {isLoggedIn ? <Home />: <Redirect to="/login" /> }
    //   </Route>
    //   {/* <Route path="/job" component={JobBoard} /> */}
    // </Router>



    )
  }
}


export default App;
