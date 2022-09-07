import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./About.scss";
import people from '../../assets/images/people.svg'



class Home extends React.Component {
  render(){
    return(
    <>
    <Header />
      <section className='about'>
        <div className='about-title'>ABOUT US</div>
        <div className='about-container'>
            <div className='about-section-bg'></div>
            <div className='about-section-1'>
                <div className='about-section-1--title'>OUR MISSTION</div>
                <div className='about-section-1--description'>lorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsum
                </div>
            </div>
            <div className='about-section-2'>
                <div className='about-section-2__imagebox'>
                <img src={people}  alt='people' className='about-section-2__imagebox--image'></img>
                </div>
                <div className='about-section-2__content'>
                    <div className='about-section-2__content--title'>TOGETHER</div>
                    <div className='about-section-2__content--description'>orem-ipsumloremorem-ipsumloremorem-ipsumloremorem-ipsumloremorem-ipsumloremorem-ipsumloremorem-ipsumloremorem-ipsumloremorem-ipsumloremorem-ipsumloremorem-ipsumlorem</div>
                </div>
            </div>
            <div className='about-section-3'>
                <div className='about-section-3--title'>PROCESS</div>
                <div className='about-section-3--description'>lorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsumlorem-ipsum
                </div>
            </div>
        </div>
      </section>
    <Footer />
    </>
    )
  }
}

export default Home;
