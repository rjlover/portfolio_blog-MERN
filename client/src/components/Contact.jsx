import React, { useEffect, useState } from 'react';
import '../contact.css';

import adress from '../images/adress.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Contact() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });


    let furl = "www.facebook.com";
    let iurl = "www.instagram.com";
    let turl = "www.twitter.com";
    let lurl = "www.linkdin.com";
    let yurl = "www.youtube.com";


    const callAboutPage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();

            setUser({ ...user, name: data.name, email: data.email, phone: data.phone });

            if (!res.status === 200) {
                throw new Error(res.error);
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    const inputEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const messageSend = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = user;

        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });

        const data = await res.json();

        if (data.error || data.invalid || !data) {
            toast.error(data.error, { position: toast.POSITION.TOP_CENTER });
            toast.warning(data.invalid, { position: toast.POSITION.TOP_CENTER });

        }
        else {
            toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
            setUser({ ...user, message: "" })
        }
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="contactinfo">
                        <div>
                            <h3>Contact Info</h3>
                            <ul className="info">
                                <li>
                                    <span><img src={adress} alt="adress" /></span>
                                    <span>Kachua,kalikapota<br />
                                Sangrampur,South 24 pgs.<br />
                                West Bengal,743355</span>
                                </li>
                                <li>
                                    <span><img src={mail} alt="adress" /></span>
                                    <span>ramijraja36@gmail.com</span>
                                </li>
                                <li>
                                    <span><img src={phone} alt="adress" /></span>
                                    <span>9609741883</span>
                                </li>
                            </ul>
                        </div>

                        <ul className="sci">
                            <li><a href={furl}><img src={facebook} alt="" /></a></li>
                            <li><a href={iurl}><img src={instagram} alt="" /></a></li>
                            <li><a href={lurl}><img src={linkedin} alt="" /></a></li>
                            <li><a href={turl}><img src={twitter} alt="" /></a></li>
                            <li><a href={yurl}><img src={youtube} alt="" /></a></li>
                        </ul>

                    </div>

                    <div className="contactForm">
                        <h3>Send a Message</h3>
                        <form action="" method="post">
                            <div className="formBox">
                                <div className="inputBox w50">
                                    <input type="text" value={user.name} onChange={inputEvent} name="name" required />
                                    <span>Full Name</span>
                                </div>

                                <div className="inputBox w50">
                                    <input type="mail" value={user.email} onChange={inputEvent} name="email" required />
                                    <span>Email Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="number" value={user.phone} onChange={inputEvent} name="phone" required />
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea name="message" value={user.message} onChange={inputEvent} required />
                                    <span>Write your message here...</span>
                                </div>
                                <div className="inputBox w50">
                                    <input onClick={messageSend} type="submit" value="send" />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
