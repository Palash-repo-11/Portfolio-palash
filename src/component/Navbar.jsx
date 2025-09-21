


import React, { useEffect, useState } from 'react';
import { Briefcase, Folder, Mail, User } from 'lucide-react';

// const sections = ["profile", "experience", "projects", "connect"];
const sections = [
    { id: "profile", label: "Profile", icon: <User className="w-5 h-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Folder className="w-5 h-5" /> },
    { id: "connect", label: "Connect", icon: <Mail className="w-5 h-5" /> },
];

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
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
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
                        key={section.id}
                         title={section.label} 
                        onClick={() => scrollTo(section.id)}
                        className={`transition-all duration-300 px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer ${activeSection === section.id
                                ? "bg-cyan-500 text-white"
                                : "hover:text-cyan-400"
                            }`}
                    >
                        {/* Icon (inherits text color) */}
                        <span className="sm:hidden text-inherit" >{section.icon}</span>

                        {/* Text (hidden on mobile) */}
                        <span className="hidden sm:inline">{section.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
