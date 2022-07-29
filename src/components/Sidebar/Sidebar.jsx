import React from "react";
// import { NavLink } frzom "react-router-dom";
import "./Sidebar.css";

import pms from "../Icons/pms.svg";
import dbimg from "../Icons/dashboard.svg";
import tp from "../Icons/totalParking.svg";
import revenue from "../Icons/revenue.svg";
import site from "../Icons/site.svg";
import review from "../Icons/review.svg";
import area from "../Icons/area.svg";
import adv from "../Icons/adv.svg";
import labour from "../Icons/labour.svg";
import mall from "../Icons/mall.svg";
import siteReg from "../Icons/siteReg.svg";
import user from "../Icons/user.svg";
import logout from "../Icons/logout.svg";
import vector from "../Icons/vector.svg";
import logout1 from "../Images/logout1.png";

import $ from "jquery";

// import Dashboard from '../Dashboard/Dashboard'
// import TotalParking from '../TotalParking/TotalParking'



function Sidebar() {
  return (
    <div>
      <div>
        <div id="but" className="d-lg-none d-xl-none">
          <button id="sidebarCollapse" type="button" className="navbar-toggler toggle-10" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-ellipsis-v" style={{ fontSize: "30px", color: "rgb(146 139 139 / 51%)" }} data-bs-target="#sidebar"></i>
          </button>
        </div>
        <div className="sidebar collapse" id="sidebar">
          <div>
            <header>
              <img className="pms" src={pms} alt="logo" />
              <span className="decoration">Park Me </span>
              <span style={{ color: "#01B050" }}> Safe</span>
            </header>
          </div>
          <div className="clearfix">
            <a href="dashboard">
              <img className="links" src={dbimg} alt="dashboard" /> Dashboard
            </a>
            <a href="totalparking">
              <img className="links" src={tp} alt="parking" />
              Total parking
            </a>
            <a href="totalrevenue">
              <img className="links" src={revenue} alt="revenue" /> Total
              Revenue
            </a>
            <a href="totalsites">
              <img className="links" src={site} alt="site" /> Total sites
            </a>
            <a href="customerReview">
              <img className="links" src={review} alt="review" /> Customer
              review
            </a>
            <a href="siteregisteration">
              <img className="links" src={siteReg} alt="Site registration" />{" "}
              Site registration
            </a>


            <div className="dropdown">
              <span>
                <img className="links" src={labour} alt="Labour company" />{" "}
                Labour company{" "}
                <img className="arrow" src={vector} alt="vector" />
              </span>
              <div className="dropdown-content">
                <a href="labourCompanyList">List</a>
                <a href="labourCompanyRegistration">Labour company Registration</a>
                <a href="labourCompanyGuardList">Guard List</a>
                <a href="paymentClosingHistory">Payment Closing History</a>
              </div>
            </div>

            <div className="dropdown">
              <span>
                <img className="links" src={area} alt="Area manager" /> Area
                manager <img className="arrow" src={vector} alt="vector" />
              </span>
              <div className="dropdown-content">
                <a href="areaManagerList"> List</a>
                <a href="areaManagerRegistration"> Area Manager Registration</a>
              </div>
            </div>

            <div className="dropdown">
              <span>
                <img className="links" src={mall} alt="Area manager" /> Mall
                Owner <img className="arrow" src={vector} alt="vector" />
              </span>
              <div className="dropdown-content">
                <a href="mallOwnerLists"> List</a>
                <a href="mallOwnerRegistration">Mall Owner Registration</a>
              </div>
            </div>

            <a href="userManagement">
              <img className="links" src={user} alt="User management" /> User
              management
            </a>
            <a href="advertise">
              <img className="links" src={adv} alt="Advertise" /> Advertise
            </a>
          </div>
          <div className="logout">
            <img
              src={logout1}
              alt="curve"
              style={{ width: "100%", height: "75px" }}
            />
            <a href="#logout" className="centered">
              <img className="links1" src={logout} alt="logout" /> Log out
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Sidebar;
