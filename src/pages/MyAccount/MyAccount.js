import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./MyAccount.scss";



class MyAccount extends React.Component {
  render(){
    return(
    <>
    <Header />
      <section className='myaccount'>
        <div>THIS IS My Account Page</div>
      </section>
    <Footer />
    </>
    )
  }
}

export default MyAccount;
