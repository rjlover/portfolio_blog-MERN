import React from 'react'
import '../about.css';

import r1 from '../images/r1.jpg';
import r2 from '../images/r2.jpg';
import r3 from '../images/r3.jpg';

function About() {
    return (
        <>
            <div className="about">
                <h2 style={{color:"#fff",fontSize:"55px"}}>About Me</h2>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="img-box"><img src={r1} alt="" /></div>
                            <p className="testimonial">I am a M.C.A student at University Of Kalyani.I completed my B.Sc. Math(Hns.) from Asutosh Collage </p>
                            <p className="overview"><b>Ramij Raja</b>MERN stack developer</p>
                            <div className="star-rating">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="img-box"><img src={r2} alt="" /></div>
                            <p className="testimonial">I am intrested in MERN stack development.I have worked in technologies like Reactjs ,Nodejs,Express js,Mongo DB</p>
                            <p className="overview"><b>Ramij Raja</b>MERN stack developer</p>
                            <div className="star-rating">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="img-box"><img src={r3} alt="" /></div>
                            <p className="testimonial">I am currently in Final year and pursuing 3year M.C.A. degree And I worked on many projects.</p>
                            <p className="overview"><b>Ramij Raja</b>Web Developer at Web Team</p>
                            <div className="star-rating">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
                <br />
                <br />
                <br />
                <div className="skill-section">
                    <h3>My Skills</h3>
                    <div className="skills">
                        <span className="s-name">HTML</span>
                        <div className="percent">
                            <div className="s-progress" style={{ width: "88%" }}></div>
                        </div>
                        <span className="value">88%</span>
                    </div>

                    <div className="skills">
                        <span className="s-name">CSS</span>
                        <div className="percent">
                            <div className="s-progress" style={{ width: "67%" }}></div>
                        </div>
                        <span className="value">67%</span>
                    </div>

                    <div className="skills">
                        <span className="s-name">JS</span>
                        <div className="percent">
                            <div className="s-progress" style={{ width: "70%" }}></div>
                        </div>
                        <span className="value">70%</span>
                    </div>

                    <div className="skills">
                        <span className="s-name">NODE js</span>
                        <div className="percent">
                            <div className="s-progress" style={{ width: "65%" }}></div>
                        </div>
                        <span className="value">65%</span>
                    </div>

                    <div className="skills">
                        <span className="s-name">Express js</span>
                        <div className="percent">
                            <div className="s-progress" style={{ width: "82%" }}></div>
                        </div>
                        <span className="value">82%</span>
                    </div>

                    <div className="skills">
                        <span className="s-name">SQL</span>
                        <div className="percent">
                            <div className="s-progress" style={{ width: "60%" }}></div>
                        </div>
                        <span className="value">60%</span>
                    </div>
                    <div className="skills">
                        <span className="s-name">NO SQL</span>
                        <div className="percent">
                            <div className="s-progress" style={{ width: "90%" }}></div>
                        </div>
                        <span className="value">90%</span>
                    </div>
                    <div className="skills">
                        <span className="s-name">REACT js</span>
                        <div className="percent">
                            <div className="s-progress" style={{ width: "75%" }}></div>
                        </div>
                        <span className="value">75%</span>
                    </div>
                </div>
            </div>
        </>


    )
}

export default About;
