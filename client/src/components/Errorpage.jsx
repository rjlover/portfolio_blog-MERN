import React from 'react'
import { NavLink } from 'react-router-dom'

function Errorpage() {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h3>We are sorry, page not found!</h3>
                    <p className="mb-5">
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </p>
                    <NavLink className="backbtn" to="/">Back To Home</NavLink>
                </div>
            </div>
        </>
    )
}

export default Errorpage;
