import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import { userContext } from '../App'

function Navber() {

    const { state, dispatch } = useContext(userContext);

    const DynamicNav = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/Project">Project </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/About">About Me </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/Contact">Contact Me</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/Logout">Log Out</NavLink>
                    </li>

                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/Project">Project </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/About">About Me </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/Contact">Contact Me</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/Register">Register</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeClassName="active-class" className="nav-link" to="/Signin">Log In</NavLink>
                    </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">RAMIJ RAJA</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <DynamicNav />

                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navber;
