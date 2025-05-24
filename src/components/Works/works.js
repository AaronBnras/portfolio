import React, { useState } from "react";
import './works.css';
import graphics from "../../assets/graphics.png";
import graphics2 from "../../assets/graphics2.png";
import webapp from "../../assets/WebApp.png";
import mobileapp from "../../assets/mobileApp.png";
import businesscard from "../../assets/BusinessCard.png";
import workersday from "../../assets/workersday.png";
import easter from "../../assets/EasterPoster.png";
import elegance from "../../assets/elegance.png";

const Works = () => {
    const [modalType, setModalType] = useState(null);

    const openModal = (type) => setModalType(type);
    const closeModal = () => setModalType(null);

    const postersImages = [workersday, easter];
    const logoImages = [graphics, graphics2, elegance];

    // Reusable ModalGallery Component
    const ModalGallery = ({ title, images }) => (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-4 max-w-3xl w-full">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl banco-font text-gray-800 justify-center font-semibold">{title}</h1>
                    <button onClick={closeModal} className="text-black text-xl font-bold">&times;</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                        <img key={index} src={img} alt={`${title} ${index + 1}`} className="w-full h-48 object-cover shadow-sm border border-gray-700 rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="py-12">
            <section id="works" className="overflow-hidden w-full max-w-7xl mx-auto flex flex-col justify-center text-center px-4">
                <span className="workTitle text-lg font-semibold block">My Portfolio</span>
                <h1 className="text-4xl md:text-5xl mt-2">What I Have Done 💼</h1>
                <p className="workDesc mt-4 max-w-2xl mx-auto">
                    My latest and greatest creations.
                    <span className="block w-48 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg mx-auto my-4"></span>
                </p>

                <div className="grid grid-cols-1 text-white sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {/* First Card (Web App) */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={webapp} alt="Web Application" className="w-full h-64 object-cover" />
                        <div className="bg-blue-950 p-2 px-4">
                            <h1 className="banco-font">Web Appilication</h1>
                        </div>
                        <div className="absolute flex-col inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <h1 className="p-2 banco-font px-4">Homeless Management System</h1>
                            <a href="https://github.com/AaronBnras/-HIMS-_Homless_Information_Management_System-with-Laravel-" target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="justify-center rounded-lg banco-font px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300">View</button>
                            </a>
                        </div>
                    </div>

                    {/* Second Card (Mobile App) */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={mobileapp} alt="Mobile Application" className="w-full h-64 object-cover" />
                        <div className="bg-blue-950 p-2 px-4">
                            <h1 className="banco-font">Mobile Application</h1>
                        </div>
                        <div className="absolute flex-col inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <h1 className="p-2 banco-font px-4">GreenHouseMCS</h1>
                            <a href="https://github.com/AaronBnras/my_Greenhouse_App" target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="justify-center rounded-lg banco-font px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300">View</button>
                            </a>
                        </div>
                    </div>

                    {/* Fourth Card (Logo) */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={graphics2} alt="Logo" className="w-full h-64 object-cover" />
                        <div className="bg-blue-950 p-2 px-4">
                            <h1 className="banco-font">Logos</h1>
                        </div>
                        <div className="absolute flex-col inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <h1 className="p-2 banco-font px-4">Logo</h1>
                            <button
                                onClick={() => openModal('logos')}
                                className="justify-center rounded-lg banco-font px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300"
                            >
                                View
                            </button>
                        </div>
                    </div>

                    {/* Fifth Card (Business Card) */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={businesscard} alt="Business Card" className="w-full h-64 object-cover" />
                        <div className="bg-blue-950 p-2 px-4">
                            <h1 className="banco-font">Business Card</h1>
                        </div>
                        <div className="absolute flex-col inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <h1 className="p-2 banco-font px-4">Business Card</h1>
                            <a href={`${process.env.PUBLIC_URL}/Doc/Business Card (YSO).pdf`} target="_blank" rel="noopener noreferrer" className="no-underline">
                                <button className="justify-center banco-font rounded-lg px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300">View</button>
                            </a>
                        </div>
                    </div>

                    {/* Sixth Card (Posters) */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl group transition-transform transform hover:scale-105">
                        <img src={workersday} alt="Posters" className="w-full h-64 object-cover" />
                        <div className="bg-blue-950 p-2 px-4">
                            <h1 className="banco-font">Posters</h1>
                        </div>
                        <div className="absolute flex-col inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <h1 className="p-2 banco-font px-4">Posters</h1>
                            <button
                                onClick={() => openModal('posters')}
                                className="justify-center rounded-lg px-4 py-2 border-white border-2 hover:bg-white hover:text-blue-950 transition-colors duration-300"
                            >
                                View
                            </button>
                        </div>
                    </div>

                    {/* modal only for posters */}
                    {modalType === 'posters' && (
                        <ModalGallery title="Posters" images={postersImages} />
                    )}

                    {/* model only for logos */}
                    {modalType === 'logos' && (
                        <ModalGallery title="Logos" images={logoImages} />
                    )} 
                </div>
            </section>
        </div>
    );
};

export default Works;