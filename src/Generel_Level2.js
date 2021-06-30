import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './style.css';


const Generel_Level2 = (props) => {
    const submit = () => {
        var total = 0;
        var a = '11'; var b = '23'; var c = '31'; var d = '41'; var e = '54'; var f = '64'; var g = '71'; var h = '82'; var j = '93'; var k = '101';
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
            window.location.href = '/g3';
        }



    }




    return (
        <div className="Generel_Level2">
            <div>
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
                            <h1>You are in the Level 02</h1>
                            <p>What is the importance of general knowledge? It stretches way beyond knowing the answers to trivia questions and quizzes. Being up-to-date on current affairs and basic knowledge in a variety of subjects and can make you a more sociable and successful person. From students to professionals to business owners to homemakers to retirees, this applies to virtually everyone in all walks of life. Here are 12 reasons why having a solid general knowledge background is an important facet of your development that will help you succeed at home, at work, online, and in your social life.</p>
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
                        <h1><i className="fas fa-book" />General Knowledge | Level 02</h1>
                    </div>
                    <img className="side-image" src="girl2.jpg" alt="Girl" title="A kid working on her laptop" />
                    <div className="questions">
                        <ol>
                            <li id="list1">Who was the first man walk on the moon?<br />
                                <input type="radio" id="answer11" name="question1" defaultValue={11} />
                                <label htmlFor="answer1">Neil Armstrong</label><br />
                                <input type="radio" id="answer12" name="question1" defaultValue={12} />
                                <label htmlFor="answer2">William Anders</label><br />
                                <input type="radio" id="answer13" name="question1" defaultValue={13} />
                                <label htmlFor="answer3">Eugene Cernan</label><br />
                                <input type="radio" id="answer14" name="question1" defaultValue={14} />
                                <label htmlFor="answer4">Michael Collins</label><br /><br /></li>
                            <li id="list2">What are the tallest mountains in Sri Lanka and the world respectively?<br />
                                <input type="radio" id="answer21" name="question2" defaultValue={21} />
                                <label htmlFor="answer1">Mount Kirigalpotta &amp; Mount Cameroon</label><br />
                                <input type="radio" id="answer22" name="question2" defaultValue={22} />
                                <label htmlFor="answer2">Mount Namunukula &amp; Mount Everest</label><br />
                                <input type="radio" id="answer23" name="question2" defaultValue={23} />
                                <label htmlFor="answer3">Mount Pidurutalagala &amp; Mount Everest</label><br />
                                <input type="radio" id="answer24" name="question2" defaultValue={24} />
                                <label htmlFor="answer4">Mount Pidurutalagala &amp; Mount Elbert</label><br /><br /></li>
                            <li id="list3">Which is the largest country in the world?<br />
                                <input type="radio" id="answer31" name="question3" defaultValue={31} />
                                <label htmlFor="answer1">India</label><br />
                                <input type="radio" id="answer32" name="question3" defaultValue={32} />
                                <label htmlFor="answer2">China</label><br />
                                <input type="radio" id="answer33" name="question3" defaultValue={33} />
                                <label htmlFor="answer3">Russia</label><br />
                                <input type="radio" id="answer34" name="question3" defaultValue={34} />
                                <label htmlFor="answer4">Canada</label><br /><br /></li>
                            <li id="list4">Which ocean surrounds Sri Lanka?<br />
                                <input type="radio" id="answer41" name="question4" defaultValue={41} />
                                <label htmlFor="answer1">Indian ocean</label><br />
                                <input type="radio" id="answer42" name="question4" defaultValue={42} />
                                <label htmlFor="answer2">Pacific ocean</label><br />
                                <input type="radio" id="answer43" name="question4" defaultValue={43} />
                                <label htmlFor="answer3">Arctic ocean</label><br />
                                <input type="radio" id="answer44" name="question4" defaultValue={44} />
                                <label htmlFor="answer4">Atlantic ocean</label><br /><br /></li>
                            <li id="list5">What is the narrow stretch of water between Sri Lanka and India?<br />
                                <input type="radio" id="answer51" name="question5" defaultValue={51} />
                                <label htmlFor="answer1">Malacca</label><br />
                                <input type="radio" id="answer52" name="question5" defaultValue={52} />
                                <label htmlFor="answer2">Florida</label><br />
                                <input type="radio" id="answer53" name="question5" defaultValue={53} />
                                <label htmlFor="answer3">Mesina</label><br />
                                <input type="radio" id="answer54" name="question5" defaultValue={54} />
                                <label htmlFor="answer4">Palk</label><br /><br /></li>
                            <li id="list6">Identify this person and select the correct statement<br />
                                <img src="charles babage.jpg" alt="charles babage" height="200px" width="200px" /><br /><br />
                                <input type="radio" id="answer61" name="question6" defaultValue={61} />
                                <label htmlFor="answer1">This is inventor of telephone</label><br />
                                <input type="radio" id="answer62" name="question6" defaultValue={62} />
                                <label htmlFor="answer2">This is iventor of television</label><br />
                                <input type="radio" id="answer63" name="question6" defaultValue={63} />
                                <label htmlFor="answer3">This is inventor of radio</label><br />
                                <input type="radio" id="answer64" name="question6" defaultValue={64} />
                                <label htmlFor="answer4">This is inventor of computer</label><br /><br /></li>
                            <li id="list7">When did Sri Lanka receive independence?<br />
                                <input type="radio" id="answer71" name="question7" defaultValue={71} />
                                <label htmlFor="answer1">4th February 1948</label><br />
                                <input type="radio" id="answer72" name="question7" defaultValue={72} />
                                <label htmlFor="answer2">4th March 1948</label><br />
                                <input type="radio" id="answer73" name="question7" defaultValue={73} />
                                <label htmlFor="answer3">14th February 1948</label><br />
                                <input type="radio" id="answer74" name="question7" defaultValue={74} />
                                <label htmlFor="answer4">6th March 1972</label><br /><br /></li>
                            <li id="list8">Which day is observed as <b>World Environment Day</b>?<br />
                                <input type="radio" id="answer81" name="question8" defaultValue={81} />
                                <label htmlFor="answer1">July 5</label><br />
                                <input type="radio" id="answer82" name="question8" defaultValue={82} />
                                <label htmlFor="answer2">June 5</label><br />
                                <input type="radio" id="answer83" name="question8" defaultValue={83} />
                                <label htmlFor="answer3">January 15</label><br />
                                <input type="radio" id="answer84" name="question8" defaultValue={84} />
                                <label htmlFor="answer4">August 15</label><br /><br /></li>
                            <li id="list9">Who is known as Father of Telephone?<br />
                                <input type="radio" id="answer91" name="question9" defaultValue={91} />
                                <label htmlFor="answer1">Charles Babbage</label><br />
                                <input type="radio" id="answer92" name="question9" defaultValue={92} />
                                <label htmlFor="answer2">Thomas Alwa Edison</label><br />
                                <input type="radio" id="answer93" name="question9" defaultValue={93} />
                                <label htmlFor="answer3">Alexander Grahambell</label><br />
                                <input type="radio" id="answer94" name="question9" defaultValue={97} />
                                <label htmlFor="answer4">John Logie Baird</label><br /><br /></li>
                            <li id="list10">The author of famous book Harry Potter is ....<br />
                                <input type="radio" id="answer101" name="question10" defaultValue={101} />
                                <label htmlFor="answer1">J.K. Rowling</label><br />
                                <input type="radio" id="answer102" name="question10" defaultValue={102} />
                                <label htmlFor="answer2">Jane Austen</label><br />
                                <input type="radio" id="answer103" name="question10" defaultValue={103} />
                                <label htmlFor="answer3">John Williams</label><br />
                                <input type="radio" id="answer104" name="question10" defaultValue={104} />
                                <label htmlFor="answer4">Shannon Hale</label><br /></li>
                        </ol>
                    </div>
                    <br />
                    <br />
                    <div className="center"><input type="button" className="submition" form="form1" defaultValue="Submit" onClick={submit} />
                        <p><i className="fas fa-lightbulb" />You must complete all questions before submition</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Generel_Level2;
