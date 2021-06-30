import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './style.css';

const Math_Level2 = (props) => {
    const submit = () => {
        var total = 0;
        var a = '12'; var b = '24'; var c = '34'; var d = '43'; var e = '51'; var f = '64'; var g = '72'; var h = '82'; var j = '94'; var k = '104';
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
            window.location.href = '/m3';
        }



    }




    return (
        <div className="Math_Level2">
            <div>
                <div className="page" style={{ backgroundImage: 'url("Maths 2.jpg")' }}>
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
                            <h1>You are in the Level 02</h1>
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
                        <h1><i className="fas fa-book" />Maths | Level 02</h1>
                    </div>
                    <img className="side-image" src="girl2.jpg" alt="Girl" title="A kid working on her laptop" />
                    <div className="questions">
                        <ol>
                            <li id="list1">Subtract the following and choose the correct answer.<br />
                                <img src="Adding.png" alt="Adding" /><br />
                                <input type="radio" id="answer11" name="question1" defaultValue={11} />
                                <label htmlFor="answer1">2463</label><br />
                                <input type="radio" id="answer12" name="question1" defaultValue={12} />
                                <label htmlFor="answer2">2457</label><br />
                                <input type="radio" id="answer13" name="question1" defaultValue={13} />
                                <label htmlFor="answer3">7487</label><br />
                                <input type="radio" id="answer14" name="question1" defaultValue={14} />
                                <label htmlFor="answer4">2464</label><br /><br />
                            </li>
                            <li id="list2">Find the correct statement.<br />
                                <input type="radio" id="answer21" name="question2" defaultValue={21} />
                                <label htmlFor="answer1">4 is an odd number</label><br />
                                <input type="radio" id="answer22" name="question2" defaultValue={22} />
                                <label htmlFor="answer2">19 is an even number</label><br />
                                <input type="radio" id="answer23" name="question2" defaultValue={23} />
                                <label htmlFor="answer3">16 is an odd number</label><br />
                                <input type="radio" id="answer24" name="question2" defaultValue={24} />
                                <label htmlFor="answer4">22 is an even number</label><br /><br />
                            </li>
                            <li id="list3">Find the ascending order of the given numbers.<br />29, 18, 31, 10, 23<br />
                                <input type="radio" id="answer31" name="question3" defaultValue={31} />
                                <label htmlFor="answer1">10, 23, 29, 18, 31</label><br />
                                <input type="radio" id="answer32" name="question3" defaultValue={32} />
                                <label htmlFor="answer2">31, 29, 23, 18, 10</label><br />
                                <input type="radio" id="answer33" name="question3" defaultValue={33} />
                                <label htmlFor="answer3">10, 18, 29, 23, 31</label><br />
                                <input type="radio" id="answer34" name="question3" defaultValue={34} />
                                <label htmlFor="answer4">10, 18, 23, 29, 31</label><br /><br />
                            </li>
                            <li id="list4">Choose the correct answer<br />
                                <input type="radio" id="answer41" name="question4" defaultValue={41} />
                                <label htmlFor="answer1">105 &gt; 150</label><br />
                                <input type="radio" id="answer42" name="question4" defaultValue={42} />
                                <label htmlFor="answer2">28 &gt; 82</label><br />
                                <input type="radio" id="answer43" name="question4" defaultValue={43} />
                                <label htmlFor="answer3">245 &lt; 254</label><br />
                                <input type="radio" id="answer44" name="question4" defaultValue={44} />
                                <label htmlFor="answer4">99 &gt; 109</label><br /><br />
                            </li>
                            <li id="list5">Which is the same as the half-past five?<br />
                                <input type="radio" id="answer51" name="question5" defaultValue={51} />
                                <label htmlFor="answer1">5:30</label><br />
                                <input type="radio" id="answer52" name="question5" defaultValue={52} />
                                <label htmlFor="answer2">5:15</label><br />
                                <input type="radio" id="answer53" name="question5" defaultValue={53} />
                                <label htmlFor="answer3">5:45</label><br />
                                <input type="radio" id="answer54" name="question5" defaultValue={54} />
                                <label htmlFor="answer4">5:00</label><br /><br />
                            </li>
                            <li id="list6">Which one is incorrect according to the three times table?<br />
                                <input type="radio" id="answer61" name="question6" defaultValue={61} />
                                <label htmlFor="answer1">3 × 2 = 6</label><br />
                                <input type="radio" id="answer62" name="question6" defaultValue={62} />
                                <label htmlFor="answer2">3 × 7 = 21</label><br />
                                <input type="radio" id="answer63" name="question6" defaultValue={63} />
                                <label htmlFor="answer3">3 × 10 = 30</label><br />
                                <input type="radio" id="answer64" name="question6" defaultValue={64} />
                                <label htmlFor="answer4">3 × 8 = 26</label><br /><br />
                            </li>
                            <li id="list7">Study the number pattern below carefully. What is the missing number?<br />7, 14, 21, 28,
              …… , 42, 49<br />
                                <input type="radio" id="answer71" name="question7" defaultValue={71} />
                                <label htmlFor="answer1">34</label><br />
                                <input type="radio" id="answer72" name="question7" defaultValue={72} />
                                <label htmlFor="answer2">35</label><br />
                                <input type="radio" id="answer73" name="question7" defaultValue={73} />
                                <label htmlFor="answer3">36</label><br />
                                <input type="radio" id="answer74" name="question7" defaultValue={74} />
                                <label htmlFor="answer4">37</label><br /><br />
                            </li>
                            <li id="list8">Choose the correct answer.<br />
                                <input type="radio" id="answer81" name="question8" defaultValue={81} />
                                <label htmlFor="answer1">69 ÷ 2 = 37</label><br />
                                <input type="radio" id="answer82" name="question8" defaultValue={82} />
                                <label htmlFor="answer2">125 ÷ 5 = 25</label><br />
                                <input type="radio" id="answer83" name="question8" defaultValue={83} />
                                <label htmlFor="answer3">81 ÷ 3 = 24</label><br />
                                <input type="radio" id="answer84" name="question8" defaultValue={84} />
                                <label htmlFor="answer4">100 ÷ 3 = 50</label><br /><br />
                            </li>
                            <li id="list9">What time is shown on the clock?<br />
                                <img src="Clock.png" alt="Clock" height="200px" width="200px" />
              It is …………. Past one.<br />
                                <input type="radio" id="answer91" name="question9" defaultValue={91} />
                                <label htmlFor="answer1">2 quarters</label><br />
                                <input type="radio" id="answer92" name="question9" defaultValue={92} />
                                <label htmlFor="answer2">half</label><br />
                                <input type="radio" id="answer93" name="question9" defaultValue={93} />
                                <label htmlFor="answer3">3 quarters</label><br />
                                <input type="radio" id="answer94" name="question9" defaultValue={94} />
                                <label htmlFor="answer4">a quarter</label><br /><br />
                            </li>
                            <li id="list10">92 is less than?<br />
                                <input type="radio" id="answer101" name="question10" defaultValue={101} />
                                <label htmlFor="answer1">86</label><br />
                                <input type="radio" id="answer102" name="question10" defaultValue={102} />
                                <label htmlFor="answer2">88</label><br />
                                <input type="radio" id="answer103" name="question10" defaultValue={103} />
                                <label htmlFor="answer3">90</label><br />
                                <input type="radio" id="answer104" name="question10" defaultValue={104} />
                                <label htmlFor="answer4">94</label><br /><br />
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

export default Math_Level2;

