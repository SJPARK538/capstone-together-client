import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, Navigate} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import bg from "../../assets/images/login-photo.svg"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ user, setUser]= useState();
    const iconEmail = <FontAwesomeIcon icon={faEnvelope} />
    const iconLock = <FontAwesomeIcon icon={faLock} />
    
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = e.target

        console.log(e.target.email.value)
        try{
            if (email && password){
            await axios
            .post('http://localhost:8080/user/login', {email: email.value, password: password.value})
            .then((res)=>{
                if (res.status === 200) {
                    console.log('err');
                }
                    localStorage.setItem(JSON.stringify(res.data.user.user))
            })
            .catch((error)=> {
                if ( error.response.status === 404){
                    console.log('err')
                }
            });
        }  
    } catch (error){
        console.log(error);
    }
        navigate('/')
    }

    return (
        <div className="login">
            <div className="login__photo">
                <img alt='people gathering' className="login__photo-together" src={bg}></img>
            </div>

            <div className="login__container" >
                <form className="login-form" onSubmit={handleSubmit}>
                    <img alt="Together logo" src={logo} className="login-form__img"></img>
                    <h2 className="login-form__title">JOIN US</h2>
                    <div className="login__box">
                        <div className="login__box-one">
                            <div className="input-content">
                                <div className="input-content__box">
                                    <i className="icon">{iconEmail}</i>
                                    <h5 className="input-content--label">EMAIL</h5>
                                </div>
                                <input type="email" name="email" className="input-content--value" placeholder="Email address" onChange={(e) => { setEmail(e.target.value) }}></input>
                            </div>
                        </div>
                        <div className="login__box-two">
                            <div className="input-content">
                                <div className="input-content__box">
                                    <i className="icon">{iconLock}</i>
                                    <h5 className="input-content--label">PASSWORD</h5>
                                </div>
                                <input type="password" name ="password" className="input-content--value" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>
                    <Link to="/register" href="#" className="input-content--link">REGISTER</Link>
                    <button type='submit' className="btn">LOGIN</button>
                </form>
            </div>
        </div>
    )
}




