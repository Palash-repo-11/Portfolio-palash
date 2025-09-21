// import React from 'react'
// // import { Link } from 'react-scroll'
// // import { Link } from 'react-router'

// function Navbar() {
//     const scrollTo = (id) => {
//         document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//     };
//     return (
//         <div>
//             <nav className="fixed top-0 w-full bg-gray-900 text-white shadow z-50">
//                 <div className="container mx-auto px-4 py-3 flex justify-center space-x-8">
//                     <button onClick={() => scrollTo("profile")} className="hover:text-cyan-400">Profile</button>
//                     <button onClick={() => scrollTo("experience")} className="hover:text-cyan-400">Experience</button>
//                     <button onClick={() => scrollTo("projects")} className="hover:text-cyan-400">Projects</button>
//                     <button onClick={() => scrollTo("connect")} className="hover:text-cyan-400">Contact Me</button>
//                     <button onClick={() => scrollTo("testimonials")} className="hover:text-cyan-400"> Testimonials</button>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar


import React, { useEffect, useState } from 'react';

const sections = ["profile", "experience", "projects", "connect"];

function Navbar() {
    const [activeSection, setActiveSection] = useState("profile");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // adjust for early detection

            const isBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

            if (isBottom) {
                setActiveSection("connect");
                return;
            }

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg border border-cyan-500 z-50">
            <div className="flex justify-center items-center space-x-6 text-sm font-medium">
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollTo(section)}
                        className={`transition-all duration-300 px-3 py-1 rounded-full ${activeSection === section
                                ? "bg-cyan-500 text-white"
                                : "hover:text-cyan-400"
                            }`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
