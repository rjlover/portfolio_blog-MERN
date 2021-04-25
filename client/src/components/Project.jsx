import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

import p1 from "../images/p1.jfif";
import p2 from "../images/p2.png";
import p3 from "../images/p3.jfif";
import p4 from "../images/p4.jfif";
import p5 from "../images/p5.jfif";
import p6 from "../images/p6.jfif"

function Project() {

    const history = useHistory();
    const [uname, setUname] = useState('');
    const [uid, setUid] = useState('');
    const [uemail, setUemail] = useState('');
    const [uphone, setUphone] = useState('');
    const [uwork, setUwork] = useState('');

    const callProjectPage = async () => {
        try {
            const res = await fetch('/project', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();

            // console.log("my data is", data);
            setUid(data._id);
            setUname(data.name);
            setUemail(data.email);
            setUphone(data.phone);
            setUwork(data.work);


            // if (!res.status === 200) {
            //     throw new Error(res.error);
            // }

            if (data.error || !data) {
                throw new Error(data.error);
            }

        } catch (err) {
            // console.log(err);
            history.push('/Signin')
        }
    }

    useEffect(() => {
        callProjectPage();
    }, [])

    return (
        <>

            <div className="pcontainer">
                <div className="you">
                    <button type="button" className="btn1" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">CLICK TO CHECK ABOUT YOU</button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Your Profile</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="recipient-name" class="col-form-label" style={{ color: "blue" }}  >NAME :</label>
                                            <input type="text" class="form-control" value={uname} id="recipient-name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="recipient-name" class="col-form-label" style={{ color: "blue" }}>EMAIL :</label>
                                            <input type="text" class="form-control" value={uemail} id="recipient-name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="recipient-name" class="col-form-label" style={{ color: "blue" }}>CONTACT NO. :</label>
                                            <input type="text" class="form-control" value={uphone} id="recipient-name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="recipient-name" class="col-form-label" style={{ color: "blue" }}>PROFESSION :</label>
                                            <input type="text" class="form-control" value={uwork} id="recipient-name" />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save Changed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="tutorial">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={p1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">REACT BABEl-WEBPACK</h5>
                            <p class="card-text">This article is part of a two part series on how to configure a React app from scratch with Webpack and Babel and eventually add TypeScript to it.....</p>
                            <NavLink to="#" class="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <img src={p2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">SHOPPING-APP</h5>
                            <p class="card-text">Ok, so you may have heard of React and Redux since they’ve been all over the place lately. You may have found a bunch of tutorials and resources......</p>
                            <NavLink to="#" class="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <img src={p3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">REACT BABEl-WEBPACK</h5>
                            <p class="card-text">This article is part of a two part series on how to configure a React app from scratch with Webpack and Babel and .....</p>
                            <NavLink to="#" class="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={p4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BLOG-MERN</h5>
                            <p class="card-text">This "guide" is for people who want to create a blog from scratch and do not know how to start, it doesn´t contain  code or at least for the .....</p>
                            <NavLink to="#" class="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={p5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">MERN-DEPLOY</h5>
                            <p class="card-text">In this article, we'll be building and deploying an application built with the MERN stack to Heroku.MERN, which stands for MongoDB, Express,......</p>
                            <NavLink to="#" class="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={p6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">TODO-LIST</h5>
                            <p class="card-text">Here, todoCtrl is the imported version of the todo-ctrl.js inside the todo-router.js and the createItem is the function which is declar.......</p>
                            <NavLink to="#" class="btn btn-primary">Read More</NavLink>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Project;
