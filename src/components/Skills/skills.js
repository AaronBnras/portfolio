import React from "react";
import './skills.css'
import MobileApp from '../../assets/android.png'
import WebApp from '../../assets/development.png'
import Design from '../../assets/design.png'
import Mainanance from '../../assets/maintain.png'

const Skills = () => {
    return (
        <div className="bg-slate-400 overflow-hidden">
            <section id="skills" className="overflow-hidden w-full max-w-7xl mx-auto flex flex-col justify-center text-center">
                <span className="skillTitle text-5xl ml-1 pt-20 mb-6">
                    What I Do 🤔
                </span>

                <p className="skillDesc text-lg font-medium max-w-lg mx-auto">
                    I provide these essential services both under contract and as a freelancer. Kindly check them out and let me know how I can help!
                    <span className="block w-48 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg mx-auto my-4"></span>
                </p>

                <div className="skillBars w-full max-w-5xl mx-auto flex flex-col space-y-8 lg:space-y-8 p-4">
                    <div className="skillBar mb-1 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4 p-4 lg:p-8 bg-gray-700 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-lg">
                        <div className="flex-shrink-0 text-white text-5xl lg:text-6xl">01.</div>
                        <div className="w-64 p-4">
                            <img src={WebApp} alt="WEB-Development" className="w-full h-auto object-cover" />
                        </div>
                        <div className="SkillBarText mt-4 lg:mt-0">
                            <h2 className="text-2xl lg:text-3xl text-white m-2">Website Design and Development</h2>
                            <p className="text-sm lg:text-base text-gray-300 mt-2 m-2">Creating cutting-edge, high-performing websites and online apps that boost enterprises, businesses, and personal brands to new heights while providing customized solutions that propel achievement is my area of expertise.</p>
                        </div>
                    </div>

                    <div className="skillBar mb-8 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4 p-4 lg:p-8 bg-gray-700 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-lg">
                        <div className="flex-shrink-0 text-white text-4xl lg:text-5xl">02.</div>
                        <div className="w-64 p-4">
                            <img src={MobileApp} alt="Mobile Development" className="w-full h-auto object-cover" />
                        </div>
                        <div className="SkillBarText mt-4 lg:mt-0">
                            <h2 className="text-2xl lg:text-3xl text-white m-2">Mobile Application Development</h2>
                            <p className="text-sm lg:text-base text-gray-300 mt-2 m-2">I design and develop cutting-edge, high-performing mobile applications that give flawless user experiences on all platforms and help you grow your company, corporation, or personal brand.</p>
                        </div>
                    </div>

                    <div className="skillBar mb-8 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4 p-4 lg:p-8 bg-gray-700 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-lg">
                        <div className="flex-shrink-0 text-white text-4xl lg:text-5xl">03.</div>
                        <div className="w-64 p-4">
                            <img src={Design} alt="Graphics Design" className="w-full h-auto object-cover" />
                        </div>
                        <div className="SkillBarText mt-4 lg:mt-0">
                            <h2 className="text-2xl lg:text-3xl text-white m-2">Graphics Design</h2>
                            <p className="text-sm lg:text-base text-gray-300 mt-2 m-2">Invest in high-quality graphic materials to effectively brand your business or yourself. I create cards, banners, posters, logos, and much more to match your company's or personal style.</p>
                        </div>
                    </div>

                    <div className="skillBar mb-8 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4 p-4 lg:p-8 bg-gray-700 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-lg">
                        <div className="flex-shrink-0 text-white text-4xl lg:text-5xl">04.</div>
                        <div className="w-64 p-4">
                            <img src={Mainanance} alt="Web and Computer Maintenance" className="w-full h-auto object-cover" />
                        </div>
                        <div className="SkillBarText mt-4 lg:mt-0">
                            <h2 className="text-2xl lg:text-3xl text-white m-2">Web and Computer Maintenance</h2>
                            <p className="text-sm lg:text-base text-gray-300 mt-2 m-2">I provide comprehensive installation, configuration, troubleshooting, and maintenance services for computers and their related peripherals and devices, addressing both hardware and software requirements.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills