import React from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './style.css';

const English_Level2 = (props) => {
    const submit = () => {
        var total = 0;
        var a = '11'; var b = '24'; var c = '33'; var d = '44'; var e = '53'; var f = '63'; var g = '71'; var h = '81'; var j = '97'; var k = '103';
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
            window.location.href = '/e3';
        }



    }




    return (
        <div className="English_Level2">
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
                            <li><a href='/4'><i className="fas fa-home" /> subjects</a></li>
                        </ul>
                    </div>
                    <div className="text">
                        <h1>You are in the next Level</h1>
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
                    <h1><i className="fas fa-book" />English | Level 02</h1>
                </div>
                <img className="side-image" src="girl2.jpg" alt="Girl" title="A kid working on her laptop" />
                <div className="questions">
                    <ol>
                        <li id="list1">Fill in the blank with an appropriate verb. <br />
              Saman ……… his car.<br /><br />
                            <input type="radio" id="answer11" name="question1" defaultValue={11} />
                            <label htmlFor="answer1">drive</label><br />
                            <input type="radio" id="answer12" name="question1" defaultValue={12} />
                            <label htmlFor="answer2">eat</label><br />
                            <input type="radio" id="answer13" name="question1" defaultValue={13} />
                            <label htmlFor="answer3">drink</label><br />
                            <input type="radio" id="answer14" name="question1" defaultValue={14} />
                            <label htmlFor="answer4">go</label>
                        </li>
                        <div className="discription">
                            <p>Look at the picture below and answer 2,3 questions.</p>
                            <img style={{ marginTop: '40px' }} src="living_room.jpg" alt="living_room" height="200px" width="300px" /><br /><br />
                        </div>
                        <li id="list2">Girl is sitting ……….. to the boy.<br /><br />
                            <input type="radio" id="answer21" name="question2" defaultValue={21} />
                            <label htmlFor="answer1">below</label><br />
                            <input type="radio" id="answer22" name="question2" defaultValue={22} />
                            <label htmlFor="answer2">on</label><br />
                            <input type="radio" id="answer23" name="question2" defaultValue={23} />
                            <label htmlFor="answer3">in front of</label><br />
                            <input type="radio" id="answer24" name="question2" defaultValue={24} />
                            <label htmlFor="answer4">next</label>
                        </li>
                        <li id="list3">Book is....the table.<br /><br />
                            <input type="radio" id="answer31" name="question3" defaultValue={31} />
                            <label htmlFor="answer1">under</label><br />
                            <input type="radio" id="answer32" name="question3" defaultValue={32} />
                            <label htmlFor="answer2">at</label><br />
                            <input type="radio" id="answer33" name="question3" defaultValue={33} />
                            <label htmlFor="answer3">on</label><br />
                            <input type="radio" id="answer34" name="question3" defaultValue={34} />
                            <label htmlFor="answer4">beside</label>
                        </li>
                        <li id="list4">Choose the pair of words that do not contain opposite words of each other.<br /><br />
                            <input type="radio" id="answer41" name="question4" defaultValue={41} />
                            <label htmlFor="answer1">happy-sad</label><br />
                            <input type="radio" id="answer42" name="question4" defaultValue={42} />
                            <label htmlFor="answer2">cheap-expensive</label><br />
                            <input type="radio" id="answer43" name="question4" defaultValue={43} />
                            <label htmlFor="answer3">good-bad</label><br />
                            <input type="radio" id="answer44" name="question4" defaultValue={44} />
                            <label htmlFor="answer4">light-night</label>
                        </li>
                        <li id="list5">Choose the pair of words that do not contain the correct singular and plural words.<br /><br />
                            <input type="radio" id="answer51" name="question5" defaultValue={51} />
                            <label htmlFor="answer1">book-books</label><br />
                            <input type="radio" id="answer52" name="question5" defaultValue={52} />
                            <label htmlFor="answer2">fish-fishes</label><br />
                            <input type="radio" id="answer53" name="question5" defaultValue={53} />
                            <label htmlFor="answer3">story-storys</label><br />
                            <input type="radio" id="answer54" name="question5" defaultValue={54} />
                            <label htmlFor="answer4">knife-knives</label>
                        </li>
                        <li id="list6">Choose the word list that do not contain rhyming words.<br /><br />
                            <input type="radio" id="answer61" name="question6" defaultValue={61} />
                            <label htmlFor="answer1">sun , gun, fun, bun</label><br />
                            <input type="radio" id="answer62" name="question6" defaultValue={62} />
                            <label htmlFor="answer2">cat , bat , rat , hat</label><br />
                            <input type="radio" id="answer63" name="question6" defaultValue={63} />
                            <label htmlFor="answer3">ten , man , pen , hen</label><br />
                            <input type="radio" id="answer64" name="question6" defaultValue={64} />
                            <label htmlFor="answer4">cook , book , look , hook</label>
                        </li>
                        <li id="list7">Choose the word list that do not contain verbs.<br /><br />
                            <input type="radio" id="answer71" name="question7" defaultValue={71} />
                            <label htmlFor="answer1">run , eat , swim , pen</label><br />
                            <input type="radio" id="answer72" name="question7" defaultValue={72} />
                            <label htmlFor="answer2">drink , go , write , dance</label><br />
                            <input type="radio" id="answer73" name="question7" defaultValue={73} />
                            <label htmlFor="answer3">sing , play , do , draw</label><br />
                            <input type="radio" id="answer74" name="question7" defaultValue={74} />
                            <label htmlFor="answer4">sleep , walk , jump , read</label>
                        </li>
                        <li id="list8">Choose the word list that contain only non-living things.<br /><br />
                            <input type="radio" id="answer81" name="question8" defaultValue={81} />
                            <label htmlFor="answer1"> umbrella , book , chair , pen</label><br />
                            <input type="radio" id="answer82" name="question8" defaultValue={82} />
                            <label htmlFor="answer2">table , knife , shoe , boy</label><br />
                            <input type="radio" id="answer83" name="question8" defaultValue={83} />
                            <label htmlFor="answer3">kite , fish , toy , computer</label><br />
                            <input type="radio" id="answer84" name="question8" defaultValue={84} />
                            <label htmlFor="answer4"> pencil , vehicle , teacher , pillow</label>
                        </li>
                        <li id="list9">Select the misspelled word.<br /><br />
                            <input type="radio" id="answer91" name="question9" defaultValue={91} />
                            <label htmlFor="answer1"> Examination</label><br />
                            <input type="radio" id="answer92" name="question9" defaultValue={92} />
                            <label htmlFor="answer2"> Competition</label><br />
                            <input type="radio" id="answer93" name="question9" defaultValue={93} />
                            <label htmlFor="answer3">Entertainment</label><br />
                            <input type="radio" id="answer94" name="question9" defaultValue={97} />
                            <label htmlFor="answer4"> Assinment</label>
                        </li>
                        <li id="list10">Choose the word list that do not contain adjectives.<br /><br />
                            <input type="radio" id="answer101" name="question10" defaultValue={101} />
                            <label htmlFor="answer1">beautiful , long , clean</label><br />
                            <input type="radio" id="answer102" name="question10" defaultValue={102} />
                            <label htmlFor="answer2"> kind , big , rough</label><br />
                            <input type="radio" id="answer103" name="question10" defaultValue={103} />
                            <label htmlFor="answer3">pretty , smile , small</label><br />
                            <input type="radio" id="answer104" name="question10" defaultValue={104} />
                            <label htmlFor="answer4"> narrow , lucky , thick</label><br />
                        </li>
                    </ol>
                </div>
                <br />
                <br />
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

export default English_Level2;