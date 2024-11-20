import React from "react";
import './skills.css';
import MobileApp from '../../assets/android.png';
import WebApp from '../../assets/development.png';
import Design from '../../assets/design.png';
import Maintenance from '../../assets/maintain.png';

const Skills = () => {
    return (
        <div className="overflow-hidden bg-blue-900 text-white" >
            <section id="skills" className="overflow-hidden w-full max-w-8xl mx-auto flex flex-col justify-center text-center">
                <span className="skillTitle text-5xl ml-1 pt-20 mb-6">
                    What I Do 🤔
                </span>

                <p className="skillDesc text-base sm:text-lg md:text-xl font-medium max-w-lg mx-auto px-4 sm:px-0">
                    I provide these essential services both under contract and as a freelancer. Kindly check them out and let me know how I can help!
                    <span className="block w-32 sm:w-48 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg mx-auto my-4"></span>
                </p>

                <div className="skillBars w-full max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 p-2">
                    <div className="skillBar flex flex-col p-10 bg-blue-950 w-full rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-xl">
                        <div className="items-center justify-center mx-auto">
                            <img src={WebApp} alt="WEB-Development" className="w-64 h-auto my-4 object-cover" />
                        </div>

                        <div className="flex-shrink-0 text-white text-5xl font-bold mb-4 text-left">01.</div>
                        <h2 className="text-lg text-white">Website Design and Development</h2>
                        <p className="text-sm lg:text-base text-gray-300 mt-4">Creating cutting-edge, high-performing websites and online apps that boost enterprises, businesses, and personal brands to new heights while providing customized solutions that propel achievement is my area of expertise.</p>
                    </div>

                    <div className="skillBar flex flex-col p-10 bg-blue-950 w-full rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-xl">
                        <div className="items-center justify-center mx-auto">
                            <img src={MobileApp} alt="Mobile Development" className="w-64 h-64 my-4 object-fill" />
                        </div>
                        <div className="flex-shrink-0 text-white text-5xl font-bold mb-4 text-left">02.</div>
                        <h2 className="text-lg text-white">Mobile Application Development</h2>
                        <p className="text-sm lg:text-base text-gray-300 mt-4">I design and develop cutting-edge, high-performing mobile applications that give flawless user experiences on all platforms and help you grow your company, corporation, or personal brand.</p>
                    </div>

                    <div className="skillBar flex flex-col p-10 bg-blue-950 w-full rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-xl">
                        <div className="items-center justify-center mx-auto">
                            <img src={Design} alt="Graphics Design" className="w-64 h-64 my-4 object-contain" />
                        </div>
                        <div className="flex-shrink-0 text-white text-5xl font-bold mb-4 text-left">03.</div>
                        <h2 className="text-lg text-white">Graphics Design</h2>
                        <p className="text-sm lg:text-base text-gray-300 mt-4">Invest in high-quality graphic materials to effectively brand your business or yourself. I create cards, banners, posters, logos, and much more to match your company's or personal style.</p>
                    </div>

                    <div className="skillBar -mt-8 flex flex-col p-10 bg-blue-950 w-full rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-xl">
                        <div className="items-center justify-center mx-auto">
                        <img src={Maintenance} alt="Web and Computer Maintenance" className="w-64 h-auto my-4 object-cover" />
                        </div>
                        <div className="flex-shrink-0 text-white text-5xl font-bold mb-4 text-left">04.</div>
                        <h2 className="text-lg text-white">Web and Computer Maintenance</h2>
                        <p className="text-sm lg:text-base text-gray-300 mt-4">I provide comprehensive installation, configuration, troubleshooting, and maintenance services for computers and their related peripherals and devices, addressing both hardware and software requirements.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;