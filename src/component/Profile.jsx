import React from 'react'
// import { Typed } from "react-typed";
// import ReactTyped from "react-typed";
import { Typewriter } from 'react-simple-typewriter';
import profileImg from "../../public/images/portfolio-profile.png"
import { FaAws, FaDatabase, FaDocker, FaDownload, FaEye, FaFigma, FaFileExcel, FaFilePowerpoint, FaFileWord, FaGitAlt, FaKey, FaLinux, FaSass, FaSearch, FaTools } from 'react-icons/fa';

import Marquee from "react-fast-marquee";


import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGithub,
} from "react-icons/fa";

import {
    SiMongodb,
    SiExpress,
    SiRedux,
    SiTailwindcss,
    SiFirebase,
    SiTypescript,
    SiJavascript,
    SiPassport,
    SiHtml5,
    SiCss3,
    SiGooglecloud,
    SiGooglechrome,
    SiShopify,
    SiApollographql,
    SiPostgresql,
    SiNextdotjs,
    SiReact,
    SiPeerlist,
    SiExpo,
} from "react-icons/si";
import { MdApi } from 'react-icons/md';
import { RiKeyLine, RiWifiLine } from 'react-icons/ri';

const skills = [
    { icon: <FaKey className="text-yellow-500" />, label: 'OAuth' },

    { icon: <FaSearch className="text-green-400" />, label: 'SEO' },
    { icon: <SiNextdotjs className="text-black" />, label: 'Next.js' },
    { icon: <SiTypescript className="text-blue-500" />, label: 'TypeScript' },
    { icon: <FaTools className="text-purple-500" />, label: 'Power Apps' },
    { icon: <FaTools className="text-green-500" />, label: 'Dynamics 365' },
    { icon: <FaJsSquare className="text-yellow-300" />, label: 'JavaScript' },
    { icon: <SiApollographql className="text-yellow-400 " />, label: 'graphQl' },
    { icon: <FaDatabase className="text-gray-500" />, label: 'SQL' },
    { icon: <SiPostgresql className="text-blue-600" />, label: 'postgreSQl' },
    { icon: <FaReact className="text-cyan-400" />, label: 'React' },
    { icon: <FaNodeJs className="text-green-500" />, label: 'Node.js' },
    { icon: <SiExpress className="text-gray-400" />, label: 'Express.js' },
    { icon: <SiPassport className="text-purple-400" />, label: 'Passport.js' },
    { icon: <SiTailwindcss className="text-blue-400" />, label: 'Tailwind CSS' },
    { icon: <SiHtml5 className="text-orange-500" />, label: 'HTML' },
    { icon: <SiCss3 className="text-blue-500" />, label: 'CSS' },
    { icon: <FaSass className="text-pink-400" />, label: 'Sass' },
    { icon: <FaAws className="text-orange-400" />, label: 'AWS' },
    { icon: <SiGooglecloud className="text-blue-500" />, label: 'GCP' },
    { icon: <FaDocker className="text-blue-300" />, label: 'Docker' },
    { icon: <SiGooglechrome className="text-yellow-500" />, label: 'Chrome Extensions' },
    { icon: <SiShopify className="text-green-500" />, label: 'Shopify' },
    { icon: <FaLinux className="text-yellow-400 " />, label: 'Linux' },
    { icon: <FaGitAlt className="text-red-500" />, label: 'Git' },
    { icon: <MdApi className="text-indigo-400" />, label: 'REST API' },
    { icon: <RiKeyLine className="text-yellow-500" />, label: 'JWT' },
    { icon: <SiPostgresql className="text-blue-600" />, label: 'postgreSQl' },
    { icon: <SiPostgresql className="text-blue-600 bg-white" />, label: 'pgAdmin4' },
    { icon: <FaFileWord className="text-blue-600" />, label: 'MS Word' },
    { icon: <FaFilePowerpoint className="text-orange-600" />, label: 'PowerPoint' },
    { icon: <FaFileExcel className="text-green-600" />, label: 'Excel' },
    { icon: <SiReact className="text-blue-400" />, label: 'React Native' },
    { icon: <RiWifiLine className="text-indigo-500" />, label: 'WebSocket' },
    { icon: <SiPeerlist className="text-pink-500" />, label: 'PeerJS' },
    { icon: <FaFigma className="text-pink-500" />, label: 'Figma' },
    { icon: <SiExpo className="text-black" />, label: 'Expo' },

]

function Profile() {

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12 gap-12">
                {/* Left section */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-64 h-64 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
                    />
                </div>

                {/* Right section */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Hi, I'm{" "}
                        <span className="text-cyan-300">
                            Palash Maji
                            {/* <Typewriter
                                words={['Palash Maji']}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={500}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            /> */}
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-4">
                        <Typewriter
                            words={[
                                'Full Stack web Developer',
                                'Software Engineer',
                                "Chrome Extension Developer",
                                'Cloud Developer',
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h2>

                    <p className="text-lg text-gray-200">
                        I’m a full-stack developer passionate about building responsive, high-performance applications with React, Next.js, and Node.js. From SaaS platforms to Chrome extensions, I enjoy solving real-world problems and creating tools that are both functional and user-friendly.
                    </p>

                    <div className="flex gap-15" style={{ marginTop: '15px' }}>
                        <a
                            href="./palash-maji-resume-full-stack.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-cyan-500 text-white px-5 py-2 rounded hover:bg-cyan-600 transition"
                        >
                            <FaDownload /> Download Resume
                        </a>

                        <a
                            href="./palash-maji-resume-full-stack.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 border  px-5 py-2 rounded hover:bg-cyan-500 hover:text-white transition"
                        >
                            <FaEye /> View Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className=" border-cyan-500 py-4 w-full">
                <div className="max-w-6xl mx-auto px-6">
                    <Marquee speed={100} gradient={false}>
                        <div className="flex items-center gap-6">
                            {skills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full shadow-sm border border-white/20 backdrop-blur-sm"
                                    style={i === skills.length - 1 ? { marginRight: '20px' } : {}}
                                >
                                    <span className="text-xl">{skill.icon}</span>
                                    <span className="text-sm font-medium">{skill.label}</span>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </>

    )
}

export default Profile
