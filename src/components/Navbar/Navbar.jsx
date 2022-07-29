import React from "react"
import "./Navbar.css"
import avatar from "../Icons/avatar.svg"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light navbar-10">
                <p className="navbar-brand time-10 ">11:30</p>
               

                <div className=" d-flex search-10" id="navbarTogglerDemo02">
                
                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search.." />
                    </form>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 float-right">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src={avatar} alt="avatar" /></a>
                        </li>
                    </ul>
                    
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;




