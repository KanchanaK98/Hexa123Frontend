import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './style.css';

const Generel_Level3 = (props) => {
    const submit = () => {
        //var a,b,c,d,e,f,g,h,i,j;
        var total = 0;
        var a = '12'; var b = '21'; var c = '31'; var d = '41'; var e = '54'; var f = '61'; var g = '74'; var h = '81'; var j = '91'; var k = '101';
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
        <div className="Generel_Level3">
            <div className="page" style={{ backgroundImage: 'url("img1.jpg")' }}>
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
                        <h1>You are in the Level 03</h1>
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
                    <h1><i className="fas fa-book" />General Knowledge | Level 03</h1>
                </div>
                <img className="side-image" src="girl2.jpg" alt="Girl" title="A kid working on her laptop" />
                <div className="questions">
                    <ol>
                        <li id="list1">What is the name of <b>first executive president</b> of Sri Lanka?<br />
                            <input type="radio" id="answer11" name="question1" defaultValue={11} />
                            <label htmlFor="answer1">William Gopallawa</label><br />
                            <input type="radio" id="answer12" name="question1" defaultValue={12} />
                            <label htmlFor="answer2">J.R. Jayawardane</label><br />
                            <input type="radio" id="answer13" name="question1" defaultValue={13} />
                            <label htmlFor="answer3">Sirimawo Bandaranayake</label><br />
                            <input type="radio" id="answer14" name="question1" defaultValue={14} />
                            <label htmlFor="answer4">D.S. Senanayaka</label><br /><br /></li>
                        <li id="list2">Look at painting of given below. Who is artist of that painting?<br />
                            <img src="monalisa.jpg" alt="monalisa" height="250px" width="300px" /><br /><br />
                            <input type="radio" id="answer21" name="question2" defaultValue={21} />
                            <label htmlFor="answer1">Leonardo da Vinci</label><br />
                            <input type="radio" id="answer22" name="question2" defaultValue={22} />
                            <label htmlFor="answer2">Pablo Picasso</label><br />
                            <input type="radio" id="answer23" name="question2" defaultValue={23} />
                            <label htmlFor="answer3">Michelangelo</label><br />
                            <input type="radio" id="answer24" name="question2" defaultValue={24} />
                            <label htmlFor="answer4">Edvard Munch</label><br /><br /></li>
                        <li id="list3">Who is the first woman to go to space?<br />
                            <input type="radio" id="answer31" name="question3" defaultValue={31} />
                            <label htmlFor="answer1">Valentina Tereshkova</label><br />
                            <input type="radio" id="answer32" name="question3" defaultValue={32} />
                            <label htmlFor="answer2">Margaret Mead</label><br />
                            <input type="radio" id="answer33" name="question3" defaultValue={33} />
                            <label htmlFor="answer3">Marie Curie</label><br />
                            <input type="radio" id="answer34" name="question3" defaultValue={34} />
                            <label htmlFor="answer4">Katherine Johnson</label><br /><br /></li>
                        <li id="list4">“There are 11 players in a cricket team” Is this statement True or False?<br />
                            <input type="radio" id="answer41" name="question4" defaultValue={41} />
                            <label htmlFor="answer1">True</label><br />
                            <input type="radio" id="answer42" name="question4" defaultValue={42} />
                            <label htmlFor="answer2">False</label><br /><br /></li>
                        <li id="list5">What is name of this statue?<br />
                            <img src="awkana buddha statue.jpg" alt="awkana buddha statue" height="250px" width="300px" /><br /><br />
                            <input type="radio" id="answer51" name="question5" defaultValue={51} />
                            <label htmlFor="answer1">Samadhi  buddha statue</label><br />
                            <input type="radio" id="answer52" name="question5" defaultValue={52} />
                            <label htmlFor="answer2">Maligawila buddha statue</label><br />
                            <input type="radio" id="answer53" name="question5" defaultValue={53} />
                            <label htmlFor="answer3">Galvihara buddha statue</label><br />
                            <input type="radio" id="answer54" name="question5" defaultValue={54} />
                            <label htmlFor="answer4">Awkana buddha statue</label><br /><br /></li>
                        <li id="list6">Who is the writer of sri lankan national anthem?<br />
                            <input type="radio" id="answer61" name="question6" defaultValue={61} />
                            <label htmlFor="answer1">Mr. Ananda Samarakoon</label><br />
                            <input type="radio" id="answer62" name="question6" defaultValue={62} />
                            <label htmlFor="answer2">Mr.Karunaratne Abeysekera</label><br />
                            <input type="radio" id="answer63" name="question6" defaultValue={63} />
                            <label htmlFor="answer3">Mr. Arisen Ahubudu</label><br />
                            <input type="radio" id="answer64" name="question6" defaultValue={64} />
                            <label htmlFor="answer4">Mr. Mahagama Sekara</label><br /><br /></li>
                        <li id="list7">Which is the most sensitive organ in our body?<br />
                            <input type="radio" id="answer71" name="question7" defaultValue={71} />
                            <label htmlFor="answer1">Eye</label><br />
                            <input type="radio" id="answer72" name="question7" defaultValue={72} />
                            <label htmlFor="answer2">Ear</label><br />
                            <input type="radio" id="answer73" name="question7" defaultValue={73} />
                            <label htmlFor="answer3">Toungh</label><br />
                            <input type="radio" id="answer74" name="question7" defaultValue={74} />
                            <label htmlFor="answer4">Skin</label><br /><br /></li>
                        <li id="list8">Which one is not amongst the Seven Wonders of the World?<br />
                            <input type="radio" id="answer81" name="question8" defaultValue={81} />
                            <label htmlFor="answer1">Mecca Madina</label><br />
                            <input type="radio" id="answer82" name="question8" defaultValue={82} />
                            <label htmlFor="answer2">Statue of Liberty</label><br />
                            <input type="radio" id="answer83" name="question8" defaultValue={83} />
                            <label htmlFor="answer3">Taj Mahal</label><br />
                            <input type="radio" id="answer84" name="question8" defaultValue={84} />
                            <label htmlFor="answer4">The Great Wall of China</label><br /><br /></li>
                        <li id="list9">Which gas is most abundant in the earth’s atmosphere?<br />
                            <input type="radio" id="answer91" name="question9" defaultValue={91} />
                            <label htmlFor="answer1">Nitrogen</label><br />
                            <input type="radio" id="answer92" name="question9" defaultValue={92} />
                            <label htmlFor="answer2">Oxygen</label><br />
                            <input type="radio" id="answer93" name="question9" defaultValue={93} />
                            <label htmlFor="answer3">Hydregen</label><br />
                            <input type="radio" id="answer94" name="question9" defaultValue={94} />
                            <label htmlFor="answer4">Carbon dioxide</label><br /><br /></li>
                        <li id="list10">What is the most popular sport throughout the world?<br />
                            <input type="radio" id="answer101" name="question10" defaultValue={101} />
                            <label htmlFor="answer1">Soccer</label><br />
                            <input type="radio" id="answer102" name="question10" defaultValue={102} />
                            <label htmlFor="answer2">Cricket</label><br />
                            <input type="radio" id="answer103" name="question10" defaultValue={103} />
                            <label htmlFor="answer3">Volleyball</label><br />
                            <input type="radio" id="answer104" name="question10" defaultValue={104} />
                            <label htmlFor="answer4">Football</label><br /><br /></li>
                    </ol>
                </div>
                <div className="center"><input type="button" className="submition" form="form1" defaultValue="Submit" onClick={submit} />
                    <p><i className="fas fa-lightbulb" />You must complete all questions before submition</p>
                </div>
            </div>
            <Footer />


        </div >
    );
}

export default Generel_Level3;
