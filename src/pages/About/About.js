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
                <div className='about-section-1--description'>Our mission at this website "TOGETHER" is to deliver a memorable and convinent experience while people are finding their part-time jobs and also finding a person who can help them.
                </div>
            </div>
            <div className='about-section-2'>
                <div className='about-section-2__imagebox'>
                <img src={people}  alt='people' className='about-section-2__imagebox--image'></img>
                </div>
                <div className='about-section-2__content'>
                    <div className='about-section-2__content--title'>FIND A PERSON</div>
                    <div className='about-section-2__content--description'>You can easily find a person who can help your task on this website. Simply post a job with a breif description of a job and your contact information</div>
                </div>
            </div>
            <div className='about-section-3'>
                <div className='about-section-3--title'>EARN MONEY</div>
                <div className='about-section-3--description'>You can find a part-time whenver you have a free time around your area !
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
