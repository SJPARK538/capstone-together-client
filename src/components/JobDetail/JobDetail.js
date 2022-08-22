import React from 'react';
import axios from 'axios';
import './JobDetail.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class JobDetail extends React.Component{
    state = {
        currentJobDetail: {},
    };

    componentDidMount() {
        axios
        .get(`http://localhost:8080/job/${this.props.match.params.id}`)
        .then (res=> {
            const currentJobDetail = res.data;
            this.setState({currentJobDetail})
            // console.log(currentJobDetail)
        })
    }
    render(){
        return(
            <>
            <Header />
            <div className='jobdetail'>
                <div className='jobdetail__container'>
                    <h1 className='jobdetail__title'>JOB INFORMATION</h1>
                    <section className='job__content'>
                        <h2 className='job__content-title'>{this.state.currentJobDetail.title}</h2>
                        <div className='job__content-information'>
                            <div className='job__sub-part1'>
                                <div className='job__sub-part1-section--1'>
                                    <div className='job__info-lists'>
                                        <h3 className='job__info-lists--label'>CATEGORY:</h3>
                                        <p className='job__info-lists--content'>{this.state.currentJobDetail.category}</p>
                                    </div>
                                    <div className='job__info-lists'>
                                        <h3 className='job__info-lists--label'>PAY TYPE:</h3>
                                        <p className='job__info-lists--content'>{this.state.currentJobDetail.payType}</p>
                                    </div>
                                    <div className='job__info-lists'>
                                        <h3 className='job__info-lists--label'>PAY RATE:</h3>
                                        <p className='job__info-lists--content'>${this.state.currentJobDetail.payRate}</p>
                                    </div>
                                </div>
                                <div className='job__sub-part1-section--2'>
                                    <div className='job_info-lists'>
                                        <h3 className='job__info-lists--label'>REGION:</h3>
                                        <p className='job__info-lists--content'>{this.state.currentJobDetail.region}</p>
                                    </div>
                                    <div className='job__info-lists'>
                                        <h3 className='job__info-lists--label'>POST DATE:</h3>
                                        <p className='job__info-lists--content'>{new Date(this.state.currentJobDetail.postDate).toLocaleDateString()}</p>
                                    </div>
                                    <div className='job__info-lists'>
                                        <h3 className='job__info-lists--label'>DUE DATE:</h3>
                                        <p className='job__info-lists--content'>{new Date(this.state.currentJobDetail.dueDate).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='job__sub-part2'>
                                <h2 className='job__sub-part2--label'>Job Description</h2>
                                <p className='job__sub-part2--content'>{this.state.currentJobDetail.description}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
            </>
        )
    }
}

export default JobDetail;