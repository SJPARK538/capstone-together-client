import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import bg from "../../assets/images/login-photo.svg"
import error from '../../assets/icons/error-24px.svg';


class Login extends React.Component {
    state = {
        selectedOption: ''
    };

    validationEmptyFields = () => {
        let messageError = '';

    if (
        this.state.email === '',
        this.state.password === '' 
    )

    messageError = (
        <div className="post__form-input-error">
            <img src={error} alt="error" />
            <p className="post__form-input-error--message">
            Please fill in all fields
            </p>
        </div>
        );

        this.setState({ messageError });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(e)

        axios.post('http://localhost:8080/user/login', {
            email: e.target.email.value,
            password: e.target.password.value
     
        })
        .then(res=>{
            this.props.history.push('/');
        })
        .catch((err) => {
            console.log(err);
        })
       
    };

    render(){   
        const iconEmail = <FontAwesomeIcon icon={faEnvelope} />
        const iconLock = <FontAwesomeIcon icon={faLock} />

  
        return(
            <div className="login">
            <div className="login__photo">
                <img alt='people gathering'className="login__photo-together" src={bg}></img>
            </div>

            <div className="login__container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <img alt ="Together logo"src ={logo} className="login-form__img"></img>
                    <h2 className="login-form__title">JOIN US</h2>
                    <div className="login__box">
                    <div className="login__box-one">
                        <div className="input-content">
                            <div className="input-content__box">
                                <i className="icon">{iconEmail}</i>
                                <h5 className="input-content--label">EMAIL</h5>
                            </div>
                            <input type ="email" className="input-content--value" placeholder="Email address" name='email'></input>
                        </div>
                        <div>{this.state.messageError}</div>
                    </div>
                    <div className="login__box-two">
                        <div className="input-content">
                            <div className="input-content__box">
                                <i className="icon">{iconLock}</i>
                                <h5 className="input-content--label">PASSWORD</h5>
                            </div>
                            <input type="password" className="input-content--value" placeholder="Password" name='password'></input>
                        </div>
                        <div>{this.state.messageError}</div>
                    </div>
                    </div>
                    <Link to ="/register" href="#" className="input-content--link">REGISTER</Link>
                    <button className="btn" type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    )
    }
}
export default Login;

