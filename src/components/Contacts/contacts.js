import React from "react";
import './contacts.css';
import { HomeModernIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Contacts = () => {
    return (
        <div className="bg-blue-900 text-white py-12">
            <section className="max-w-7xl mx-auto px-4" id="contacts">
                <div className="flex flex-col justify-between items-start md:flex-row">
                    {/* {Contact Info Section} */}

                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <span className="text-lg font-semibold block mb-2">Contact Me</span>
                        <h1 className="text-3xl md:text-4xl mb-4">LETS GET IN TOUCH 📱</h1>
                        <p className="text-gray-300 mb-6">
                            Contact us at any moment. I'm always up for talking about football, philanthropy, open-source initiatives, and business. 📊.
                        </p>
                        
                        {/* {Contact items} */}
                        <div className="space-y-6">
                            <div className="flex items-center w-full">
                                <div className="bg-gray-400 py-2 px-3 m-2 mr-4 rounded-lg">
                                    <HomeModernIcon className="h-10 w-10 m-2"></HomeModernIcon>
                                </div>
                                <div className="">
                                    <h4 className="text-lg font-semibold">My Location</h4>
                                    <p className="text-gray-400">On the Internet 💻</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="bg-gray-400 py-2 px-3 m-2 mr-4 rounded-lg">
                                    <EnvelopeIcon className="h-10 w-10 m-2"></EnvelopeIcon>
                                </div>
                                <div className="">
                                    <h4 className="text-lg font-semibold">Email Address</h4>
                                    <a href="mailto:aaronmaeda7311@gmail.com">
                                        <p className="text-gray-400">aaronmaeda7311@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="bg-gray-400 py-2 px-3 m-2 mr-4 rounded-lg">
                                    <PhoneIcon className="h-10 w-10 m-2"></PhoneIcon>
                                </div>
                                <div className="">
                                    <h4 className="text-lg font-semibold">Phone Number</h4>
                                    <a href="tel:+2557438735652">
                                        <p className="text-gray-400">+255 743 873 652</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {Contact Form Section} */}
                    <div className="rounded-lg py-2 px-4 m-2 w-full h-full md:w-1/2">
                        <div className="p-8 rounded-lg w-full h-full shadow-lg bg-blue-800">
                            <form className="space-y-6">
                                <div className="">
                                    <input type="text"
                                        className="w-full p-4 text-black bg-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Name">
                                    </input>
                                </div>
                                <div className="">
                                    <input type="email"
                                        className="w-full p-4 text-black bg-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Email">
                                    </input>
                                </div>
                                <div className="">
                                    <input type="text"
                                        className="w-full p-4 text-black bg-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Subject">
                                    </input>
                                </div>
                                <div className="">
                                    <textarea typeof="text"
                                        className="w-full h-36 p-4 text-black bg-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Message">
                                    </textarea>
                                </div>
                                <div className="">
                                    <button type="submit" 
                                    className="w-full p-4 bg-blue-200 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacts