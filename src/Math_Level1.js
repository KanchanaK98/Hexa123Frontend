import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './style.css';

const Math_Level1 = (props) => {
    const submit = () => {
        var total = 0;
        var a = '14'; var b = '22'; var c = '31'; var d = '42'; var e = '53'; var f = '64'; var g = '72'; var h = '83'; var j = '92'; var k = '101';
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
            window.location.href = '/m2';
        }



    }




    return (
        <div className="Math_Level1">
            <div>
                <div className="page" style={{ backgroundImage: 'url("Maths 1.jpg")' }}>
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
                            <h1>You are in the Level 01</h1>
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
                        <h1><i className="fas fa-book" />Maths | Level 01</h1>
                    </div>
                    <img className="side-image" src="girl2.jpg" alt="Girl" title="A kid working on her laptop" />
                    <div className="questions">
                        <ol>
                            <li id="list1">What is the largest number?<br />
                                <input type="radio" id="answer11" name="question1" defaultValue={11} />
                                <label htmlFor="answer1">5</label><br />
                                <input type="radio" id="answer12" name="question1" defaultValue={12} />
                                <label htmlFor="answer2">12</label><br />
                                <input type="radio" id="answer13" name="question1" defaultValue={13} />
                                <label htmlFor="answer3">9</label><br />
                                <input type="radio" id="answer14" name="question1" defaultValue={14} />
                                <label htmlFor="answer4">21</label><br /><br />
                            </li>
                            <li id="list2">7+5 is equal to ……?<br />
                                <input type="radio" id="answer21" name="question2" defaultValue={21} />
                                <label htmlFor="answer1">21</label><br />
                                <input type="radio" id="answer22" name="question2" defaultValue={22} />
                                <label htmlFor="answer2">12</label><br />
                                <input type="radio" id="answer23" name="question2" defaultValue={23} />
                                <label htmlFor="answer3">2</label><br />
                                <input type="radio" id="answer24" name="question2" defaultValue={24} />
                                <label htmlFor="answer4">11</label><br /><br />
                            </li>
                            <li id="list3">14-6 is equal to ……?<br />
                                <input type="radio" id="answer31" name="question3" defaultValue={31} />
                                <label htmlFor="answer1">8</label><br />
                                <input type="radio" id="answer32" name="question3" defaultValue={32} />
                                <label htmlFor="answer2">7</label><br />
                                <input type="radio" id="answer33" name="question3" defaultValue={33} />
                                <label htmlFor="answer3">9</label><br />
                                <input type="radio" id="answer34" name="question3" defaultValue={34} />
                                <label htmlFor="answer4">6</label><br /><br />
                            </li>
                            <li id="list4">Choose the correct sign belongs to the blank. 53___65<br />
                                <input type="radio" id="answer41" name="question4" defaultValue={41} />
                                <label htmlFor="answer1"> = </label><br />
                                <input type="radio" id="answer42" name="question4" defaultValue={42} />
                                <label htmlFor="answer2"> &lt; </label><br />
                                <input type="radio" id="answer43" name="question4" defaultValue={43} />
                                <label htmlFor="answer3"> &gt; </label><br />
                                <input type="radio" id="answer44" name="question4" defaultValue={44} />
                                <label htmlFor="answer4"> &lt;= </label><br /><br />
                            </li>
                            <li id="list5">What is the number name of 13 ?<br />
                                <input type="radio" id="answer51" name="question5" defaultValue={51} />
                                <label htmlFor="answer1">Thirty one</label><br />
                                <input type="radio" id="answer52" name="question5" defaultValue={52} />
                                <label htmlFor="answer2">Thirty</label><br />
                                <input type="radio" id="answer53" name="question5" defaultValue={53} />
                                <label htmlFor="answer3">Thirteen</label><br />
                                <input type="radio" id="answer54" name="question5" defaultValue={54} />
                                <label htmlFor="answer4">Three one</label><br /><br />
                            </li>
                            <li id="list6">What is this shape?<br />
                                <img src="Triangle.png" alt="Triangle" /><br /><br />
                                <input type="radio" id="answer61" name="question6" defaultValue={61} />
                                <label htmlFor="answer1">Rectangle</label><br />
                                <input type="radio" id="answer62" name="question6" defaultValue={62} />
                                <label htmlFor="answer2">Square</label><br />
                                <input type="radio" id="answer63" name="question6" defaultValue={63} />
                                <label htmlFor="answer3">Circle</label><br />
                                <input type="radio" id="answer64" name="question6" defaultValue={64} />
                                <label htmlFor="answer4">Triangle</label><br /><br />
                            </li>
                            <li id="list7">Select the smallest number?<br />
                                <input type="radio" id="answer71" name="question7" defaultValue={71} />
                                <label htmlFor="answer1">99</label><br />
                                <input type="radio" id="answer72" name="question7" defaultValue={72} />
                                <label htmlFor="answer2">92</label><br />
                                <input type="radio" id="answer73" name="question7" defaultValue={73} />
                                <label htmlFor="answer3">94</label><br />
                                <input type="radio" id="answer74" name="question7" defaultValue={74} />
                                <label htmlFor="answer4">96</label><br /><br />
                            </li>
                            <li id="list8">What time is shown on the clock?<br />
                                <img src="paper-clock.jpg" alt="Clock" /><br />
                                <input type="radio" id="answer81" name="question8" defaultValue={81} />
                                <label htmlFor="answer1">Twelve o’ clock</label><br />
                                <input type="radio" id="answer82" name="question8" defaultValue={82} />
                                <label htmlFor="answer2">Two o’ clock</label><br />
                                <input type="radio" id="answer83" name="question8" defaultValue={83} />
                                <label htmlFor="answer3">Three o’ clock</label><br />
                                <input type="radio" id="answer84" name="question8" defaultValue={84} />
                                <label htmlFor="answer4">Four o’ clock</label><br /><br />
                            </li>
                            <li id="list9">25 divide by 5. Answer is …….?<br />
                                <input type="radio" id="answer91" name="question9" defaultValue={91} />
                                <label htmlFor="answer1">4</label><br />
                                <input type="radio" id="answer92" name="question9" defaultValue={92} />
                                <label htmlFor="answer2">5</label><br />
                                <input type="radio" id="answer93" name="question9" defaultValue={93} />
                                <label htmlFor="answer3">25</label><br />
                                <input type="radio" id="answer94" name="question9" defaultValue={94} />
                                <label htmlFor="answer4">10</label><br /><br />
                            </li>
                            <li id="list10">What is the unit of measurement used to measure length ?<br />
                                <input type="radio" id="answer101" name="question10" defaultValue={101} />
                                <label htmlFor="answer1">m</label><br />
                                <input type="radio" id="answer102" name="question10" defaultValue={102} />
                                <label htmlFor="answer2">kg</label><br />
                                <input type="radio" id="answer103" name="question10" defaultValue={103} />
                                <label htmlFor="answer3">l</label><br />
                                <input type="radio" id="answer104" name="question10" defaultValue={104} />
                                <label htmlFor="answer4">Rs</label><br /><br />
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

            </div>
            <Footer />
        </div>
    );
}

export default Math_Level1;