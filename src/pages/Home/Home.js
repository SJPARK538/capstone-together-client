import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";
import "./Home.scss";
import video from "../../assets/videos/video.mp4"


class Home extends React.Component {
  render(){
    return(
    <>
    <Header />
      <section className='main'>
        <div className='main__banner'>
          <div className='main__banner-container'>
            <div className='main__banner-content'>
            <video className='main__banner-cotent--video' autoPlay loop muted>
              <source src = {video} type='video/mp4'/>
              </video>
              <h1 className='main__banner-content--title'>TOGETHER</h1>
              <p className='main__banner-content--description'>Meet your Neighbours, Together</p>
            
            </div>
          </div>
        </div>
        <div className='main__job'>
          <div className='main__job-container'>
            <div className='main__job-content'>
              <Link to="/job" className='main__job-content--link'><div>JOB BOARD</div></Link>
              <Link to="/jobs/add" className='main__job-content--link'><div>JOB POSTING</div></Link>
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
