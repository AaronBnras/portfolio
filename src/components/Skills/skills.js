import React from "react";
import './skills.css'
import MobileApp from '../../assets/android.png'
import WebApp from '../../assets/development.png'
import Design from '../../assets/design.png'
import Mainanance from '../../assets/maintain.png'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle text-5xl ml-1">
                What i do 🤔
            </span>

            <p className="skillDesc">
                I provide these essential services both under contract and as a freelancer. Kindly check them out and let me know how I can help!
                <span className="w-48 h-[4px] bg-gradient-to-r from-pink-500 to-blue-500 inline-block rounded-lg line"></span>
            </p>
            

            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebApp} alt="WEB-Development" className="SkillBarImg" />
                    <div className="SkillBarText">
                        <h1>01.</h1>
                        <h2>Website Design and Development</h2>
                        <p>Creating cutting-edge, high-performing websites and online apps that boost enterprises, businesses, and personal brands to new heights while providing customized solutions that propel achievement is my area of expertise.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MobileApp} alt="WEB-Development" className="SkillBarImg" />
                    <div className="SkillBarText">
                        <h1>02.</h1>
                        <h2>Mobile Application Development</h2>
                        <p>I design and develop cutting-edge, high-performing mobile applications that give flawless user experiences on all platforms and help you grow your company, corporation, or personal brand.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Design} alt="WEB-Development" className="SkillBarImg" />
                    <div className="SkillBarText">
                        <h1>03.</h1>
                        <h2>Graphics Design</h2>
                        <p>Invest in high-quality graphic materials to effectively brand your business or yourself. I create cards, banners, posters, logos, and much more to match your company's or personal style.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Mainanance} alt="WEB-Development" className="SkillBarImg" />
                    <div className="SkillBarText">
                        <h1>04.</h1>
                        <h2>Web and Computer Maintenance</h2>
                        <p>I provide comprehensive installation, configuration, troubleshooting, and maintenance services for computers and their related peripherals and devices, addressing both hardware and software requirements.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills