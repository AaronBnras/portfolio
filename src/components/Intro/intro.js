import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import './intro.css';
import bg from '../../assets/AronB.png'
import { Link } from "react-scroll";
const Intro = () => {
    return (
        <section className="" id="intro">
            <div className="introContent">
                <span className="hello ml-1 text-6xl">Hello!? 😀</span>
                <p className="intropara ml-1 text-xl">Hi 👋🏾, I am Aaron Maeda,
                    and I'm an experienced backend web developer with a solid foundation in frontend and mobile application development.<br />
                    I can provide complete and well-rounded answers because I also have experience with computer and site maintenance.
                </p>
                <Link>
                    <button className="btn bg-gradient-to-r from-pink-500 to-primary">
                        <BriefcaseIcon className="h-6 w-6 icon" />
                        <span>See My work</span>
                    </button>
                </Link>
                <div className="connect">
                    <h2>Lets connect.
                        <span class="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-primary inline-block ml-2"></span>
                    </h2>
                    <div className="social">
                        <a href="https://github.com/AaronBnras" target="_blank" rel="noreferrer noopener" className="transition-transform duration-300 transform hover:scale-150">
                            <FaGithub className="h-6 w-6 text-blue-300" />
                        </a>
                        <a href="https://m.facebook.com/aaron.maeda.7/" target="_blank" rel="noreferrer noopener" className="transition-transform duration-300 transform hover:scale-150">
                            <FaFacebook className="h-6 w-6 text-blue-300" />
                        </a>
                        <a href="https://www.instagram.com/aaronb_nras/profilecard/?igsh=anhnZ3VjdW1ncGd0" rel="noreferrer noopener" target="_blank" className="transition-transform duration-300 transform hover:scale-150">
                            <FaInstagram className="h-6 w-6 text-blue-300 " />
                        </a>
                        <a href="https://wa.me/qr/6A2PPRR3CTT2L1" target="_blank" rel="noreferrer noopener" className="transition-transform duration-300 transform hover:scale-150">
                            <FaWhatsapp className="h-6 w-6 text-blue-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/aaron-maeda-08a507286/" rel="noreferrer noopener" target="_blank" className="transition-transform duration-300 transform hover:scale-150">
                            <FaLinkedin className="h-6 w-6 text-blue-300" />
                        </a>
                        <a href="https://x.com/AaronBnras?t=he2_L3Hsrjp_keMAri6N5A&s=09" rel="noreferrer noopener" target="_blank" className="transition-transform duration-300 transform hover:scale-150">
                            <FaTwitter className="h-6 w-6 text-blue-300" />
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <img src={bg} alt="profile" className="bg" />
            </div>
        </section>
    )
}

export default Intro