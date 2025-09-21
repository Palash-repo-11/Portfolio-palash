import React from 'react'
import {
    FaReact,
    FaNodeJs,
    FaAws,
    FaGitAlt,
    FaSass,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaLinux,
    FaSearch,
    FaFigma,
    FaDatabase,
} from "react-icons/fa";
import {
    SiMongodb,
    SiRedux,
    SiExpress,
    SiFigma,
    SiGooglechrome,
    SiPassport,
    SiShopify,
    SiTypescript,
    SiNextdotjs,
    SiReact,
    SiPeerlist,
    SiExpo,
    SiPostgresql,
    SiApollographql
} from "react-icons/si";
import { Briefcase } from "lucide-react";
import { RiKeyLine, RiWifiLine } from 'react-icons/ri';
const techIcons = {
    TypeScript: <SiTypescript className="text-blue-500" />,
    "Next.js": <SiNextdotjs className="text-black" />,
    SEO: <FaSearch className="text-green-400" />,
    React: <FaReact className="text-blue-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    AWS: <FaAws className="text-yellow-400" />,
    Git: <FaGitAlt className="text-orange-400" />,
    Sass: <FaSass className="text-pink-400" />,
    HTML5: <FaHtml5 className="text-orange-500" />,
    CSS3: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <FaJsSquare className="text-yellow-300" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Redux: <SiRedux className="text-purple-400" />,
    Express: <SiExpress className="text-gray-300" />,
    Figma: <SiFigma className="text-pink-500" />,
    "Chrome Extensions": <SiGooglechrome className="text-yellow-500" />,
    Shopify: <SiShopify className="text-green-500" />,
    Linux: <FaLinux className="text-yellow-400 " />,
    'Passport.js': <SiPassport className="text-purple-400" />,
    Sass: <FaSass className="text-pink-400" />,
    "React Native": <SiReact className="text-blue-400" />,
    Expo: <SiExpo className="text-black" />,
    SQL: <FaDatabase className="text-gray-500" />,
    PostgreSQL: <SiPostgresql className="text-blue-600" />,
    graphQl: <SiApollographql className="text-yellow-400 " />,
    OAuth: <RiKeyLine className="text-yellow-500" />,
    WebSocket: <RiWifiLine className="text-indigo-500" />,
    PeerJS: <SiPeerlist className="text-pink-500" />,
    Figma: <FaFigma className="text-pink-500" />,
};

const experiences = [
    {
        company: "GSTech Technology Pvt Ltd",
        role: "Software Developer",
        duration: "08/2023 - Present",
        description: "Improved the efficiency of existing applications by implementing scalable, secure, and maintainable code.\n • Collaborated with cross-functional teams to deliver user-friendly,feature-rich applications that align with business goals.\n • Actively participating in code reviews, troubleshooting",
        stack: ["Chrome Extensions", "React", "Node.js", "Express", "WebSocket", "PeerJS", "Redux", "AWS", "Shopify", "Linux", "Passport.js", "Sass", "TypeScript", "Next.js", "SEO", "Git", "React Native", "Figma", "Expo", "SQL", "PostgreSQL", "graphQl", "OAuth"],
    },
    {
        company: "j-spiders",
        role: "Full-Stack Developer",
        duration: "01/2023 - 07/2023",
        description: "Gained hands-on experience in developing end-to-end web applications and building RESTful APIs",
        stack: ["JavaScript", "React", "SQL", "CSS3", "Git", "HTML5", "MongoDB"],
    },
];

function Experience() {
    return (
        <div className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-10">
                Professional Experience
            </h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                    >
                        <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="bg-purple-600 text-white p-3 rounded-full shadow">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {exp.company}
                                </h3>
                                <p className="text-purple-300 font-medium">
                                    {exp.role} <span className="text-white">•</span>{" "}
                                    <span className="text-white">{exp.duration}</span>
                                </p>
                                <p className="text-gray-200 mt-2">{exp.description}</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {exp.stack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        >
                                            {techIcons[tech]} {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience
