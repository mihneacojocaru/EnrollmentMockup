import Data from "../data.js";

export default class ViewHome{
    constructor () {
        this.root = document.getElementById('root');
        this.pageBuilder('Enrolment&#x2122;');
        this.homePage();
    }

    pageBuilder = (item) => {
        this.root.innerHTML = '';
        this.root.innerHTML += this.nav(item);
        this.root.innerHTML += this.main();
    }

    eventHandler = (e) => {
            e.preventDefault();
            let obj = e.target;
            if(obj.id == 'courses'){
                this.pageBuilder('Courses');
                this.courses();
            }else if(obj.id == 'students'){
                this.pageBuilder('Students');
                this.students();
            }else if(obj.id == 'course1'){
                this.courseDetails();
            }else if(obj.id == 'enrolments'){
                this.pageBuilder('Enrolments');
                this.enrolments();
            }else if(obj.id == 'goBack'){
                this.pageBuilder('Enrolment&#x2122;');
                this.homePage();
            }else if(obj.id == 'goBack2'){
                this.pageBuilder('Courses');
                this.courses();
            }else if(obj.id == 'enroll'){
                this.enrollToCourse();
            }else if(obj.id == 'cancel'){
                this.courseDetails();
            }else if(obj.id == 'cancel2'){
                this.pageBuilder('Enrolment&#x2122;');
                this.homePage();
            }
    }

    nav = (item) => {
        return `<nav>
                    <h1 id="toMain" class="homeLink">${item}</h1>
                    <div id="signIn" class="elements">
                        <span id="signIn">Sign In</span>
                    </div>
                </nav>`;
    }

    main = () => {
        return `<main></main>`;
    }

    homePage = () => {
        this.returnHome();
        let main = document.querySelector('main');
        main.innerHTML = '';
        main.innerHTML = `<div class="container">
                                <div id='courses' class="card--">
                                    <h2 id='courses'>Courses</h2>
                                </div>
                                <div id='students' class="card--">
                                    <h2 id='students'>Students</h2>
                                </div>
                            </div>`;
        main.addEventListener('click',this.eventHandler);
    }

    returnHome = () =>{
        let navBtn = document.querySelector('nav');
        navBtn.addEventListener('click',this.navFunctions);
    }

    navFunctions = (e) => {
        let obj = e.target;
        if(obj.id == 'toMain'){
            this.pageBuilder('Enrolment&#x2122;');
            this.homePage();
        }else if(obj.id == 'signIn'){
            this.pageBuilder('Enrolment&#x2122;');
            this.signIn();
        }

    }

    courses = () => {
        this.returnHome();
        let main = document.querySelector('main');
        main.innerHTML = '';
        main.innerHTML = `<div class="fcnBtn">
                                <div id="goBack" class="navBtn">
                                    <h2 id="goBack">Return to Main</h2>
                                </div>
                            </div>
                            <div class="container-courses">
                                <div class="cards-container">
                                    <div id="course1" class="card">
                                        <span id="course1">Sport Psychology</span>
                                        <h2 id="course1">Movement and Health</h2></br>
                                        <span id="course1">Course Id: TRWF</span>
                                    </div>
                                    <div id="course1" class="card">
                                        <span id="course1">Applied Psychology</span>
                                        <h2 id="course1">Performance Psychology</h2></br>
                                        <span id="course1">Course Id: CLNSE</span>
                                    </div>
                                    <div id="course1" class="card">
                                        <span id="course1">Applied Psychology</span>
                                        <h2 id="course1">Exercise Psychology</h2></br>
                                        <span id="course1">Course Id: BOKF</span>
                                    </div>
                                    <div id="course1" class="card">
                                        <span id="course1">Sport Management</span>
                                        <h2 id="course1">Sport marketing</h2></br>
                                        <span id="course1">Course Id: AINV</span>
                                    </div>
                                    <div id="course1" class="card">
                                        <span id="course1">Sport Management</span>
                                        <h2 id="course1">Sport fan behavior</h2></br>
                                        <span id="course1">Course Id: PDBC</span>
                                    </div>
                                    <div id="course1" class="card">
                                        <span id="course1">Business administration</span>
                                        <h2 id="course1">Facility management</h2></br>
                                        <span id="course1">Course Id: NADL</span>
                                    </div>
                                </div>
                            </div>`;
        main.addEventListener('click',this.eventHandler);
    }

    courseDetails = () => {
        this.returnHome();
        let main = document.querySelector('main');
        main.innerHTML = '';
        main.innerHTML = `<div class="fcnBtn">
                                <div id="enroll" class="navBtn">
                                    <h2 id="enroll">Enroll to this course</h2>
                                </div>
                                <div id="goBack2" class="navBtn">
                                    <h2 id="goBack2">Return to Courses</h2>
                                </div>
                            </div>
                            <div class="erollOption"></div>
                            <div id="courseBox" class="course-box">
                                <div class="info1">
                                    <h3>Course</h3>
                                    <hr/>
                                    <h2><strong>Professorship for Movement, Performance, Health</strong></h2>
                                    <h5>by John Smith</h5>
                                    <br/>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis molestias similique tenetur quia placeat aut officiis qui hic consequatur corporis?</p>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus nesciunt nulla a fugit ab, sed illo architecto necessitatibus unde consectetur nihil rerum officiis. Excepturi nihil repellat est ducimus illum quos quaerat nobis veniam quis? Alias provident doloremque ipsam quae minus iure voluptatum, porro facere nulla sunt at amet natus?</p>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptate deserunt neque? Dolorem corporis nemo inventore doloribus minima mollitia dolor at beatae. Eveniet, culpa perspiciatis esse cum error quod consequuntur itaque delectus aperiam necessitatibus quo obcaecati eos minus consequatur ipsa beatae non. Dolor fugiat vel reprehenderit neque dicta distinctio ab commodi cupiditate quidem atque, voluptate possimus amet delectus aspernatur repellat a quod voluptatibus alias similique consectetur, rem et. Nulla similique inventore quibusdam quos possimus exercitationem commodi, accusamus aliquid, dolorum aperiam labore ut reiciendis itaque, quo incidunt! Blanditiis quisquam eaque earum. Ipsa quia explicabo ex. Maxime nisi delectus iure, sequi tenetur reprehenderit nihil, totam quos, laboriosam accusamus molestias! Architecto, tenetur debitis quam cupiditate, vel at officiis, quas mollitia dolores dignissimos minus!</p>
                                    <br/>
                                </div>
                                <div class="info2">
                                    <h3>Course Durration</h3>
                                    <hr/>
                                    <br/>
                                    <ul>
                                        <li>3 Semesters</li>
                                    </ul>
                                    <br/>
                                    <h3>Prerequisites</h3>
                                    <hr/>
                                    <br/>
                                    <ul>
                                        <li>functional relationships of human movement, performance, and health</li>
                                        <li>neurophysiological effects of physical activity on the development and retention of performance over the life span</li>
                                        <li>development of assistive technologies for people with disabilities</li>
                                    </ul>
                                </div>
                            </div>`;
        main.addEventListener('click',this.eventHandler);
    }

    students = () => {
        this.returnHome();
        let main = document.querySelector('main');
        main.innerHTML = '';
        main.innerHTML = `
                            <div class="fcnBtn">
                                <div id="enrolments" class="navBtn">
                                    <h2 id="enrolments">Enrolments</h2>
                                </div>
                                <div id="goBack" class="navBtn">
                                    <h2 id="goBack">Return to Main</h2>
                                </div>
                            </div>
                            <div class="addSection"></div>
                            <div class="generic-table">
                                <h2>Student List</h2>
                                <table>
                                    <thead>
                                        <th>Id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Date of Birth</th>
                                    </thead>
                                    <tbody id="studentListTable">
                                        <tr>
                                            <td>123456</td>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>21/05/2001</td>
                                        </tr>
                                        <tr>
                                            <td>123654</td>
                                            <td>Alois</td>
                                            <td>Veldens</td>
                                            <td>25/02/2001</td>
                                        </tr>
                                        <tr>
                                            <td>132546</td>
                                            <td>Marlene</td>
                                            <td>Zavattiero</td>
                                            <td>28/10/1995</td>
                                        </tr>
                                        <tr>
                                            <td>113426</td>
                                            <td>Celia</td>
                                            <td>Volett</td>
                                            <td>12/09/1998</td>
                                        </tr>
                                        <tr>
                                            <td>156423</td>
                                            <td>Bjoern</td>
                                            <td>Walby</td>
                                            <td>11/05/1996</td>
                                        </tr>
                                        <tr>
                                            <td>113451</td>
                                            <td>Pelagie</td>
                                            <td>Brucker</td>
                                            <td>07/07/2000</td>
                                        </tr>
                                        <tr>
                                            <td>142126</td>
                                            <td>Loic</td>
                                            <td>Morl</td>
                                            <td>12/05/1996</td>
                                        </tr>
                                        <tr>
                                            <td>165432</td>
                                            <td>Mailis</td>
                                            <td>Gillio</td>
                                            <td>03/11/1999</td>
                                        </tr>
                                        <tr>
                                            <td>133142</td>
                                            <td>Tim</td>
                                            <td>Murray</td>
                                            <td>12/12/1995</td>
                                        </tr>
                                        <tr>
                                            <td>162534</td>
                                            <td>Loise</td>
                                            <td>Coffin</td>
                                            <td>12/09/2000</td>
                                        </tr>
                                        <tr>
                                            <td>153621</td>
                                            <td>Selene</td>
                                            <td>Diminis</td>
                                            <td>21/05/2001</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>`;
        main.addEventListener('click', this.eventHandler);
    }

    enrolments = () => {
        this.returnHome();
        let main = document.querySelector('main');
        main.innerHTML = '';
        main.innerHTML = `
                            <div class="fcnBtn">
                                <div id="students" class="navBtn">
                                    <h2 id="students">Return to Students</h2>
                                </div>
                            </div>
                            <div class="addSection"></div>
                            <div class="generic-table">
                                <h2>Course Enrolments</h2>
                                <table>
                                    <thead>
                                        <th>Student Id</th>
                                        <th>Course Id</th>
                                        <th>Created at</th>
                                    </thead>
                                    <tbody id="enrolmentBody">
                                        <tr>
                                            <td>123456</td>
                                            <td>TRWF</td>
                                            <td>2021-11-09 18:07:02</td>
                                        </tr>
                                        <tr>
                                            <td>123456</td>
                                            <td>CLNSE</td>
                                            <td>2021-01-16 05:58:50</td>
                                        </tr>
                                        <tr>
                                            <td>123456</td>
                                            <td>BOKFL</td>
                                            <td>2021-06-29 10:39:43</td>
                                        </tr>
                                        <tr>
                                            <td>123456</td>
                                            <td>AINV</td>
                                            <td>2021-05-10 18:19:23</td>
                                        </tr>
                                        <tr>
                                            <td>123456</td>
                                            <td>PDBC</td>
                                            <td>2021-07-17 17:13:45</td>
                                        </tr>
                                        <tr>
                                            <td>123456</td>
                                            <td>NADL</td>
                                            <td>2021-03-03 17:53:46</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                                `;
        main.addEventListener('click', this.eventHandler);
    }

    enrollToCourse = () => {
        let content = `
        <div class="addSectionStyle">
            <h2>Please fill in your information</h2>
            <form action="#">
                <label for="fName">Frist Name</label>
                <input type="text" name="fName">
                <label for="lName">Last Name</label>
                <input type="text" name="lName">
                <label for="dOB">Date of Birth</label>
                <input type="text" name="dOB">
            </form>
            <div class="buttons">
                <button id="cancel">Enroll</button>
                <button id="cancel">Cancel</button>
            </div>
        </div>
        `;
        let space = document.querySelector('.erollOption');
        space.innerHTML = content;
    }

    signIn = () => {
        let content = `
        <div class="signIn">
            <div class="addSectionStyle">
                <h2>Sign In</h2>
                <form action="#">
                    <label for="fName">Username</label>
                    <input type="text" name="fName">
                    <label for="lName">Password</label>
                    <input type="password" name="lName">
                </form>
                <div class="buttons">
                    <button id="cancel2">Sign In</button>
                    <button id="cancel2">Cancel</button>
                </div>
            </div>
        </div>
        `;
        let main = document.querySelector('main');
        main.innerHTML = '';
        main.innerHTML = content;
        main.addEventListener('click',this.eventHandler);
    }
}