import React from 'react'

import { FaLinkedin, FaWhatsapp, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const contactMethods = [
    {
        icon: <SiGmail size={32} className="text-red-500" />,
        title: "Gmail",
        detail: "palashmaji2001@gmail.com",
        buttonText: "Send an Email",
        link: "mailto:palashmaji2001@gmail.com",
    },
    {
        icon: <FaLinkedin size={32} className="text-blue-600" />,
        title: "LinkedIn",
        detail: "/in/palash-maji-448613253/",
        buttonText: "Connect on LinkedIn",
        link: "https://www.linkedin.com/in/palash-maji-448613253/",
    },
    {
        icon: <FaWhatsapp size={32} className="text-green-500" />,
        title: "WhatsApp",
        detail: "+91 9609187988",
        buttonText: "Chat on WhatsApp",
        link: "https://wa.me/+919609187988",
    },
    {
        icon: <FaPhone size={32} className="text-purple-600" />,
        title: "Call",
        detail: "+91 9609187988",
        buttonText: "Call Now",
        link: "tel:+919609187988",
    },
];


function Connect() {
    return (
        <section className="py-16 px-4" id="contact">
            <div className="max-w-6xl mx-auto text-left">
                <h2 className="text-4xl font-bold  mb-8 relative inline-block">
                    Get In Touch
                    <span className="block h-1 w-20 bg-purple-400 mt-2 mx-auto rounded-full blur-sm" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-center">
                    {contactMethods.map((method, idx) => (
                        <div
                            key={idx}
                            className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-xl shadow border hover:shadow-lg transition"
                        >
                            <div className="bg-purple-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                                {method.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{method.title}</h3>
                            <p className="text-lg-600 mt-1">{method.detail}</p>
                            <a
                                href={method.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-4 px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 text-sm"
                            >
                                {method.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Connect
