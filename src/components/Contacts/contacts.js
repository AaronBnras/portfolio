import React, { useState } from "react";
import { sendEmail } from "../../service/emailService";
import './contacts.css';
import { validateForm } from '../../utils/formValidation';
import { HomeModernIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm(formData);
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        setErrors({});

        sendEmail(formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Your message has been sent successfully!');
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setErrors({ emailError: 'Failed to send the message, please try again.' });
            });

    };
    return (
        <div className="bg-blue-900 text-white py-12">
            <section className="max-w-7xl mx-auto px-4" id="contacts">
                <div className="flex flex-col justify-between items-start md:flex-row md:space-x-8">
                    {/* Contact Info Section */}
                    <div className="mb-8 md:mb-0 md:w-1/2 md:pr-20 space-y-6">
                        <span className="text-lg font-semibold block mb-2">Contact Me</span>
                        <h1 className="text-3xl md:text-4xl mb-4">LET'S GET IN TOUCH 📱</h1>
                        <p className="text-gray-300 mb-6">
                            Contact us at any moment. I'm always up for talking about football, philanthropy, open-source initiatives, and business. 📊.
                        </p>

                        {/* Contact Items */}
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="bg-blue-800 py-2 px-3 m-2 mr-4 rounded-lg">
                                    <HomeModernIcon className="h-10 w-10 m-2"></HomeModernIcon>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">My Location</h4>
                                    <p className="text-gray-400">On the Internet 💻</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-blue-800 py-2 px-3 m-2 mr-4 rounded-lg">
                                    <EnvelopeIcon className="h-10 w-10 m-2"></EnvelopeIcon>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Email Address</h4>
                                    <a href="mailto:aaronmaeda7311@gmail.com">
                                        <p className="text-gray-400">aaronmaeda7311@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-blue-800 py-2 px-3 m-2 mr-4 rounded-lg">
                                    <PhoneIcon className="h-10 w-10 m-2"></PhoneIcon>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Phone Number</h4>
                                    <a href="tel:+2557438735652">
                                        <p className="text-gray-400">+255 743 873 652</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="rounded-lg py-2 px-4 w-full md:w-1/3 lg:w-2/5 mx-auto">
                        <div className="p-8 rounded-lg w-full shadow-lg bg-blue-800">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full p-4 text-black bg-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && (
                                        <div className=" top-full mt-1 text-red-400 text-sm flex items-center space-x-2">
                                            <span>* {errors.name}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <input type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-4 text-black bg-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Email"
                                    />
                                    {errors.email && (
                                        <div className=" top-full mt-1 text-red-400 text-sm flex items-center space-x-2">
                                            <span>* {errors.email}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Subject Field */}
                                <div className="relative">
                                    <input type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full p-4 text-black bg-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Subject"
                                    />
                                    {errors.subject && (
                                        <div className=" top-full mt-1 text-red-400 text-sm flex items-center space-x-2">
                                            <span>* {errors.subject}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full h-36 p-4 text-black bg-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Message"
                                    />
                                    {errors.message && (
                                        <div className=" top-full mt-1 text-red-400 text-sm flex items-center space-x-2">
                                            <span>* {errors.message}</span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <button type="submit"
                                        className="w-full p-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
                                        Send Message
                                    </button>
                                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                                    {errors.emailError && <p className="text-red-500 mt-4">{errors.emailError}</p>}
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