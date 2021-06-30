import React from 'react'
import Footer from './Footer';
import './styleIndex.css';

const Home = (props) => {

    return (
        <div className="Home">
            <div>
                <section>
                    <div className="circle" />
                    <header>
                        <a href="aboutUs.html" className="logo"><img alt="image1" src="logo.png" className="img1" /></a>
                        <ul>
                            <li><a href='/2'>Login</a></li>
                            <li><a href='/3'>Sign Up</a></li>
                        </ul>
                    </header>
                    <div className="content1">
                        <div className="text">
                            <h1>Hexa <span>123</span></h1>
                            <h5>Developing a passion for learning . . .</h5><br /><br /><br />
                            <h2>FOR CHILDREN <span>AGES 4-10</span></h2><br /><br />
                        </div>
                        <div className="imgBox">
                            <img src="cover.png" alt="image2" className="starbucks" />
                        </div>
                    </div>
                    <ul className="thumb">
                        <li><a href="#mathematics"><img alt="image3" src="t1.png" width="180px" height="180px" /></a></li>
                        <li><a href="#english"><img alt="image4" src="t2.png" width="180px" height="180px" /></a></li>
                        <li><a href="#gknowledge"><img alt="image5" src="t3.png" width="180px" height="180px" /></a></li>
                    </ul>
                </section>
                <hr id="line" />
                <div className="background">

                    <div className="maths" id="mathematics">
                        <table>
                            <tbody><tr>
                                <th colSpan={2}><h2>Mathematics</h2></th>
                            </tr>
                                <tr>
                                    <td>
                                        <img src="math_image.png" alt="math_image" />
                                    </td>
                                    <td>
                                        <h3>You will learn...</h3><br />
                                        <ul>
                                            <li>Counting Numbers</li>
                                            <li>Recognizing Shapes</li>
                                            <li>Identifying Patterns</li>
                                            <li>Length and Time Measurements</li>
                                            <li>Addition</li>
                                            <li>Subtraction</li>
                                            <li>Multiplication</li>
                                            <li>Division</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody></table>
                    </div>

                    <div className="english" id="english">
                        <table>
                            <tbody><tr>
                                <th colSpan={2}><h2>English</h2></th>
                            </tr>
                                <tr>
                                    <td>
                                        <h3>You will learn...</h3><br />
                                        <ul>
                                            <li>Simple &amp; Capital Letters</li>
                                            <li>Nouns</li>
                                            <li>Adjectives</li>
                                            <li>Rhyming Words</li>
                                            <li>Prepositions</li>
                                            <li>Singular &amp; Plural</li>
                                            <li>Similar Words &amp; Opposite Words</li>
                                            <li>Basic Grammar</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <img src="en_image.png" alt="en_image" />
                                    </td>
                                </tr>
                            </tbody></table>
                    </div>

                    <div className="gknowledge" id="gknowledge">
                        <table>
                            <tbody><tr>
                                <th colSpan={2}><h2>General Knowledge</h2></th>
                            </tr>
                                <tr>
                                    <td>
                                        <img src="gk_image.png" alt="gk_image" />
                                    </td>
                                    <td>
                                        <h3>You will learn...</h3><br />
                                        <ul>
                                            <li>Sri Lanka &amp; World</li>
                                            <li>Environment</li>
                                            <li>Body &amp; Health</li>
                                            <li>Plants &amp; Animals</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
