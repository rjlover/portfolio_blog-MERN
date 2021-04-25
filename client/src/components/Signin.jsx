import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";

import login from '../images/login.svg';

import { userContext } from '../App'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


function Login() {

    const { state, dispatch } = useContext(userContext);

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/login', {
                method: "POSt",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const data = await res.json();

            if (data.error || data.invalid || !data) {
                toast.error(data.error, { position: toast.POSITION.TOP_CENTER });
                toast.warning(data.invalid, { position: toast.POSITION.TOP_CENTER });
            } else {
                dispatch({ type: "USER", payload: true });

                toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
                console.log(data.message);
                history.push('/');
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className="login_body">
                <div className="login_container">
                    <div className="login-form">
                        <form method="POSt">
                            <h2 className="text-center">Log in</h2>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-user"></span>
                                        </span>
                                    </div>
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" autoComplete="off"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" name="password" placeholder="Password" required="required" autoComplete="off"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick={loginUser} className="btn btn-primary login-btn btn-block">Log in</button>
                                {/* <input onClick={login} type="submit" value="login" className="btn btn-primary login-btn btn-block" /> */}
                            </div>
                            <div className="clearfix">
                                <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                                <NavLink to="#" className="float-right">Forgot Password?</NavLink>
                            </div>
                            <div className="or-seperator"><i>or</i></div>
                            <p className="text-center">Login with your social media account</p>
                            <div className="text-center social-btn">
                                <NavLink to="/" className="btn btn-secondary"><i className="fa fa-facebook"></i>&nbsp; Facebook</NavLink>
                                <NavLink to="/" className="btn btn-info"><i className="fa fa-twitter"></i>&nbsp; Twitter</NavLink>
                                <NavLink to="/" className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</NavLink>
                            </div>
                        </form>
                        <div className="text-center">Don't have an account? <NavLink to="/Register">Sign up here!</NavLink></div>
                    </div>

                    <figure>
                        <img src={login} alt="login" ></img>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Login;
