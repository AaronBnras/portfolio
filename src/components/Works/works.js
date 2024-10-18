import React from "react";
import './works.css';
import graphics from "../../assets/graphics.png"
import graphics2 from "../../assets/graphics2.png"
import webapp from "../../assets/WebApp.png"
import mobileapp from "../../assets/mobileApp.png"
import businesscard from "../../assets/BusinessCard.png"

const Works = () => {
    return (
        <div className="bg-blue-950 text-white py-12">
            <section id="works" className="overflow-hidden w-full max-w-7xl mx-auto flex flex-col justify-center text-center px-4">
                <span className="workTitle text-lg font-semibold block">My Portfolio</span>
                <h2 className="text-4xl md:text-5xl mt-2">What I Have Done 💼</h2>
                <p className="workDesc mt-4 max-w-2xl mx-auto">
                    My latest and greatest creations.
                    <span className="block w-48 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg mx-auto my-4"></span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={webapp} alt="Web Application" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <a href="https://github.com/AaronBnras/-HIMS-_Homless_Information_Management_System-with-Laravel-" target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="justify-center rounded-lg px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300">View</button>
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={mobileapp} alt="Mobile Application" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <a href="https://github.com/AaronBnras/my_Greenhouse_App" target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="justify-center rounded-lg px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300">View</button>
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={graphics} alt="Logo" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <a href={require('../../assets/graphics.png')} target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="justify-center rounded-lg px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300">View</button>
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={graphics2} alt="Logo" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <a href={require('../../assets/graphics2.png')} target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="justify-center rounded-lg px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300">View</button>
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={businesscard} alt="Business Card" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <a href={`${process.env.PUBLIC_URL}/Doc/Business Card (YSO).pdf`} target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="justify-center rounded-lg px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300">View</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Works