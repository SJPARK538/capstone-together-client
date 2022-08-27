import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import bg from "../../assets/images/login-photo.svg"


class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/login', {
            // email: email,
            // password: password
        })
        .then(res=>{
            console.log(res);
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
                            <input type ="email" className="input-content--value" placeholder="Email address"></input>
                        </div>
                    </div>
                    <div className="login__box-two">
                        <div className="input-content">
                            <div className="input-content__box">
                                <i className="icon">{iconLock}</i>
                                <h5 className="input-content--label">PASSWORD</h5>
                            </div>
                            <input type="password" className="input-content--value" placeholder="Password"></input>
                        </div>
                    </div>
                    </div>
                    <Link to ="/" href="#" className="input-content--link">REGISTER</Link>
                    <button className="btn" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
    }
}
export default Login;

