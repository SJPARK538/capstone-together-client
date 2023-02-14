import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './JobBoard.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import sortIcon from "../../assets/icons/sort-24px.svg"
import { v4 as uuidv4 } from 'uuid';

function JobBoard() {
    const [currentJobboard, setCurrentJobboard] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/job`)
        .then((res) => {
            setCurrentJobboard(res.data);
        });
    }, []);

    return (
        <>
            <Header />
            <div className='job'>
                <h1 className='job__main'>JOB BOARD</h1>
                <section className="job__horizontal">
                    <div className="job__horizontal-label">
                        <h5 className="job__horizontal-label--title">POST DATE</h5>
                        <img className="job__sort" src={sortIcon} alt="sort-icon" />
                    </div>
                    <div className="job__horizontal-label">
                        <h5 className="job__horizontal-label--title">TITLE</h5>
                        <img className="job__sort" src={sortIcon} alt="sort-icon" />
                    </div>
                    <div className="job__horizontal-label">
                        <h5 className="job__horizontal-label--title">CATEGORY</h5>
                        <img className="job__sort" src={sortIcon} alt="sort-icon" />
                    </div>
                    <div className="job__horizontal-label">
                        <h5 className="job__horizontal-label--title">PAY TYPE</h5>
                        <img className="job__sort" src={sortIcon} alt="sort-icon" />
                    </div>
                </section>

                {currentJobboard.map((joblist) => (
                    <Link to={`/job/${joblist.id}`} key={uuidv4()}>
                        <div className="job__items">
                            <div className="job__items-detail">
                                <div className="job__items-detail--list">
                                    <h5 className="job__items-title">POST DATE</h5>
                                    <p className='job__items-postdate'>{new Date(joblist.postDate).toLocaleDateString()}</p>
                                </div>
                                <div className="job__items-detail--list">
                                    <h5 className="job__items-title">TITLE</h5>
                                    <p className='job__items-jobtitle'>{joblist.title}</p>
                                </div>
                                <div className="job__items-detail--list">
                                    <h5 className="job__items-title">CATEGORY</h5>
                                    <p className='job__items-category'>{joblist.category}</p>
                                </div>
                                <div className="job__items-detail--list">
                                    <h5 className="job__items-title">PAY TYPE</h5>
                                    <p className='job__items-postdate'>{joblist.payType}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default JobBoard;