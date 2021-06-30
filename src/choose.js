import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './choose.css';


const Choose = (props) => {

    return (
        <div className="Choose" >

            <div>
                <div className="navigation-bar">
                    <ul>
                        <i className="fas fa-bars" />
                        <div class="dropdown">
                            <button class="dropbtn"><i className="fas fa-user-alt" /> Profile
                        <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">

                                <Link to='/m1'>Mathematics</Link>
                                <Link to='/e1'>English</Link>
                                <Link to='/g1'>Genaral Knowladge</Link>
                                <Link to='/'>Log out</Link>

                            </div>
                        </div>
                        <li><a href="aboutUs.html"><i className="fas fa-users " /> About Us</a></li>
                        <li><a href="contact.html"><i class="fas fa-phone-alt"></i> Contact Us</a></li>

                        {/* <li><a href="/5"><i className="fas fa-phone-alt" /> Contact Us</a></li> */}

                    </ul>
                </div>
                <div className="flip-box1">
                    <div className="flip-box1-inner">
                        <div className="flip-box1-front">
                            <h2 id="h">English</h2>
                        </div>
                        <div className="flip-box1-back">
                            <h2 id="h" >English Quiz</h2>
                            <div className="under1"><img src="https://img.icons8.com/color/48/000000/circled-down-2--v2.png" alt="image1" /></div>
                            <a href="/e1" className="button1"><b>Attempt Now</b></a>
                        </div>
                    </div>
                </div>
                <div className="flip-box2">
                    <div className="flip-box2-inner">
                        <div className="flip-box2-front">
                            <h2 id="h">Maths</h2>
                        </div>
                        <div className="flip-box2-back">
                            <h2 id="h">Maths Quiz</h2>
                            <div className="under1"><img alt="image2" src="https://img.icons8.com/color/48/000000/circled-down-2--v2.png" /></div>
                            <a href="/m1" className="button1"><b>Attempt Now</b></a>
                        </div>
                    </div>
                </div>
                <div className="flip-box31">
                    <div className="flip-box31-inner">
                        <div className="flip-box31-front">
                            <h2 id="h">General Knowledge</h2>
                        </div>
                        <div className="flip-box31-back">
                            <h2 id="h">General Knowledge Quiz</h2>
                            <div className="under1"><img alt="image3" src="https://img.icons8.com/color/48/000000/circled-down-2--v2.png" /></div>
                            <a href="/g1" className="button1"><b>Attempt Now</b></a>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default Choose;
