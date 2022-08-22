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
        
        // newJob:[]

    };

    // componentDidMount(){
    //     axios.get('http://localhost8080/job/add')
    //     .then(res =>{
    //         this.setState({
    //             newJob:res.data
    //         })
    //     })
    //     // this.newJob();
    // }

    handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        if (
            !e.target.title.value ||
            !e.target.category.value ||
            !e.target.region.value ||
            !e.target.payType.value ||
            !e.target.payRate.value ||
            !e.target.description.value ||
            !e.target.postDate.value ||
            !e.target.postDate.value ||
            !e.target.dueDate.value 
            ) {
            return console.error("Please fill out all form fields");
        } else {
        axios.post('http:://localhost:8080/job', {
            title: e.target.title.value,
            category: e.target.category.value,
            region: e.target.region.value,
            payType: e.target.payType.value,
            payRate: e.target.payRate.value,
            description: e.target.description.value,
            postDate: e.target.postDate.value,
            dueDate: e.target.dueDate.value
        })
        .then(res=>{
            // this.props.history.push(`/job/${res.data}`)
            console.log(res);
        })
    }
    }


    render(){
        const payTypes = ['Flat', 'Hourly']

        return(
            <>
            <Header />
                <div className='post'>
                    <h1 className='post__title'>JOB POSTING</h1>
                    <form className='post__form' onSubmit={this.handleSubmit}>
                        <div className='post__form-container'>
                            <label className='post__form-label'>POSTING DATE</label>
                            <input type ="date" className='post__form-input' />
                            
                            <label className='post__form-label'>TITLE</label>
                            <input className='post__form-input' placeholder='Short description of a job' name='title'></input>
                        
                            <label className='post__form-label'>CATEGORY</label>
                            <select name="category" className='post__form-input'>
                                <option value="clening">Cleaning</option>
                                <option value="delivery">Delivery</option>
                                <option value="assembling">Assembling</option>
                                <option value="tutoring">Tutoring</option>
                                <option value="helping">Helping</option>
                                <option value="caring">Caring</option>
                                <option value="shopping">Shopping</option>
                                <option value="etc">Etc</option>
                            </select>

                            <label className='post__form-label'>REGION</label>
                            <select name="region" className='post__form-input'>
                                <option value="northyork">North York</option>
                                <option value="markham">Markham</option>
                                <option value="vaughan">Vaughan</option>
                                <option value="downtown">Downtown Toronto</option>
                                <option value="midtown">Midtown Toronto</option>
                                <option value="etobicoke">Etobicoke</option>
                                <option value="richmondhill">Richmond Hill</option>
                            </select>
                            

                            <label className='post__form-label'>PAY TYPE</label>
                            <select className='post__form-input' options={payTypes} name='pay type'></select>
                            <select name="payType" className='post__form-input'>
                                <option value="flat">Flat</option>
                                <option value="Hourly">Hourly</option>
                            </select>

                            <label className='post__form-label'>PAY RATE</label>
                            <input className='post__form-input'  name='payrate'></input>

                            <label className='post__form-label'>JOB DESCRIPTION</label>
                            <input className='post__form-input' placeholder='Detail Job Description + contact information' name='pay rate'></input>

                            <button type='submit'>button</button>
                        </div>
                    </form>
                </div>
            <Footer />
            </>
        )
    }



    // render(){
    //     return(
    //         <div>job posting page</div>
    //     )
    // }
}

export default JobPosting;