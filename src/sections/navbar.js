import React from 'react';
import { Link } from 'react-router-dom';

// logo
import Logo from "../images/logo.png";

export default function Navbar() {
    return (
        <>
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a href="/" className="navbar-brand">
                        <img src={Logo} alt="" width="35" height="32" className="d-inline-block align-text-top" style={{ marginRight: "5px" }} />
                        Biblio8
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="#about">About</a></li> */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href={0} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Join Us
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/signupsa" >As Student Ambassador</Link></li>
                                    <li><Link className="dropdown-item" to="/signupb8r" >As Biblio8 Researcher</Link></li>
                                    {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                            {/* <li className="nav-item"><Link className="nav-link" to="/seminarregistration">Sign Up</Link></li> */}
                            <li className="nav-item"><Link className="nav-link" to="/login">LogIn</Link></li>
                        </ul>
                        {/* <button className='btn btn-outline-primary btn-sm nav-btn' >Sign Up For Seminar</button> */}
                    </div>
                </div>
            </nav>
        </>
    );
}
