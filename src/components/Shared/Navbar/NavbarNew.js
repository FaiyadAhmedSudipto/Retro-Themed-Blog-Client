import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../App";
import "./NavbarNew.css"
import firebase from "firebase/app";
import "firebase/auth";

const NavbarNew = () => {
    const [click, setClick] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        console.log("sign me out");
        firebase
            .auth()
            .signOut()
            .then(() => {
                setLoggedInUser({});
            })
    }

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Retro Themed Blog
                        <i className="fas fa-code"></i>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/home" activeClassName="active" className="nav-links" >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/customer" activeClassName="active" className="nav-links" >
                                My Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/admin" activeClassName="active" className="nav-links" >
                                Admin
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {loggedInUser.email ? (
                                <NavLink
                                    exact to="/home" activeClassName="active" className="nav-links" onClick={signOut}>
                                    {" "}
                                    LogOut{" "}
                                </NavLink>
                            ) : (
                                <NavLink
                                    exact to="/login" activeClassName="active" className="nav-links" >
                                    LogIn
                                </NavLink>
                            )}
                        </li>
                        <li class="nav-item">
                            <NavLink exact to="/home" activeClassName="active" className="nav-links" >
                                {loggedInUser.email}
                            </NavLink>
                        </li>
                    </ul>
                    {/* <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div> */}
                </div>
            </nav>
        </>
    );
}

export default NavbarNew;