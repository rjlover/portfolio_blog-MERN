import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";

import sighnup from '../images/sighnup.svg';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Register() {

    const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    });

    let name, value;
    const inputEvent = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();

        try {
            const { name, email, phone, work, password, cpassword } = user;

            const res = await fetch('/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, work, password, cpassword
                })
            });

            const data = await res.json();

            if (data.error || data.invalid || !data) {
                toast.error(data.error, { position: toast.POSITION.TOP_CENTER });
                toast.warning(data.invalid, { position: toast.POSITION.TOP_CENTER });
                console.log("invalid registration");
            }
            else {
                toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
                console.log("registration success");
                history.push('/Signin');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="register_body">
                <div className="register_container">
                    <div className="signup-form">
                        <form method="POST">
                            <h2>Sign Up</h2>
                            <p>Please fill in this form to create an account!</p>
                            <hr />
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-user"></span>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" name="name" placeholder="Full Name" required="required" autoComplete="off"
                                        value={user.name}
                                        onChange={inputEvent} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-paper-plane"></i>
                                        </span>
                                    </div>
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" autoComplete="off"
                                        value={user.email}
                                        onChange={inputEvent} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-phone"></i>
                                        </span>
                                    </div>
                                    <input type="number" className="form-control" name="phone" placeholder="Phone Number" required="required" autoComplete="off"
                                        value={user.phone}
                                        onChange={inputEvent} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-briefcase"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" name="work" placeholder="Your Profession" required="required" autoComplete="off"
                                        value={user.work}
                                        onChange={inputEvent} />
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
                                        value={user.password}
                                        onChange={inputEvent} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                            <i className="fa fa-check"></i>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" name="cpassword" placeholder="Confirm Password" required="required" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={inputEvent} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                            </div>
                            <div className="form-group">
                                {/* <button type="submit" onClick={postData} className="btn btn-primary btn-lg">Sign Up</button> */}
                                <input type="submit" onClick={postData} value="register" className="btn btn-primary btn-lg" />
                            </div>
                        </form>

                        <div className="text-center">Already have an account? <NavLink to="/Signin">Login here</NavLink></div>

                    </div>

                    <figure>
                        <img src={sighnup} alt="registration" ></img>
                    </figure>
                </div>
            </div>
        </>

    )
}

export default Register
