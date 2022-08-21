import React from 'react';
import axios from 'axios';
import './JobPosting.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class JobPosting extends React.Component{
    state = {
        title: '',
        category: '',
        region: '',
        payType: '',
        payRate: '',
        postDate: '',
        dueData: '',
        description: '',
        messageError: '',
        emailError: '',
        phoneError: '',
      };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http:://localhost:8080/job', {
            title,
            category,
            region,
            payType,
            payRate,
            description,
            postDate,
            dueDate,
        })
    }



    render(){
        const payTypes = ['Flat', 'Hourly']

        return(
            <>
            <Header />
                <div className='post'>
                    <h1 className='post__title'>JOB POSTING</h1>
                    <form className='post__form'>
                        <div className='post__form-container'>
                            <label className='post__form-label'>POSTING DATE</label>
                            <input className='post__form-input' placeholder='MM, DD, 2022 !Do not forget comma' name='post date'></input>
                            
                            <label className='post__form-label'>TITLE</label>
                            <input className='post__form-input' placeholder='Short description of a job' name='title'></input>

                            <label className='post__form-label'>PAY TYPE</label>
                            <input className='post__form-input' options={payTypes} name='pay type'></input>

                            <label className='post__form-label'>PAY RATE</label>
                            <input className='post__form-input' placeholder='Short description of a job' name='pay rate'></input>
                        </div>
                    </form>
                </div>
            <Footer />
            </>
        )
    }
}

export default JobPosting;