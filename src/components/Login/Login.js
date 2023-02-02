import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
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
    const [loginState, setLoginState] = useState(false)
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

        console.log(email.value)
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



    // Try 3 (WORK) 이거랑 다른점이 뭘까? axios?
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//     const user = { email: email, password: password };
//         if (!email || !password) return;
//         console.log('works!')
//         navigate('/')
// }

    //Try 2
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log('works!');
    //     const user = { email: email, password: password };
        
    //     try{

    //         await axios
    //         .post ('http://localhost:8080/user/login', user)
    //         .then ((res) => {
    //             if (res.user.err){
    //                 alert(res.user.err)
    //             }
    //                 localStorage.setItem("token", JSON.stringify(res.user.data.accessToken));
    //                 localStorage.setItem("id", JSON.stringify(res.user.data.id));
    //                 setLoginState({ email: res.user.email, id: res.user.data.id, status: true });
    //                 navigate('/');
    //         })
    //         .catch ((error) => {
    //             if(error.res.status === 404){
    //                 console.log(error);
    //             }
    //         })
    //     } catch (error){
    //         console.log(error);
    //     }
    // } 

    //Original

    // const handleSubmit =  (e) => {
    //     e.preventDefault();
    //     console.log('works!');
    //     const data = { email: email, password: password };
    //     console.log(e)

    //     axios
    //         .post('http://localhost:8080/user/login', data)
    //         .then((res) => {
    //             console.log(res.data.data)

    //             if (res.data.err) {
    //                 alert(res.data.err)
    //             } else {
    //                 localStorage.setItem("token", JSON.stringify(res.data.data.accessToken))
    //                 localStorage.setItem("id", JSON.stringify(res.data.data.id))
    //                 setLoginState({ email: res.data.email, id: res.data.data.id, status: true })
    //                 navigate('/')
    //                 console.log('hi')
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // };

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
                                <input type="email" className="input-content--value" placeholder="Email address" onChange={(e) => { setEmail(e.target.value) }}></input>
                            </div>
                        </div>
                        <div className="login__box-two">
                            <div className="input-content">
                                <div className="input-content__box">
                                    <i className="icon">{iconLock}</i>
                                    <h5 className="input-content--label">PASSWORD</h5>
                                </div>
                                <input type="password" className="input-content--value" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}></input>
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




