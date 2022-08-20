import React from 'react';
import { BrowserRouter, Routes, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import JobBoard from '../../components/JobBoard/JobBoard';


class Home extends React.Component {
  render(){
    return(
      <>
      <Header />
      <Switch>
          <Route path="/" component={Main} />
      </Switch>
      <Footer />
      </>
    )
  }
}

export default Home;
