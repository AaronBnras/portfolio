import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/Amlogo.png"
import './navbar.css';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div><img src = {logo} alt="logo" className="logo"/><span>Aaron</span><span>Maeda</span></div>
            

            <div className="desktopMenu">
                <Link className="desktopMenuListName">Home</Link>
                <Link className="desktopMenuListName">What i do</Link>
                <Link className="desktopMenuListName">Portfolio</Link>
                <Link className="desktopMenuListName">Contacts</Link>
            </div>
            <button className="desktopMenubtn">
                <EnvelopeIcon className="h-6 w-6 text-white fill-current icon" />
                <span>Hire Me</span>
            </button>
        </nav>
    )
}

export default Navbar;