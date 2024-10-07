import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src = " " alt=""/>

            <div className="desktopMenu">

            </div>
            <button className="desktopMenubtn">
                <EnvelopeIcon className="h-6 w-6 text-white fill-current" />
                <span>Hire Me</span>
            </button>
        </nav>
    )
}

export default Navbar;