import React from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./MyAccount.scss";



class MyAccount extends React.Component {
    state = {
        currentAccount: {},
    };

    componentDidMount() {
        axios
        .get(`http://localhost:8080/user/${this.props.match.params.id}`)
        .then (res=> {
          console.log(res.data.data)
          const currentAccount = res.data;
          console.log(res.data)
            this.setState({currentAccount})
        })
    }


  render(){
    return(
    <>
    <Header />
      <section className='myaccount'>
        <div>THIS IS My Account Page</div>
        <div>{this.state.currentAccount.name}</div>
      </section>
    <Footer />
    </>
    )
  }
}

export default MyAccount;
