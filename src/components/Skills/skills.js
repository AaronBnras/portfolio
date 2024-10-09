import React from "react";
import './skills.css'
import MobileApp from '../../assets/android.png'
import WebApp from '../../assets/development.png'
import Design from '../../assets/design.png'
import Mainanance from '../../assets/maintain.png'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTittle">
                What i do 🤔
            </span>
            <span className="skillDesc">
                Here are the primary services I offer on both freelance and contract basis. Kindly have a look and let me know how I may serve you!
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebApp} alt="WEB-Development" className="SkillBarImg" />
                    <div className="SkillBarText">
                        <h1>01.</h1>
                        <h2>Website Design and Development</h2>
                        <p>I design and develop stunning modern websites and web apps to elevate your personal brand, business or corporate to a next level</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills