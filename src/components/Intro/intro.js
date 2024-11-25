import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareUpwork } from '@fortawesome/free-brands-svg-icons';
import bg from '../../assets/AronM.png'
import './intro.css';
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 overflow-hidden" id="intro">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                    <h1 className="text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-primary">
                        Hello!?
                    </h1>
                    <span className="text-4xl ml-2">😀</span>
                </div>
                <p className="text-lg lg:text-xl mb-6">
                    Hi 👋🏾, I am Aaron Maeda, and I'm an experienced backend web developer with a solid foundation in frontend and mobile application development.<br />
                    I can provide complete and well-rounded answers because I also have experience with computer and site maintenance.
                </p>
                <Link to="works" smooth={true} duration={2000}>
                    <button className=" btn flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-primary text-white rounded-full hover:shadow-lg transition duration-300">
                        <BriefcaseIcon className="h-6 w-6 mr-2" />
                        <span>See My Work</span>
                    </button>
                </Link>
                <div className="mt-8">
                    <h1 className="text-lg mb-4">
                        Let's connect
                        <span className="w-10 h-0.5 bg-gradient-to-r from-pink-500 to-primary inline-block ml-2"></span>
                    </h1>
                    <div className="flex space-x-4 mt-4">
                        {[
                            { icon: FaGithub, href: "https://github.com/AaronBnras" },
                            { icon: FaFacebook, href: "https://m.facebook.com/aaron.maeda.7/" },
                            { icon: FaInstagram, href: "https://www.instagram.com/aaronb_nras/profilecard/?igsh=anhnZ3VjdW1ncGd0" },
                            { icon: FaWhatsapp, href: "https://wa.me/qr/6A2PPRR3CTT2L1" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/aaron-maeda-08a507286/" },
                            { icon: faSquareXTwitter, href: "https://x.com/AaronBnras?t=he2_L3Hsrjp_keMAri6N5A&s=09", isFA: true },
                            { icon: faSquareUpwork, href: "https://www.upwork.com/freelancers/~0124c99594e97de01e?mp_source=share", isFA: true }
                        ].map((item, index) => (
                            <a key={index} href={item.href} target="_blank" rel="noreferrer noopener" 
                               className="transition-transform duration-300 hover:scale-125">
                                {item.isFA ? (
                                    <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-blue-400" />
                                ) : (
                                    <item.icon className="h-6 w-6 text-blue-400" />
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end -mt-5 h-screen lg:h-auto lg:mt-0 overflow-hidden">
                <img src={bg} alt="profile" className="w-auto max-w-md lg:max-w-lg lg:h-auto max-h-screen md:object-cover object-contain rounded-lg shadow-lg" />
            </div>
        </section>
    )
}

export default Intro;