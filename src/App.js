import { BrowserRouter, Routes, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';

// class App extends React.Component {
//   render(){
//     return(
//     <BrowserRouter>
//       <Switch>
//         <Route path="/login" exact></Route>     
//         <Route path="/">
//           <Header />
//         </Route>
//       </Switch>

//       <Switch>
//         <Route path="/login" component={Login}></Route>  
//         <Route path="/" component={Home}></Route>
//       </Switch>
//       <Footer />
//     </BrowserRouter>
//     )
//   }
// }

class App extends React.Component {
  render(){
    const isLoggedIn = true
    return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>  
        <Route exact path="/">
          {isLoggedIn ? <Home />: <Redirect to="/login" /> }
        </Route>
      </Switch>
    </BrowserRouter>
    )
  }
}


export default App;
