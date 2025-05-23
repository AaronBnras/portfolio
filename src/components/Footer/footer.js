import React from 'react';
import './footer.css';
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareUpwork } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <footer className="h-auto bg-blue-950 text-white py-6 md:py-12" >
            <div className="text-lg text-center md:text-center">
                <h4 className="text-gray-300 banco-font">Follow Me On</h4>
            </div>
            <div className="flex justify-center space-x-4 mt-4 flex-wrap">
                {[
                    { icon: FaGithub, href: "https://github.com/AaronBnras" },
                    { icon: FaFacebook, href: "https://m.facebook.com/aaron.maeda.7/" },
                    { icon: FaInstagram, href: "https://www.instagram.com/aaronb_nras/profilecard/?igsh=anhnZ3VjdW1ncGd0" },
                    { icon: FaWhatsapp, href: "https://wa.me/qr/6A2PPRR3CTT2L1" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/aaron-maeda-08a507286/" },
                    { icon: faSquareXTwitter, href: "https://x.com/AaronBnras?t=he2_L3Hsrjp_keMAri6N5A&s=09", isFA: true },
                    { icon: faSquareUpwork, href: "https://www.upwork.com/freelancers/~0124c99594e97de01e?mp_source=share", isFA: true }
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="transition-transform duration-300 hover:scale-125 text-blue-400"
                    >
                        {item.isFA ? (
                            <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
                        ) : (
                            <item.icon className="h-6 w-6" />
                        )}
                    </a>
                ))}
            </div>
            <div className="mt-4 flex justify-center md:justify-center">
                <div className="flex">
                    <p className="mr-1">© 2024 Made by</p>
                    <div className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-primary">
                        <span className="banco-font">Aaron</span>
                        <span className="banco-font">Maeda</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;