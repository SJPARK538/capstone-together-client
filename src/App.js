// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import JobBoard from './components/JobBoard/JobBoard';
import JobDetail from './components/JobDetail/JobDetail';
import JobPosting from './components/JobPosting/JobPosting';
import Register from './components/Register/Register';
import About from './pages/About/About'
import MyAccount from './pages/MyAccount/MyAccount';
import {BrowserRouter, Route, Navigate, Routes} from 'react-router-dom'


class App extends React.Component {
  render(){
    const isLoggedIn = true;
    
    return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>  
        <Route path="/" element={isLoggedIn ? <Home />:<Navigate to="/login" />} ></Route>
        <Route exact path="/job" element={<JobBoard />} /> 
        <Route exact path="/job/:id" element={<JobDetail />} />
        <Route exact path="/jobs/add" element={<JobPosting />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/user/:id" element={<MyAccount />} />
      </Routes>
    </BrowserRouter>
    )
  }
}


export default App;


{/* <Route exact path="/" element={isLoggedIn ? <Home /> : <Navigate to ="/login"></Navigate>}> */}