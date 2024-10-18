import React from "react";
import './works.css';
import graphics from "../../assets/graphics.png"
import graphics2 from "../../assets/graphics2.png"
import webapp from "../../assets/WebApp.png"
import mobileapp from "../../assets/mobileApp.png"
import businesscard from "../../assets/BusinessCard.png"

const Works = () => {
    return (
        <div className=" bg-blue-950 text-white">
            <section id="works" className="overflow-hidden w-full max-w-7xl mx-auto flex flex-col justify-center text-center">
                <span className="workTitle text-lg font-semibold block">My Portfolio</span>
                <h2 className="text-4xl ml-3">What I Have Done 💼</h2>
                <p className="workDesc px-3 mt-2">
                    My latest and greatest creations.
                    <span className="block w-48 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg mx-auto my-4"></span>
                </p>
                <div className="flex flex-wrap justify-center gap-8 mt-4">
                    <div className="rounded-lg w-96 h-96 overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={webapp} alt="Web Application" className="w-full h-full object-fill" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="rounded-lg w-96 h-96 overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={mobileapp} alt="Mobile Application" className="w-full h-full object-fill" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="rounded-lg w-96 h-96 overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={graphics} alt="Logo" className="w-full h-full object-fill" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="rounded-lg w-96 h-96 overflow-hidden  shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={graphics2} alt="Logo" className="w-full h-full object-fill" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="rounded-lg w-96 h-96 overflow-hidden  shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={businesscard} alt="Business Card" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Works