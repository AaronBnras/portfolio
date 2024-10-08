import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import './intro.css';
import bg from '../../assets/AronB.png'
import { Link } from "react-scroll";
const Intro = () => {
    return (
        <section className="" id="intro">
            <div className="introContent">
                <span className=" ml-1 text-6xl">Hello!? 😀</span>
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
                </div>
            </div>

            <div>
                <img src={bg} alt="profile" className="bg" />
            </div>
        </section>
    )
}

export default Intro