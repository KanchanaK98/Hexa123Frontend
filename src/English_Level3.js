import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './style.css';

const English_Level3 = (props) => {
    const submit = () => {
        var total = 0;
        var a = '12'; var b = '21'; var c = '33'; var d = '44'; var e = '53'; var f = '64'; var g = '72'; var h = '83'; var j = '94'; var k = '103';
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
        <div className="English_Level3">
            <div className="page" style={{ backgroundImage: 'url("img8.jpg")' }}>
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
                            <li><a href='/4'><i className="fas fa-home" /> subjects</a></li>
                        </ul>
                    </div>
                    <div className="text">
                        <h1>You are going to learn English</h1>
                        <p>There are many, many reasons why learning a new language is a good idea. It allows you to communicate with
                        new people.
                        It helps you to see things from a different perspective, or get a deeper understanding of another culture.
                        It helps you
              to become a better listener. <br />Nowadays, more and more people are dedicating time to studying English as a
              second language. Many countries include
              English in their school syllabus and children are starting to learn English at a younger and younger age.
              But what is
              the true value of learning English?
              Whether you are looking for a new job or planning to travel the world, studying English can help you
              progress in life
              both personally and professionally. You can compete in the global job market, increase your career skills
              and start to
              meet people around the world.</p>
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
                    <h1><i className="fas fa-book" />English | Level 03</h1>
                </div>
                <img className="side-image" src="girl2.jpg" alt="Girl" title="A kid working on her laptop" />
                <div className="questions">
                    <div className="discription">
                        <p><b>Choose the correct word to fill in the blanks.</b></p>
                    </div>
                    <ol>
                        <li id="list1">Grandfather bought lots of sweets for ……….<br /><br />
                            <input type="radio" id="answer11" name="question1" defaultValue={11} />
                            <label htmlFor="answer1">We</label><br />
                            <input type="radio" id="answer12" name="question1" defaultValue={12} />
                            <label htmlFor="answer2">us</label><br />
                            <input type="radio" id="answer13" name="question1" defaultValue={13} />
                            <label htmlFor="answer3">I</label><br />
                            <input type="radio" id="answer14" name="question1" defaultValue={14} />
                            <label htmlFor="answer4">She</label>
                        </li>
                        <li id="list2">I love my mother. ..………. is a kind person.<br /><br />
                            <input type="radio" id="answer21" name="question2" defaultValue={21} />
                            <label htmlFor="answer1">She</label><br />
                            <input type="radio" id="answer22" name="question2" defaultValue={22} />
                            <label htmlFor="answer2">He</label><br />
                            <input type="radio" id="answer23" name="question2" defaultValue={23} />
                            <label htmlFor="answer3">Me</label><br />
                            <input type="radio" id="answer24" name="question2" defaultValue={24} />
                            <label htmlFor="answer4">I</label>
                        </li>
                        <li id="list3">I lost ……….. pen which father gave me yesterday.<br /><br />
                            <input type="radio" id="answer31" name="question3" defaultValue={31} />
                            <label htmlFor="answer1">a</label><br />
                            <input type="radio" id="answer32" name="question3" defaultValue={32} />
                            <label htmlFor="answer2">an</label><br />
                            <input type="radio" id="answer33" name="question3" defaultValue={33} />
                            <label htmlFor="answer3">the</label><br />
                            <input type="radio" id="answer34" name="question3" defaultValue={34} />
                            <label htmlFor="answer4">is</label>
                        </li>
                        <li id="list4">We …………….. to the temple yesterday.<br /><br />
                            <input type="radio" id="answer41" name="question4" defaultValue={41} />
                            <label htmlFor="answer1">go</label><br />
                            <input type="radio" id="answer42" name="question4" defaultValue={42} />
                            <label htmlFor="answer2">are going</label><br />
                            <input type="radio" id="answer43" name="question4" defaultValue={43} />
                            <label htmlFor="answer3">going</label><br />
                            <input type="radio" id="answer41" name="question4" defaultValue={44} />
                            <label htmlFor="answer4">went</label>
                        </li>
                        <li id="list5">He answered …………… the questions correctly, so his score was 10 out of 10.<br /><br />
                            <input type="radio" id="answer51" name="question5" defaultValue={51} />
                            <label htmlFor="answer1">lots of</label><br />
                            <input type="radio" id="answer52" name="question5" defaultValue={52} />
                            <label htmlFor="answer2">plenty of</label><br />
                            <input type="radio" id="answer53" name="question5" defaultValue={53} />
                            <label htmlFor="answer3">all of</label><br />
                            <input type="radio" id="answer54" name="question5" defaultValue={54} />
                            <label htmlFor="answer4">several of</label>
                        </li>
                        <li id="list6"> …………….. do you live ?<br /><br />
                            <input type="radio" id="answer61" name="question6" defaultValue={61} />
                            <label htmlFor="answer1">what</label><br />
                            <input type="radio" id="answer62" name="question6" defaultValue={62} />
                            <label htmlFor="answer2">when</label><br />
                            <input type="radio" id="answer63" name="question6" defaultValue={63} />
                            <label htmlFor="answer3">which</label><br />
                            <input type="radio" id="answer64" name="question6" defaultValue={64} />
                            <label htmlFor="answer4">where</label>
                        </li>
                        <li id="list7">……………. I go home now?<br /><br />
                            <input type="radio" id="answer71" name="question7" defaultValue={71} />
                            <label htmlFor="answer1">what</label><br />
                            <input type="radio" id="answer72" name="question7" defaultValue={72} />
                            <label htmlFor="answer2">can</label><br />
                            <input type="radio" id="answer73" name="question7" defaultValue={73} />
                            <label htmlFor="answer3">where</label><br />
                            <input type="radio" id="answer74" name="question7" defaultValue={74} />
                            <label htmlFor="answer4">how</label>
                        </li>
                        <li id="list8">Amali loves her dog. …………. she never plays with it.<br /><br />
                            <input type="radio" id="answer81" name="question8" defaultValue={81} />
                            <label htmlFor="answer1">and</label><br />
                            <input type="radio" id="answer82" name="question8" defaultValue={82} />
                            <label htmlFor="answer2">because</label><br />
                            <input type="radio" id="answer83" name="question8" defaultValue={83} />
                            <label htmlFor="answer3">but</label><br />
                            <input type="radio" id="answer84" name="question8" defaultValue={84} />
                            <label htmlFor="answer4">or</label>
                        </li>
                        <li id="list9">Nimal …………….. have a car. So he goes by bus.<br /><br />
                            <input type="radio" id="answer91" name="question9" defaultValue={91} />
                            <label htmlFor="answer1">not</label><br />
                            <input type="radio" id="answer92" name="question9" defaultValue={92} />
                            <label htmlFor="answer2">do not</label><br />
                            <input type="radio" id="answer93" name="question9" defaultValue={93} />
                            <label htmlFor="answer3">is not</label><br />
                            <input type="radio" id="answer94" name="question9" defaultValue={94} />
                            <label htmlFor="answer4">does not</label>
                        </li>
                        <li id="list10">It is your ………………….. to inform the company before two weeks if you decide to leave.<br /><br />
                            <input type="radio" id="answer101" name="question10" defaultValue={101} />
                            <label htmlFor="answer1">ability</label><br />
                            <input type="radio" id="answer102" name="question10" defaultValue={102} />
                            <label htmlFor="answer2"> preference</label><br />
                            <input type="radio" id="answer103" name="question10" defaultValue={103} />
                            <label htmlFor="answer3">responsibility</label><br />
                            <input type="radio" id="answer104" name="question10" defaultValue={104} />
                            <label htmlFor="answer4"> willingness</label>
                        </li>
                    </ol>
                </div>
                <div className="center">
                    <input type="button" className="submition" form="form1" defaultValue="Submit" onClick={submit} />
                    <p><i className="fas fa-lightbulb" />You must complete all questions before submition</p>
                </div>
                <br />
            </div>

            <Footer />
        </div>
    );
}

export default English_Level3;