import React from 'react';
import axios from 'axios';
import './JobPosting.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import error from '../../assets/icons/error-24px.svg';
import { Link, useNavigate} from "react-router-dom";


class JobPosting extends React.Component{
    state = {
        selectedOption: ''
    };

    RegionList = ['North York', 'Markham', 'Etobicoke', 'Downtown Toronto', 'Midtown Toronto', 'Richmondhill', 'Vaughan']
    PayTypes = ['Flat', 'Hourly']
    CategoryList = ['Cleaning', 'Delivery', 'Assembling', 'Tutoring', 'Helping', 'Caring', 'Shopping', 'Etc']
    
    validationEmptyFields = () => {
        let messageError = '';
    
        if (
            this.state.title === '' ||
            this.state.category === '' ||
            this.state.region === '' ||
            this.state.payType === '' ||
            this.state.payRate === '' ||
            this.state.postDate === '' ||
            this.state.dueDate === '' ||
            this.state.description === '' 
            
        ) {
            messageError = (
            <div className="post__form-input-error">
                <img src={error} alt="error" />
                <p className="post__form-input-error--message">
                Please fill in all fields
                </p>
            </div>
            );
        }
    
        this.setState({ messageError });
        };

    handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/job', {
            title: e.target.title.value,
            category: e.target.category.value,
            region: e.target.region.value,  
            payType: e.target.payType.value,
            payRate: e.target.payRate.value,
            description: e.target.jobdescription.value,
            postDate: e.target.postDate.value,
            dueDate: e.target.postDate.value
        })
        .then(res=>{
            console.log(res);
            this.props.history.push('/job')
        })
        .catch((err) => {
            console.log(err);
        })
    };

    render(){

        return(
            <>
            <Header />
                <div className='post'>
                    <h1 className='post__title'>JOB POSTING</h1>
                    <form className='post__form' onSubmit={this.handleSubmit}>
                        <div className='post__form-container'>
                            <label className='post__form-label'>POSTING DATE</label>
                            <input type ="date" className='post__form-input' name="postDate" />
                            <div>{this.state.messageError}</div>
                            
                            <label className='post__form-label'>DUE DATE</label>
                            <input type ="date" className='post__form-input' name="dueDate"/>
                            <div>{this.state.messageError}</div>

                            <label className='post__form-label'>TITLE</label>
                            <input className='post__form-input' placeholder='Short description of a job' name='title'></input>
                            <div>{this.state.messageError}</div>

                            <label className='post__form-label'>CATEGORY</label>
                            <select name="category" className='post__form-input'>
                            {this.CategoryList.map((category, i) =>(
                                <option key={i} value ={category}>
                                    {category}
                                </option>
                            ))}
                            </select>
                            <div>{this.state.messageError}</div>

                            <label className='post__form-label'>REGION</label>
                            <select name="region" className='post__form-input'>
                            {this.RegionList.map((region, i) =>(
                                <option key={i} value ={region}>
                                    {region}
                                </option>
                            ))}
                            </select>
                            <div>{this.state.messageError}</div>
                            

                            <label className='post__form-label'>PAY TYPE</label>
                            <select name="payType" className='post__form-input'>
                                {this.PayTypes.map((paytype, i) =>(
                                    <option key={i} value ={paytype}>
                                        {paytype}
                                    </option>
                                ))}
                            </select>
                            <div>{this.state.messageError}</div>
        
                            <label className='post__form-label'>PAY RATE</label>
                            <input className='post__form-input'  name='payRate' placeholder='$input amount'></input>
                            <div>{this.state.messageError}</div>

                            <label className='post__form-label'>JOB DESCRIPTION</label>
                            <textarea className='post__form-input post__form-input--textarea' type='text'cols="28" rows="6" placeholder='Detail Job Description + contact information' name='jobdescription'></textarea>
                            <div>{this.state.messageError}</div>

                            <button type='submit' className='post__form-button'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            <Footer />
            </>
        )
    }
}

export default JobPosting;