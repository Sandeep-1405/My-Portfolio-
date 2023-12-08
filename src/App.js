import Sandeep from './Sandeep.jpg'
import ppp from './ppp.jpeg'
import sandeepMaraboinaResume from './sandeepMaraboinaResume.pdf'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  return (
    <div className="bg">
      <nav className="navbar  bg-warning fixed-top">
        <div className="d-none d-md-block">
          <a href="#Home">
            <img
              src="https://i.pinimg.com/originals/0d/41/e5/0d41e57a2ed1c376e0310eb8cc73d2a5.png"
              alt="logo"
              className="img"
            />
          </a>
        </div>
        <div>
          <ul className="navlist">
            <li className="listitem mt-4">
              <a href="#Home" className="navele">
                Home
              </a>
            </li>

            <li className="m-3 listitem mt-4">
              <a href="#About" className="navele">
                About
              </a>
            </li>

            <li className="m-3 listitem mt-4">
              <a href="#Skills" className="navele">
                Skills
              </a>
            </li>

            <li className="m-3 listitem mt-4">
              <a href="#Projects" className="navele">
                Projects
              </a>
            </li>

            <li className="m-3 listitem mt-4 mr-3">
              <a href="#Contact" className="navele">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row shadow Home pb-3" id="Home">
          <div className="col-12 text-center ">
            <img src={Sandeep} alt="img" className="homeimg" />

            <h1 className="name">SANDEEP MARABOINA</h1>
            <h4 className="tag">I am a passionate MERN STACK DEVELOPER</h4>
            <p className=" para">
              Front End Developer with a proven track record in the MERN stack,
              dedicated to crafting responsive, user-friendly web applications
              that enhance the digital experience. A creative problem solver
              with a passion for clean, elegant design and a commitment to
              delivering innovative solutions. Seeking a challenging role to
              leverage skills and contribute to cuttingedge projects that push
              the boundaries of web development.
            </p>
            <div>
              <a href="#Projects" className="btn btn-primary m-3 hover-zoom">
                Projects
              </a>
              <a href="#Contact" className="btn btn-warning m-3">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="row shadow About" id="About">
          <div className="col-12">
            <div>
              <h1 className="habout mt-3">ABOUT ME</h1>
              <hr className="hr" />
              <p className="spara">
                VERSATILE FULL-STACK DEVELOPER WITH A CREATIVE EDGE.
              </p>
            </div>
          </div>
          <div className="col-12 col-xl-6 text-center">
            <img src={ppp} alt="img" className="aboutimg" />
          </div>
          <div className="col-12 col-xl-6 ">
            <div className="">
              <h1 className="spara">
                I am <span className="aboutname">Sandeep Maraboina</span>
              </h1>
              <p className="abouttag">
                Full stack MERN developer with a passion for building web
                applications.
              </p>
              <p className="spara mt-3">
                I am a versatile Mern-stack developer located in India. With
                proficiency in both development and design, I craft sleek,
                contemporary websites, web services, and online stores for
                clients. My expertise spans the entire development journey —
                from conceptualizing user experiences to implementing robust
                backend functionality.
              </p>
              <p className="spara mt-3">
                With a mastery of Mern-stack technologies including React and
                Node, I engineer intuitive interfaces that harmonize with robust
                back-end systems. Delve into my portfolio to witness a
                collection of exceptional designs and comprehensive development
                endeavors that underscore my proficiency in both front-end and
                back-end development.
              </p>
              <div className="text-center">
                <a
                  href={sandeepMaraboinaResume}
                  target="blank"
                  download="Sandeep_Resume"
                >
                  <button
                    type="button"
                    className="btn btn-warning m-5 h-50 aboutbtn"
                  >
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row shadow Skills" id="Skills">
          <div className="col-12">
            <div>
              <h1 className="hskills mt-3">MY SKILLS</h1>
              <hr className="hr" />

              <p className="spara">
                EMPOWERING DIGITAL LANDSCAPES WITH PROFOUND FULL-STACK SKILLS.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png"
              alt="HTML"
              className="skillimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
              alt="css"
              className="skillimg cssimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png"
              alt="Bootstrap"
              className="skillimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png"
              alt="Javascript"
              className="skillimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png"
              alt="Python"
              className="skillimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png"
              alt="React"
              className="skillimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
              alt="Node"
              className="skillimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://miro.medium.com/v2/resize:fit:680/1*7G9vb_q5MA8_C_8HtwMfqw.png"
              alt="Express"
              className="skillimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/2560px-SQLite370.svg.png"
              alt="Sql"
              className="skillimg"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-4">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.pnghttps://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png"
              alt="Git"
              className="skillimg"
            />
          </div>
        </div>
        <div className="row shadow pb-4" id="Projects">
          <div className="col-12">
            <h1 className="habout mt-3">PROJECTS</h1>
            <hr className="hr" />
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="projectcard shadow">
              <h1 className="pt-2">Nxt Trendz</h1>
              <div className="">
                <img
                  src="https://s3.amazonaws.com/mobileappdaily/mad/uploads/img_best_shopping_apps.jpg"
                  alt="nxt trendz"
                  className="projectimg"
                />
                <p className="projectdes">
                  Online Shoping Application Like Amazon
                </p>
                <p className="m-2">
                  <span className="font-bold">Technologies used:</span> React
                  JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/Sandeep-1405/Nxt_Trendz-Online-Shopping-Application"
                    target="blank"
                    className="btn btn-outline-warning m-3"
                  >
                    View Code
                  </a>

                  <a
                    href="https://sanxtrendz.ccbp.tech/"
                    target="blank"
                    className="btn btn-warning m-3 btns"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="projectcard shadow">
              <h1 className="pt-2">Tasty Kitchen</h1>
              <div className="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5ijHrTyV26471W7TbHzpFzTVWaDUs2MKuA&usqp=CAU"
                  alt="nxt trendz"
                  className="projectimg"
                />
                <p className="projectdes">
                  Online Food Application Like Swiggy/Zomato
                </p>
                <p className="m-2">
                  <span className="font-bold">Technologies used:</span> React
                  JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://github.com/Sandeep-1405/TastyKitchenApp"
                    target="blank"
                    className="btn btn-outline-warning m-3"
                  >
                    View Code
                  </a>

                  <a
                    href="https://sandeepskitchen.ccbp.tech/"
                    target="blank"
                    className="btn btn-warning m-3 btns"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="projectcard shadow">
              <h1 className="pt-2">WikiPedia </h1>
              <div className="projectimgitem">
                <img
                  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/wikipedia-three_four.png?VersionId=.CixlV4B8OPKmXs5uBJrchAcVCLhv_zK"
                  alt="nxt trendz"
                  className="projectimg border"
                />
                <p className="projectdes">Online Search web Application</p>
                <p className="m-3">
                  <span className="font-bold">Technologies used:</span> HTML,
                  CSS, JS, Bootstrap Local Storage
                </p>
                <div className="d-flex justify-content-around m-3 pb-3">
                  <a
                    href="https://github.com/Sandeep-1405/Wikipedia-Search-Application.git"
                    target="blank"
                    className="btn btn-outline-warning"
                  >
                    View Code
                  </a>
                  <a
                    href="https://sandeepwiki14.ccbp.tech/"
                    target="blank"
                    className="btn btn-warning btns"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="projectcard shadow">
              <h1 className="pt-2">To-Do List</h1>
              <div className="projectimgitem">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/004/865/947/small/business-checklist-or-todo-list-for-businessman-to-achieve-financial-target-free-vector.jpg"
                  alt="nxt trendz"
                  className="projectimg"
                />
                <p className="projectdes">
                  A comprehensive todo management tool
                </p>
                <p className="m-2">
                  <span className="font-bold">Technologies used:</span> HTML,
                  CSS, JS, Bootstrap
                </p>
                <div className="d-flex justify-content-around m-3 pb-3">
                  <a
                    href="https://github.com/Sandeep-1405/To-Do-List-App"
                    target="blank"
                    className="btn btn-outline-warning"
                  >
                    View Code
                  </a>
                  <a
                    href="https://sandeeptodo14.ccbp.tech/"
                    target="blank"
                    className="btn btn-warning btns"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-warning text-center" id="Contact">
          <div className="col-12 mt-3">
            <a href="tel:9542794735">
              <h1 className="email"> +91 9542794735</h1>
            </a>

            <a href="mailto:sandeepmaraboina14s@gmail.com">
              <h1 className="mt-3 email">sandeepmaraboina14s@gmail.com </h1>
            </a>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <a
              href="https://www.youtube.com/channel/UCfCItRk59a0dqFPCP6niIFg"
              target="blank"
            >
              <img
                src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
                alt="youtube"
                className="contactimg linkedin"
              />
            </a>

            <a href="https://www.instagram.com/i_m_sandeep_14/" target="blank">
              <img
                src="https://freepngimg.com/save/69662-instagram-media-brand-social-logo-photography/1200x627"
                alt="Instagram"
                className="contactimg linkedin"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sandeepmaraboina/"
              target="blank"
            >
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
                alt="Linkedin"
                className="contactimg p-3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
