import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './style.css';

const Generel_Level1 = (props) => {
  const submit = () => {
    //var a, b, c, d, e, f, g, h, k, j;
    var total = 0;
    var a = '12'; var b = '21'; var c = '34'; var d = '42'; var e = '51'; var f = '62'; var g = '74'; var h = '83'; var j = '92'; var k = '101';
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
      window.location.href = '/g2';

    }



  }
  return (
    <div className="Generel_Level1">
      <div>
        <div className="page" style={{ backgroundImage: 'url("img7.jpg")' }}>
          <div id="slidshow">
            <div id="navigation-bar">
              <ul>
                <i className="fas fa-bars" />
                <div class="dropdown" >
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
              <h1>You are in the Level 01</h1>
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
            <h1><i className="fas fa-book" />General Knowledge | Level 01</h1>
          </div>
          <img className="side-image" src="girl2.jpg" alt="Girl" title="A kid working on her laptop" />
          <div className="questions">
            <ol>
              <li id="list1">How many days in a week?<br />
                <input type="radio" id="answer11" name="question1" defaultValue={11} />
                <label htmlFor="answer1">5</label><br />
                <input type="radio" id="answer12" name="question1" defaultValue={12} />
                <label htmlFor="answer2">7</label><br />
                <input type="radio" id="answer13" name="question1" defaultValue={13} />
                <label htmlFor="answer3">9</label><br />
                <input type="radio" id="answer14" name="question1" defaultValue={14} />
                <label htmlFor="answer4">6</label><br /><br /></li>
              <li id="list2">What is the longest river in Sri Lanka?<br />
                <input type="radio" id="answer21" name="question2" defaultValue={21} />
                <label htmlFor="answer1">River Mahaweli </label><br />
                <input type="radio" id="answer22" name="question2" defaultValue={22} />
                <label htmlFor="answer2">River Kalani</label><br />
                <input type="radio" id="answer23" name="question2" defaultValue={23} />
                <label htmlFor="answer3">River Walawe</label><br />
                <input type="radio" id="answer24" name="question2" defaultValue={24} />
                <label htmlFor="answer4">River Kalu </label><br /><br /></li>
              <li id="list3">How many colors are there in a rainbow?<br />
                <input type="radio" id="answer31" name="question3" defaultValue={31} />
                <label htmlFor="answer1">3</label><br />
                <input type="radio" id="answer32" name="question3" defaultValue={32} />
                <label htmlFor="answer2">5</label><br />
                <input type="radio" id="answer33" name="question3" defaultValue={33} />
                <label htmlFor="answer3">4</label><br />
                <input type="radio" id="answer34" name="question3" defaultValue={34} />
                <label htmlFor="answer4">7</label><br /><br /></li>
              <li id="list4">How many days are there in a leap year?<br />
                <input type="radio" id="answer41" name="question4" defaultValue={41} />
                <label htmlFor="answer1">365</label><br />
                <input type="radio" id="answer42" name="question4" defaultValue={42} />
                <label htmlFor="answer2">366</label><br />
                <input type="radio" id="answer43" name="question4" defaultValue={43} />
                <label htmlFor="answer3">367</label><br />
                <input type="radio" id="answer44" name="question4" defaultValue={44} />
                <label htmlFor="answer4">369</label><br /><br /></li>
              <li id="list5">What is the main religion of Sri Lanka?<br />
                <input type="radio" id="answer51" name="question5" defaultValue={51} />
                <label htmlFor="answer1">Buddhism </label><br />
                <input type="radio" id="answer52" name="question5" defaultValue={52} />
                <label htmlFor="answer2">Christian </label><br />
                <input type="radio" id="answer53" name="question5" defaultValue={53} />
                <label htmlFor="answer3">Hinduism </label><br />
                <input type="radio" id="answer54" name="question5" defaultValue={54} />
                <label htmlFor="answer4">Islam </label><br /><br /></li>
              <li id="list6">Select the correct statement regarding this picture<br />
                <img src="National-Bird-of-Sri-Lanka.png" alt="national bird" height="200px" width="300px" /><br /><br />
                <input type="radio" id="answer61" name="question6" defaultValue={61} />
                <label htmlFor="answer1">This is national bird of India</label><br />
                <input type="radio" id="answer62" name="question6" defaultValue={62} />
                <label htmlFor="answer2">This is national bird of Sri Lanka</label><br />
                <input type="radio" id="answer63" name="question6" defaultValue={63} />
                <label htmlFor="answer3">This is national bird of Australia</label><br />
                <input type="radio" id="answer64" name="question6" defaultValue={64} />
                <label htmlFor="answer4">This is national bird of America</label><br /><br /></li>
              <li id="list7">How many years are there in a century?<br />
                <input type="radio" id="answer71" name="question7" defaultValue={71} />
                <label htmlFor="answer1">50</label><br />
                <input type="radio" id="answer72" name="question7" defaultValue={72} />
                <label htmlFor="answer2">200</label><br />
                <input type="radio" id="answer73" name="question7" defaultValue={73} />
                <label htmlFor="answer3">25</label><br />
                <input type="radio" id="answer74" name="question7" defaultValue={74} />
                <label htmlFor="answer4">100</label><br /><br /></li>
              <li id="list8">What animal appears on the national flag of the Sri Lanka?<br />
                <input type="radio" id="answer81" name="question8" defaultValue={81} />
                <label htmlFor="answer1">Panther</label><br />
                <input type="radio" id="answer82" name="question8" defaultValue={82} />
                <label htmlFor="answer2">Tiger</label><br />
                <input type="radio" id="answer83" name="question8" defaultValue={83} />
                <label htmlFor="answer3">Lion</label><br />
                <input type="radio" id="answer84" name="question8" defaultValue={84} />
                <label htmlFor="answer4">elephant</label><br /><br /></li>
              <li id="list9">Who is the largest animal in the world?<br />
                <input type="radio" id="answer91" name="question9" defaultValue={91} />
                <label htmlFor="answer1">Elephant </label><br />
                <input type="radio" id="answer92" name="question9" defaultValue={92} />
                <label htmlFor="answer2">Blue whale </label><br />
                <input type="radio" id="answer93" name="question9" defaultValue={93} />
                <label htmlFor="answer3">Giraffe</label><br />
                <input type="radio" id="answer94" name="question9" defaultValue={94} />
                <label htmlFor="answer4">Camel </label><br /><br /></li>
              <li id="list10">Which animal is known as the <b>"ship of the desert"</b>?<br />
                <input type="radio" id="answer101" name="question10" defaultValue={101} />
                <label htmlFor="answer1" id="An101">Camel </label><br />
                <input type="radio" id="answer102" name="question10" defaultValue={102} />
                <label htmlFor="answer2">Horse </label><br />
                <input type="radio" id="answer103" name="question10" defaultValue={103} />
                <label htmlFor="answer3">Cow</label><br />
                <input type="radio" id="answer104" name="question10" defaultValue={104} />
                <label htmlFor="answer4">Zebra </label><br /><br /></li>
            </ol>
          </div>
          <br />
          <br /><div className="center"><input type="button" className="submition" form="form1" defaultValue="Submit" onClick={submit} />
            <p><i className="fas fa-lightbulb" />You must complete all questions before submition</p>
          </div>
          <br />
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Generel_Level1;
