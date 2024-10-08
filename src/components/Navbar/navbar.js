import React from "react";
import logo from "../../assets/AM_logo.png"
import './navbar.css';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex items-baseline">
                <img src={logo} alt="logo" className="logo mr-2" />
                <div className="ml-1 text-4xl bg-clip-text text-transparent text-center lg:text-left bg-gradient-to-r from-pink-500 to-primary">
                    <span className="font-ubuntu">Aaron</span>
                    <span className="font-ubuntu">Maeda</span>
                </div>
            </div>

            <div className="desktopMenu text-xl">
                <Link className="desktopMenuListName">Home</Link>
                <Link className="desktopMenuListName">What i do</Link>
                <Link className="desktopMenuListName">Portfolio</Link>
                <Link className="desktopMenuListName">Contacts</Link>
            </div>
            <button className="desktopMenubtn bg-gradient-to-r from-pink-500 to-primary">
                {/* <BriefcaseIcon className="h-6 w-6 icon" /> */}
                <span className="text-lg">Hire Me</span>
            </button>
        </nav>
    )
}

export default Navbar;