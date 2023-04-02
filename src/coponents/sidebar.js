import React from "react";
import Home from "./home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DJ from "./Colleges/DJ";
import Spit from "./Colleges/Spit";
import Tsec from "./Colleges/Tsec";
import First from "./Admissions/First";

import Newts from "./Admissions/Newts";
import Engineering from "./Courses/Engineering";
import Djs from "./Placements/Djs";
import Tsecs from "./Placements/Tsecs";
import Spits from "./Placements/Spits";
import Date from "./Calender/Date";
import List from "./ToDoList/List";
import Dj1 from "./Financial/Dj1";
import Tsec1 from "./Financial/Tsec1";
import Spit1 from "./Financial/Spit1";
import Staff from "./Extra/Staff";
/* eslint-disable */
function Sidebar() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="dj" element={<DJ/>}></Route>
          <Route exact path="tsec" element={<Tsec/>}></Route>
          <Route exact path="spit" element={<Spit/>}></Route>

          <Route exact path="ft" element={<First/>}></Route>
          <Route exact path="news" element={<Newts/>}></Route>
         
          <Route exact path="engg" element={<Engineering/>}></Route>

          <Route exact path="tsecs" element={<Tsecs/>}></Route>
          <Route exact path="djs" element={<Djs/>}></Route>
          <Route exact path="spits" element={<Spits/>}></Route>

          <Route exact path="date" element={<Date/>}></Route>
          
          <Route exact path="list" element={<List/>}></Route>

          <Route exact path="dj1" element={<Dj1/>}></Route>
          <Route exact path="tsec1" element={<Tsec1/>}></Route>
          <Route exact path="spit1" element={<Spit1/>}></Route>
          <Route exact path="staff" element={<Staff/>}></Route>

        </Routes>

        <div className="left side-menu">
          <div className="slimscroll-menu" id="remove-scroll">
            <div id="sidebar-menu">
              <ul className="metismenu" id="side-menu">
                <li className="menu-title">Menu</li>
                <li>
                  <Link to="/" className="waves-effect">
                    <i className="fas fa-home"></i> <span> Home </span>
                  </Link>
                </li>

                <li>
                  <a href="#" className="waves-effect">
                    <i className="fas fa-users"></i>
                    <span>
                      {" "}
                      Colleges
                      <span className="float-right menu-arrow">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/tsec">
                        <i className="fas fa-user-plus" />
                        &ensp; TSEC
                      </Link>
                    </li>
                    <li>
                      <Link to="/dj">
                        <i className="fas fa-user-secret" /> &ensp; DJ
                      </Link>
                    </li>
                    <li>
                      <Link to="/spit">
                        <i className="fas fa-warehouse" /> &ensp; SPIT
                      </Link>
                    </li>
                  </ul>
                </li>
             

                <li>
                <a href="#" className="waves-effect">
                  <i className="fas fa-users"></i>
                  <span>
                    {" "}
                    Admissions
                    <span className="float-right menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>{" "}
                  </span>
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/ft">
                      <i className="fas fa-user-plus" />
                      &ensp; First time New Students
                    </Link>
                  </li>
                  <li>
                    <Link to="/news">
                      <i className="fas fa-user-secret" /> &ensp; Transfer Students
                    </Link>
                  </li>
                 
                </ul>
              </li>

              <li>
              <a href="#" className="waves-effect">
                <i className="fas fa-users"></i>
                <span>
                  {" "}
                  Courses
                  <span className="float-right menu-arrow">
                    <i className="mdi mdi-chevron-right"></i>
                  </span>{" "}
                </span>
              </a>
              <ul className="submenu">
                <li>
                  <Link to="/engg">
                    <i className="fas fa-user-plus" />
                    &ensp; Engineering
                  </Link>
                </li>
              </ul>
            </li>

            <li>
            <a href="#" className="waves-effect">
              <i className="fas fa-users"></i>
              <span>
                {" "}
                Placements
                <span className="float-right menu-arrow">
                  <i className="mdi mdi-chevron-right"></i>
                </span>{" "}
              </span>
            </a>
            <ul className="submenu">
              <li>
                <Link to="/tsecs">
                  <i className="fas fa-user-plus" />
                  &ensp; TSEC
                </Link>
              </li>
              <li>
                <Link to="/djs">
                  <i className="fas fa-user-secret" /> &ensp; DJ
                </Link>
              </li>
              <li>
                <Link to="/spits">
                  <i className="fas fa-warehouse" /> &ensp; SPIT
                </Link>
              </li>
            </ul>
          </li>

          <li>
          <a href="#" className="waves-effect">
            <i className="fas fa-users"></i>
            <span>
              {" "}
              Calender
              <span className="float-right menu-arrow">
                <i className="mdi mdi-chevron-right"></i>
              </span>{" "}
            </span>
          </a>
          <ul className="submenu">
            <li>
              <Link to="/date">
                <i className="fas fa-user-plus" />
                &ensp; Dates
              </Link>
            </li>
          </ul>
        </li>

        <li>
        <a href="#" className="waves-effect">
          <i className="fas fa-users"></i>
          <span>
            {" "}
            To do List
            <span className="float-right menu-arrow">
              <i className="mdi mdi-chevron-right"></i>
            </span>{" "}
          </span>
        </a>
        <ul className="submenu">
          <li>
            <Link to="/list">
              <i className="fas fa-warehouse" /> &ensp; List
            </Link>
          </li>
        </ul>
      </li>

      <li>
      <a href="#" className="waves-effect">
        <i className="fas fa-users"></i>
        <span>
          {" "}
          Financial Aid
          <span className="float-right menu-arrow">
            <i className="mdi mdi-chevron-right"></i>
          </span>{" "}
        </span>
      </a>
      <ul className="submenu">
        <li>
          <Link to="/tsec1">
            <i className="fas fa-user-plus" />
            &ensp; TSEC
          </Link>
        </li>
        <li>
          <Link to="/dj1">
            <i className="fas fa-user-secret" /> &ensp; DJ
          </Link>
        </li>
        <li>
          <Link to="/spit1">
            <i className="fas fa-warehouse" /> &ensp; SPIT
          </Link>
        </li>
      </ul>
    </li>
 
           

             
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Sidebar;
