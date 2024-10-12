import React from "react";
import './skills.css'
import MobileApp from '../../assets/android.png'
import WebApp from '../../assets/development.png'
import Design from '../../assets/design.png'
import Mainanance from '../../assets/maintain.png'

const Skills = () => {
    return (
        <div className="bg-slate-400">
            <section id="skills">
                <span className="skillTitle text-5xl ml-1">
                    What i do 🤔
                </span>

                <p className="skillDesc">
                    I provide these essential services both under contract and as a freelancer. Kindly check them out and let me know how I can help!
                    <span className="w-48 h-[4px] bg-gradient-to-r from-pink-500 to-blue-500 inline-block rounded-lg mr-3 line"></span>
                </p>


                <div className="skillBars">
                    <div className="skillBar">
                        <div className="flex items-center">
                            <h1>01.</h1>
                        </div>
                        <div className="w-64 p-2 max-w-64 m-2">
                            <img src={WebApp} alt="WEB-Development" className="SkillBarImg" />
                        </div>
                        <div className="SkillBarText">
                            <h2>Website Design and Development</h2>
                            <p className="m-1">Creating cutting-edge, high-performing websites and online apps that boost enterprises, businesses, and personal brands to new heights while providing customized solutions that propel achievement is my area of expertise.</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="flex items-center">
                            <h1>02.</h1>
                        </div>
                        <div className="w-64 p-2 max-w-64 m-2 mr-0">
                            <img src={MobileApp} alt="WEB-Development" className="SkillBarImg" />
                        </div>
                        <div className="SkillBarText">
                            <h2>Mobile Application Development</h2>
                            <p className="ml-1">I design and develop cutting-edge, high-performing mobile applications that give flawless user experiences on all platforms and help you grow your company, corporation, or personal brand.</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="flex items-center">
                            <h1>03.</h1>
                        </div>
                        <div className="w-64 p-2 max-w-64 m-2 mr-0">
                            <img src={Design} alt="WEB-Development" className="SkillBarImg" />
                        </div>
                        <div className="SkillBarText">
                            <h2>Graphics Design</h2>
                            <p className="ml-1">Invest in high-quality graphic materials to effectively brand your business or yourself. I create cards, banners, posters, logos, and much more to match your company's or personal style.</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="flex items-center">
                            <h1>04.</h1>
                        </div>
                        <div className="w-64 p-2 max-w-64 m-2 mr-0">
                            <img src={Mainanance} alt="WEB-Development" className="SkillBarImg" />
                        </div>
                        <div className="SkillBarText">
                            <h2>Web and Computer Maintenance</h2>
                            <p className="ml-1">I provide comprehensive installation, configuration, troubleshooting, and maintenance services for computers and their related peripherals and devices, addressing both hardware and software requirements.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills