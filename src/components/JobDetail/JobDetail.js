import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobDetail.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useParams } from 'react-router-dom';

export default function JobDetail({ match }) {
    const {id} = useParams();
    const [currentJobDetail, setCurrentJobDetail] = useState({});
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/job/${id}`)
        .then((res) => {
          const currentJobDetail = res.data;
          setCurrentJobDetail(currentJobDetail);
        });
    }, [id]);
  
    return (
      <>
        <Header />
        <div className="jobdetail">
          <div className="jobdetail__container">
            <h1 className="jobdetail__title">JOB INFORMATION</h1>
            <section className="job__content">
              <h2 className="job__content-title">{currentJobDetail.title}</h2>
              <div className="job__content-information">
                <div className="job__sub-part1">
                  <div className="job__sub-part1-section">
                    <div className="job__info-lists">
                      <h3 className="job__info-lists--label">CATEGORY:</h3>
                      <p className="job__info-lists--content">
                        {currentJobDetail.category}
                      </p>
                    </div>
                    <div className="job__info-lists">
                      <h3 className="job__info-lists--label">PAY TYPE:</h3>
                      <p className="job__info-lists--content">
                        {currentJobDetail.payType}
                      </p>
                    </div>
                    <div className="job__info-lists">
                      <h3 className="job__info-lists--label">PAY RATE:</h3>
                      <p className="job__info-lists--content">
                        ${currentJobDetail.payRate}
                      </p>
                    </div>
                  </div>
                  <div className="job__sub-part1-section">
                    <div className="job__info-lists">
                      <h3 className="job__info-lists--label">REGION:</h3>
                      <p className="job__info-lists--content">
                        {currentJobDetail.region}
                      </p>
                    </div>
                    <div className="job__info-lists">
                      <h3 className="job__info-lists--label">POST DATE:</h3>
                      <p className="job__info-lists--content">
                        {new Date(currentJobDetail.postDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="job__info-lists">
                      <h3 className="job__info-lists--label">DUE DATE:</h3>
                      <p className='job__info-lists--content'>{new Date(currentJobDetail.dueDate).toLocaleDateString()}</p>
                      </div>
                                </div>
                            </div>
                            <div className='job__sub-part2'>
                                <h3 className='job__sub-part2--label'>Job Description</h3>
                                <p className='job__sub-part2--content'>{currentJobDetail.description}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
            </>
        )
    }



