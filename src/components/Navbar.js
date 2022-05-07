import React from 'react'
import './navbar.css';
import logo from '../images/logo.png'
import {useNavigate} from 'react-router-dom';

const Navbar = (username) => {

    console.log(username);
    const navigate=useNavigate();

    return (
        <>
            <nav className="navbar navbar-icon-top navbar-expand-lg fixed-top ">
                <img src={logo} className="logo"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/mainpage">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-sos active ">
                            <button 
                                className="nav-sos" 
                                onClick={()=>{
                                    navigate("/sos");
                                }}
                            >
                                S.O.S
                            </button>
                        </ul>
                        <ul className="user-greet">
                            Hi, {localStorage.getItem('Name')}
                        </ul>
                    </div>
            </nav>
        </>
    )
}

export default Navbar