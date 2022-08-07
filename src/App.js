import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';

class App extends React.Component {
  render(){
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/"></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  }
}

export default App;
