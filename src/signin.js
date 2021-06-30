import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './styleRegister.css';
//import Choose from './choose';


const SignIn = (props) => {


    const [emails, setemail] = useState("");
    const [passwords, setpassword] = useState("");
    const [Error, setError] = useState("");


    const [users, setUser] = React.useState([]);



    useEffect(() => {
        function getUser() {
            axios.get("https://quizhexa123.herokuapp.com/api/").then((res) => {
                setUser(res.data);

            }).catch((err) => {
                console.log(err.message);
            })
        }
        getUser();
    }, [])


    function Log(e) {
        e.preventDefault();
        var notMatch = 0
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === emails && users[i].password === passwords) {
                notMatch = 1;
                window.location.href = '/4';
            }
        }
        if (notMatch === 0) {
            setError("*email and password does not match.")
        }

    }





    return (
        <div className="SignIn">

            <div>
                <div id="navigation-bar">
                    <ul>
                        <i className="fas fa-bars" />
                        <li><a href="aboutUs.html"><i className="fas fa-users " /> About Us</a></li>
                        <li><a href="contact.html"><i className="fas fa-users " /> Contact Us</a></li>

                        <li><Link to="/"><i className="fas fa-home" /> Home</Link></li>
                        {/* <li><a href="aboutUs.html"><i className="fas fa-users " /> About Us</a></li>
                        <li><a href="#a"><i className="fas fa-phone-alt" /> Contact Us</a></li>
                        <li><a href='/'><i className="fas fa-home" /> Home</a></li> */}
                    </ul>
                </div>
                <div className="box">

                    <div className="page">
                        <div className="header">
                            <a id="login" className="work" href='/2' style={{ color: "red" }}>login</a>
                            <a id="signup" href='/3'>sign Up</a>
                        </div>
                        <div id="errorMsg" />
                        <div className="content">
                            <form className="login" name="loginForm" onSubmit={Log}>
                                <input type="email" name="email" id="logemail" placeholder="email" onChange={(e) => {
                                    setemail(e.target.value);
                                }} />
                                <input type="password" name="password" id="logPassword" placeholder="Password" onChange={(e) => {
                                    setpassword(e.target.value);
                                }} />
                                <span className="logError">{Error}</span>

                                <br /><br />
                                <input type="submit" defaultValue="Login" />
                                <a href='/3'>Forgot Password?</a>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    );
}

export default SignIn;