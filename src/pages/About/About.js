import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./About.scss";



class Home extends React.Component {
  render(){
    return(
    <>
    <Header />
      <section className='about'>
        <div>THIS IS ABOUT PAGE</div>
      </section>
    <Footer />
    </>
    )
  }
}

export default Home;
