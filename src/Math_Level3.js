import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './style.css';

const Math_Level3 = (props) => {
    const submit = () => {
        var total = 0;
        var a = '14'; var b = '23'; var c = '32'; var d = '44'; var e = '52'; var f = '63'; var g = '74'; var h = '81'; var j = '94'; var k = '102';
        var a1 = document.getElementsByName('question1');
        for (let i = 0; i < a1.length; i++) {
            if (a1[i].checked) {
                if (a === a1[i].value) {
                    total++;
                    document.getElementById("list1").style.color = "green";
                }
                else {

                    document.getElementById("list1").style.color = "red";
                }



            }
        }
        var a2 = document.getElementsByName('question2');
        for (let i = 0; i < a2.length; i++) {
            if (a2[i].checked) {
                if (b === a2[i].value) {
                    total++;
                    document.getElementById("list2").style.color = "green";
                }
                else {

                    document.getElementById("list2").style.color = "red";
                }


            }
        }
        var a3 = document.getElementsByName('question3');
        for (let i = 0; i < a3.length; i++) {
            if (a3[i].checked) {
                if (c === a3[i].value) {
                    total++;
                    document.getElementById("list3").style.color = "green";
                }
                else {

                    document.getElementById("list3").style.color = "red";
                }


            }
        }
        var a4 = document.getElementsByName('question4');
        for (let i = 0; i < a4.length; i++) {
            if (a4[i].checked) {
                if (d === a4[i].value) {
                    total++;
                    document.getElementById("list4").style.color = "green";
                }
                else {

                    document.getElementById("list4").style.color = "red";
                }


            }
        }
        var a5 = document.getElementsByName('question5');
        for (let i = 0; i < a5.length; i++) {
            if (a5[i].checked) {
                if (e === a5[i].value) {
                    total++;
                    document.getElementById("list5").style.color = "green";
                }
                else {

                    document.getElementById("list5").style.color = "red";
                }


            }
        }
        var a6 = document.getElementsByName('question6');
        for (let i = 0; i < a6.length; i++) {
            if (a6[i].checked) {
                if (f === a6[i].value) {
                    total++;
                    document.getElementById("list6").style.color = "green";
                }
                else {

                    document.getElementById("list6").style.color = "red";
                }


            }
        }
        var a7 = document.getElementsByName('question7');
        for (let i = 0; i < a7.length; i++) {
            if (a7[i].checked) {
                if (g === a7[i].value) {
                    total++;
                    document.getElementById("list7").style.color = "green";
                }
                else {

                    document.getElementById("list7").style.color = "red";
                }


            }
        }
        var a8 = document.getElementsByName('question8');
        for (let i = 0; i < a8.length; i++) {
            if (a8[i].checked) {
                if (h === a8[i].value) {
                    total++;
                    document.getElementById("list8").style.color = "green";
                }
                else {

                    document.getElementById("list8").style.color = "red";
                }


            }
        }
        var a9 = document.getElementsByName('question9');
        for (let i = 0; i < a9.length; i++) {
            if (a9[i].checked) {
                if (j === a9[i].value) {
                    total++;
                    document.getElementById("list9").style.color = "green";
                }
                else {

                    document.getElementById("list9").style.color = "red";
                }


            }
        }
        var a10 = document.getElementsByName('question10');
        for (let i = 0; i < a10.length; i++) {
            if (a10[i].checked) {
                if (k === a10[i].value) {
                    total++;
                    document.getElementById("list10").style.color = "green";
                }
                else {

                    document.getElementById("list10").style.color = "red";
                }

            }
        }
        if (total === 10) {
            window.location.href = "./Part 3/box.html";
        }




    }




    return (
        <div className="Math_Level3">
            <div>
                <div className="page" style={{ backgroundImage: 'url("Maths 3.jpg")' }}>
                    <div id="slidshow">
                        <div id="navigation-bar">
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
                                <li><a href='/4'><i className="fas fa-home" /> Subjects</a></li>
                            </ul>
                        </div>
                        <div className="text">
                            <h1>You are in the Level 03</h1>
                            <p>Mathematics helps us understand the world and provides an effective way of building mental
                            discipline. Math encourages logical reasoning, critical thinking, creative thinking, abstract or
                    spatial thinking, problem-solving ability, and even effective communication skills.</p>
                        </div>
                        <figure>
                            <img src="boy.jpg" alt="boy" />
                            <img src="girl.jpg" alt="girl" />
                            <img src="fox.jpg" alt="fox" />
                            <img src="boy.jpg" alt="boy" />
                            <img src="fox.jpg" alt="fox" />
                        </figure>
                    </div>
                    <i className="fas fa-ellipsis-h" />
                    <hr />
                    <div className="header1">
                        <h1><i className="fas fa-book" />Maths | Level 03</h1>
                    </div>
                    <img className="side-image" src="girl2.jpg" alt="Girl" title="A kid working on her laptop" />
                    <div className="questions">
                        <ol>
                            <li id="list1">Kamal has seven books. Achini has nine books and Nimal has twelve books. Altogether how
                    many books are there ?<br />
                                <input type="radio" id="answer11" name="question1" defaultValue={11} />
                                <label htmlFor="answer1">12</label><br />
                                <input type="radio" id="answer12" name="question1" defaultValue={12} />
                                <label htmlFor="answer2">20</label><br />
                                <input type="radio" id="answer13" name="question1" defaultValue={13} />
                                <label htmlFor="answer3">27</label><br />
                                <input type="radio" id="answer14" name="question1" defaultValue={14} />
                                <label htmlFor="answer4">28</label><br /><br />
                            </li>
                            <li id="list2">Calculate the perimeter of this rectangle.<br />
                                <img src="Rectangle.png" alt="Rectangle" width="300px" height="200px" />
                                <input type="radio" id="answer21" name="question2" defaultValue={21} />
                                <label htmlFor="answer1">20</label><br />
                                <input type="radio" id="answer22" name="question2" defaultValue={22} />
                                <label htmlFor="answer2">10</label><br />
                                <input type="radio" id="answer23" name="question2" defaultValue={23} />
                                <label htmlFor="answer3">30</label><br />
                                <input type="radio" id="answer24" name="question2" defaultValue={24} />
                                <label htmlFor="answer4">35</label><br /><br />
                            </li>
                            <li id="list3">Amali bought a T-shirt for Rs.450 and skirt for Rs.600. What is the total cost?<br />
                                <input type="radio" id="answer31" name="question3" defaultValue={31} />
                                <label htmlFor="answer1">Rs.1000</label><br />
                                <input type="radio" id="answer32" name="question3" defaultValue={32} />
                                <label htmlFor="answer2">Rs.1050</label><br />
                                <input type="radio" id="answer33" name="question3" defaultValue={33} />
                                <label htmlFor="answer3">Rs.950</label><br />
                                <input type="radio" id="answer34" name="question3" defaultValue={34} />
                                <label htmlFor="answer4">Rs.1150</label><br /><br />
                            </li>
                            <li id="list4">What fraction does the colored area show?<br />
                                <img src="Circle.png" alt="Circle" /><br />
                                <input type="radio" id="answer41" name="question4" defaultValue={41} />
                                <label htmlFor="answer1">1/2</label><br />
                                <input type="radio" id="answer42" name="question4" defaultValue={42} />
                                <label htmlFor="answer2">3/4</label><br />
                                <input type="radio" id="answer43" name="question4" defaultValue={43} />
                                <label htmlFor="answer3">1/3</label><br />
                                <input type="radio" id="answer44" name="question4" defaultValue={44} />
                                <label htmlFor="answer4">2/3</label><br /><br />
                            </li>
                            <li id="list5">Choose the numbers that add up to 28?<br />
                                <img src="Balls.jpg" alt="Balls" />
                                <br />
                                <input type="radio" id="answer51" name="question5" defaultValue={51} />
                                <label htmlFor="answer1">9 , 11</label><br />
                                <input type="radio" id="answer52" name="question5" defaultValue={52} />
                                <label htmlFor="answer2">15 , 13</label><br />
                                <input type="radio" id="answer53" name="question5" defaultValue={53} />
                                <label htmlFor="answer3">11 , 13</label><br />
                                <input type="radio" id="answer54" name="question5" defaultValue={54} />
                                <label htmlFor="answer4">15 , 9</label><br /><br />
                            </li>
                            <li id="list6">Which one of the following shows the greatest number?<br />
                                <input type="radio" id="answer61" name="question6" defaultValue={61} />
                                <label htmlFor="answer1">10 × 8</label><br />
                                <input type="radio" id="answer62" name="question6" defaultValue={62} />
                                <label htmlFor="answer2">80 + 6</label><br />
                                <input type="radio" id="answer63" name="question6" defaultValue={63} />
                                <label htmlFor="answer3">128 – 39</label><br />
                                <input type="radio" id="answer64" name="question6" defaultValue={64} />
                                <label htmlFor="answer4">496 ÷ 8</label><br /><br />
                            </li>
                            <li id="list7">Find the correct statement.<br />
                                <input type="radio" id="answer71" name="question7" defaultValue={71} />
                                <label htmlFor="answer1">2 is an odd number</label><br />
                                <input type="radio" id="answer72" name="question7" defaultValue={72} />
                                <label htmlFor="answer2">11 is an even number</label><br />
                                <input type="radio" id="answer73" name="question7" defaultValue={73} />
                                <label htmlFor="answer3">10 is an odd number</label><br />
                                <input type="radio" id="answer74" name="question7" defaultValue={74} />
                                <label htmlFor="answer4">8 is an even number</label><br /><br />
                            </li>
                            <li id="list8">2 meter is equal to<br />
                                <input type="radio" id="answer81" name="question8" defaultValue={81} />
                                <label htmlFor="answer1">200cm</label><br />
                                <input type="radio" id="answer82" name="question8" defaultValue={82} />
                                <label htmlFor="answer2">0.2Km</label><br />
                                <input type="radio" id="answer83" name="question8" defaultValue={83} />
                                <label htmlFor="answer3">200mm</label><br />
                                <input type="radio" id="answer84" name="question8" defaultValue={84} />
                                <label htmlFor="answer4">20Km</label><br /><br />
                            </li>
                            <li id="list9">Fill in the blank<br />659.32 + ………… = 737.37<br />
                                <input type="radio" id="answer91" name="question9" defaultValue={91} />
                                <label htmlFor="answer1">79.45</label><br />
                                <input type="radio" id="answer92" name="question9" defaultValue={92} />
                                <label htmlFor="answer2">78.15</label><br />
                                <input type="radio" id="answer93" name="question9" defaultValue={93} />
                                <label htmlFor="answer3">78.09</label><br />
                                <input type="radio" id="answer94" name="question9" defaultValue={94} />
                                <label htmlFor="answer4">78.05</label><br /><br />
                            </li>
                            <li id="list10">Choose the correct number pattern<br />
                                <input type="radio" id="answer101" name="question10" defaultValue={101} />
                                <label htmlFor="answer1">8 , 13, 18, 23, 23, 38, 48……</label><br />
                                <input type="radio" id="answer102" name="question10" defaultValue={102} />
                                <label htmlFor="answer2">0 , 1, 1, 2, 3, 5, 8, 13……</label><br />
                                <input type="radio" id="answer103" name="question10" defaultValue={103} />
                                <label htmlFor="answer3">6 , 18 , 54 , 162 , 468……</label><br />
                                <input type="radio" id="answer104" name="question10" defaultValue={104} />
                                <label htmlFor="answer4">1/2 , 2/4 , 3/6 , 4/8 , 5/12……</label><br /><br />
                            </li>
                        </ol>
                    </div>
                    <br />
                    <br />
                    <div className="center"><input type="button" className="submition" form="form1" defaultValue="Submit" onClick={submit} />
                        <p><i className="fas fa-lightbulb" />You must complete all questions before submition</p>
                    </div>
                    <br />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Math_Level3;

