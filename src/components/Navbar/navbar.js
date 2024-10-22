import React, { useState } from "react";
import logo from "../../assets/AM_logo.png";
import './navbar.css';
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar bg-white sticky mt-1 top-0 z-50">
            <div className="nav container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo (hidden on small screens) and Name */}
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="logo mr-2" /> {/* Only the logo is hidden on smaller screens */}
                    <div className="ml-1 text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-primary hidden lg:block">
                        <span className="font-ubuntu">Aaron</span>
                        <span className="font-ubuntu">Maeda</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex text-xl items-center">
                    <Link to="intro" smooth={true} duration={2000} className="desktopMenuListName">Home</Link>
                    <Link to="skills" smooth={true} duration={2000} className="desktopMenuListName">What I Do</Link>
                    <Link to="works" smooth={true} duration={2000} className="desktopMenuListName">Portfolio</Link>
                    <Link to="contacts" smooth={true} duration={2000} className="desktopMenuListName">Contacts</Link>
                    <Link to="contacts" smooth={true} duration={2000}>
                        <button className="desktopMenubtn bg-gradient-to-r from-pink-500 to-primary ml-4">
                            <span className="text-lg">Hire Me</span>
                        </button>
                    </Link>
                </div>

                {/* Mobile Hire Me Button (visible on small screens only) */}
                <div className="lg:hidden">
                    <Link to="contacts" smooth={true} duration={3000}>
                        <button className="desktopMenubtn bg-gradient-to-r from-pink-500 to-primary">
                            <span className="text-lg">Hire Me</span>
                        </button>
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile Menu */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none ml-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu with transition */}
            <div className={`transition-all duration-1000 ease-in-out transform ${isOpen ? "max-h-screen opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"} lg:hidden overflow-hidden`}>
                <div className="bg-white flex flex-col items-center text-xl py-4 space-y-4">
                    <Link to="intro" smooth={true} duration={3000} className="py-2" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="skills" smooth={true} duration={3000} className="py-2" onClick={() => setIsOpen(false)}>What I Do</Link>
                    <Link to="works" smooth={true} duration={3000} className="py-2" onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link to="contacts" smooth={true} duration={3000} className="py-2" onClick={() => setIsOpen(false)}>Contacts</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
