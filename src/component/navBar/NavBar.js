import React, { useState } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import './NavBar.css'
// Images
import logo from '../../Images/logo.png';

// Icons
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {

    const navigate = useNavigate();
    const [toggler, setToggler] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [dropOne, setDropOne] = useState(false);
    const [dropTwo, setDropTwo] = useState(false);
    const ToggleHandler = () => {
        if (toggler) {
            setToggler(false);
        } else {
            setToggler(true);
        }
    }

    const DropHandler = () => {
        if(dropOne) {
            setDropOne(false);
        } else {
            setDropOne(true);
        }
    }

    const DropHandlerTwo = () => {
        if(dropTwo) {
            setDropTwo(false);
        } else {
            setDropTwo(true);
        }
    }

    const scroller = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const eventHandler = () => {
        if(dropOne === true || dropTwo === true) {
            setDropOne(false);
            setDropTwo(false);
        }
    }
    window.addEventListener('scroll', scroller);
    return (
        <>
            <nav className={navbar ? "navbar_css navActive" : "navbar_css"} onClick={eventHandler}>
                <div className="container">
                    <div id="navbar">
                        <div className="res_menu">
                            <div className="res_logo">
                                <img onClick={() => navigate('/')} src={logo} className="main-logo" width="100%" height="35px" alt="Logo" style={{ cursor: "pointer" }} />
                            </div>
                            <div id="mobile" onClick={ToggleHandler}>
                                {toggler ? <FaTimes className='toggle-icons' /> : <FaBars className='toggle-icons' />}
                            </div>
                        </div>
                        <div>
                            <ul id="nav_list" className={toggler ? "nav_list active-navbar" : "nav_list"}>
                                <li id="mobile" className="imp-nav d-flex align-items-center justify-content-center" onClick={ToggleHandler}>
                                    <FaTimes className='toggle-icons' />
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); }}>
                                    <NavLink exact to='/' style={{ textDecoration: "none" }} className="nav_lists" activeClassName="active">Home</NavLink>
                                </li>
                                <li style={{ listStyle: 'none' }} className="position-relative">
                                    <div className="d-flex align-items-center down_hover" onClick={DropHandler}>
                                        <div activeClassName="active" to="/about" className="nav_lists" style={{ textDecoration: "none" }}>Courses</div>
                                        <BiChevronDown className="down_icon" />
                                    </div>
                                    <ul className={dropOne ? "dropDown_one" : "hide"} onClick={() => { setToggler(false); }}>
                                        <li onClick={() => setDropOne(false)}>
                                            <Link className="menu_link" to="/">Pre-Recorded Online</Link>
                                        </li>
                                        <li className="lines" onClick={() => setDropOne(false)}>
                                            <Link className="menu_link" to="/">Offline</Link>
                                        </li>
                                        <li onClick={() => setDropOne(false)}>
                                            <Link className="menu_link" to="/">Live Events and Programs</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); }}>
                                    <NavLink activeClassName="active" to="/about" className="nav_lists" style={{ textDecoration: "none" }} >About Us</NavLink>
                                </li>
                                <li style={{ listStyle: 'none' }} className="position-relative">
                                    <div className="d-flex align-items-center down_hover" onClick={DropHandlerTwo}>
                                        <div activeClassName="active" to="/about" className="nav_lists" style={{ textDecoration: "none" }}>Gallery</div>
                                        <BiChevronDown className="down_icon" />
                                    </div>
                                    <ul className={dropTwo ? "dropDown_one" : "hide"} onClick={() => { setToggler(false); }}>
                                        <li onClick={() => setDropTwo(false)}>
                                            <Link className="menu_link" to="/">Students</Link>
                                        </li>
                                        <li className="lines" onClick={() => setDropTwo(false)}>
                                            <Link className="menu_link" to="/">Practical Training</Link>
                                        </li>
                                        <li onClick={() => setDropTwo(false)}>
                                            <Link className="menu_link" to="/">Our classroom</Link>
                                        </li>
                                        <li className="lines" onClick={() => setDropTwo(false)}>
                                            <Link className="menu_link" to="/">Our Office</Link>
                                        </li>
                                        <li onClick={() => setDropTwo(false)}>
                                            <Link className="menu_link" to="/">Our Project</Link>
                                        </li>
                                        <li className="lines" onClick={() => setDropTwo(false)}>
                                            <Link className="menu_link" to="/">Placed students</Link>
                                        </li>
                                        <li onClick={() => setDropTwo(false)}>
                                            <Link className="menu_link" to="/">Certificate track</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); }}>
                                    <NavLink exact to='/services' style={{ textDecoration: "none" }} className="nav_lists" activeClassName="active">Terms & Policy</NavLink>
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); }}>
                                    <NavLink exact to='/contact' style={{ textDecoration: "none" }} className="nav_lists" activeClassName="active">Contact Us</NavLink>
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); }}>
                                    <NavLink exact to='/faqs' style={{ textDecoration: "none" }} className="nav_lists" activeClassName="active">Blogs</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar