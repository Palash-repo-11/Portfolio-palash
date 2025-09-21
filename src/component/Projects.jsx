import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import spendingCalulator from "../../public/images/spendingCalulator.jpg"
import spotifyArtistCart from "../../public/images/spotifyArtistCart.png"
import adCollector from "../../public/images/adCollector.png"
import SaveGooglePhotos from "../../public/images/SaveGooglePhotos.png"
import SeoSpyder from "../../public/images/SeoSpyder.png"
import CoffeeCompare from "../../public/images/CoffeeCompare.png"
import GSHeaderFooter from "../../public/images/GSHeaderFooter.png"
import {
    FaReact,
    FaNodeJs,
    FaStripe,
    FaGithub,
    FaChartBar,
    FaSearch,
    FaKey,
    FaTools,
    FaFigma,
    FaDatabase,
} from "react-icons/fa";
import {
    SiMongodb,
    SiRedux,
    SiExpress,
    SiFirebase,
    SiTypescript,
    SiMui,
    SiNextdotjs,
    SiPostgresql,
    SiGooglechrome,
    SiGooglecloud,
    SiTailwindcss,
    SiShopify,
    SiPeerlist,
    SiReact,
    SiExpo,
    SiApollographql,
} from "react-icons/si";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { RiWifiLine } from "react-icons/ri";

const techIcons = {
    React: <FaReact className="text-blue-500" />,
    "Node.js": <FaNodeJs className="text-green-600" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    Express: <SiExpress className="text-gray-400" />,
    Redux: <SiRedux className="text-purple-500" />,
    Stripe: <FaStripe className="text-indigo-400" />,
    Firebase: <SiFirebase className="text-yellow-500" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    "Material-UI": <SiMui className="text-indigo-500" />,
    "Chart.js": <FaChartBar className="text-purple-400" />,
    JavaScript: <FaReact className="text-yellow-400" />,
    "Next.js": <SiNextdotjs className="text-black" />,
    SEO: <FaSearch className="text-green-400" />,
    postgreSQl: <SiPostgresql className="text-blue-600" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    "Chrome Extensions": <SiGooglechrome className="text-yellow-500" />,
    GCP: <SiGooglecloud className="text-blue-500" />,
    OAuth: <FaKey className="text-yellow-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-blue-400" />,
    "Power Apps": <FaTools className="text-purple-500" />,
    "Dynamics 365": <FaTools className="text-green-500" />,
    "React Native": <SiReact className="text-blue-400" />,
    Shopify: <SiShopify className="text-green-500" />,
    WebSocket: <RiWifiLine className="text-indigo-500" />,
    PeerJS: <SiPeerlist className="text-pink-500" />,
    Figma: <FaFigma className="text-pink-500" />,
    Expo: <SiExpo className="text-black" />,
    SQL: <FaDatabase className="text-gray-500" />,
    PostgreSQL: <SiPostgresql className="text-blue-600" />,
    graphQl: <SiApollographql className="text-yellow-400 " />,
};

const projects = [
    {
        title: "Fooddy website",
        description: "Compare restaurants across Zomato, Swiggy & more platforms and find the best deals.",
        image: "https://b.zmtcdn.com/data/pictures/chains/0/18518170/41dee91fa34078abde3fbad05dcaccbf.jpg?output-format=webp",
        tech: ["Next.js", "Node.js", "postgreSQl", "TypeScript", "Express", "Redux", "SEO", "Tailwind CSS"],
        github: "",
        demo: "https://fooddy.in/",
    },
    {
        title: "Adspyder",
        description: "AdSpyder is your all-in-one ad command center — research competitors, create high-converting ads, and optimize campaigns to win more clicks and customers.",
        image: "https://adspyder.io/favicon.ico",
        tech: ["Next.js", "Node.js", "postgreSQl", "TypeScript", "Express", "WebSocket", "SEO", "Tailwind CSS", "Figma"],
        github: "",
        demo: "https://adspyder.io/",
    },
    {
        title: "Washington Royal Dry Cleaners",
        description: "Professional laundry and dry cleaning web site for Washington Royal Dry Cleaners.",
        image: "https://wrdc.in/media/laundryFavIcon.svg",
        tech: ["Next.js", "TypeScript", "SEO", "Tailwind CSS"],
        github: "",
        demo: "https://wrdc.in",
    },
    {
        title: "Spending Calculator for Amazon™ and Flipkart™",
        description: "Amazon Total Spending: Automatically calculates the total amount you've spent on Amazon orders to give you a comprehensive summary.",
        image: spendingCalulator,
        tech: ["React", "Material-UI", "Chart.js", "Node.js", "Express", "JavaScript", "Chrome Extensions", "postgreSQl"],
        github: "https://github.com/Palash-repo-11/Spending-calculator-Ext-",
        demo: "https://chromewebstore.google.com/detail/spending-calculator-for-a/pmkoilojjepdgnbhnbfmbpjbcgfgbaoe",
    },
    {
        title: "JIO-HOTSTART-ADBLOCK",
        description: "Blocks ads in Hostar and Jio cinema",
        image: "",
        tech: ["JavaScript", "Chrome Extensions",],
        github: "https://github.com/Palash-repo-11/JIO-HOTSTART-ADBLOCK",
        demo: "",
    },
    {
        title: "Ad collector",
        description: "Use this extension to collect ads while browsing through your feed.You can later keep your favourite ads by saving them or delete from the existing list.",
        image: adCollector,
        tech: ["JavaScript", "Chrome Extensions", "React"],
        github: "",
        demo: "https://chromewebstore.google.com/detail/ad-collector/plnpanokbgeabagnmbcamehkcninjbac",
    },
    {
        title: "Spotify Artist Chart",
        description: "Install this extension to display a chart of all tracks by an artist on Spotify with just one click.",
        image: spotifyArtistCart,
        tech: ["Chrome Extensions", "JavaScript", "GCP", "OAuth"],
        github: "https://github.com/Palash-repo-11/spotify-artist-cart-add-EXT",
        demo: "",
    },
    {
        title: "Save to Google Photos",
        description: "Use this extension to easily save any image from the web to your Google Photos with a single right click.",
        image: SaveGooglePhotos,
        tech: ["Chrome Extensions", "JavaScript", "GCP", "OAuth"],
        github: "https://github.com/Palash-repo-11/Save-To-google-Photo-Ext",
        demo: "",
    },
    {
        title: "couponswala",
        description: "AdSpyder is your all-in-one ad command center — research competitors, create high-converting ads, and optimize campaigns to win more clicks and customers.",
        image: "https://couponswala.com/static/img/newlogo.svg",
        tech: ["Next.js", "Node.js", "postgreSQl", "TypeScript", "Express", "SEO", "Tailwind CSS", "Figma"],
        github: "",
        demo: "https://couponswala.com/",
    },
    {
        title: "SEOSpyder",
        description: "Supercharge your website rankings with AI-driven SEO audits, site analysis, and optimization agents. Find issues, boost visibility, and grow traffic with SEO Spyder.",
        image: SeoSpyder,
        tech: ["Next.js", "TypeScript", "SEO", "Tailwind CSS"],
        github: "",
        demo: "https://seospyder.io/",
    },
    {
        title: "Media Stream App",
        description: "Sharing screen and chat with other divices with Socket connection",
        image: "",
        tech: ["React", "Node.js", "Tailwind CSS", "Express", "postgreSQl", "webSocket", "PeerJS"],
        github: "https://github.com/Palash-repo-11/room-app-backend",
        demo: "",
    },

    {
        title: "coffeemachine compare app",
        description: "coffeemachine compare app and ordering coffee machine ",
        image: CoffeeCompare,
        tech: ["Power Apps", "Dynamics 365"],
        github: "",
        demo: "",
    },
    {
        title: "GS Header & Footer Code",
        description: "GS Header & Footer Code - helps inject custom code and SEO content into shopfy pages and application.",
        image: GSHeaderFooter,
        tech: ["Shopify", "React", "Node.js", "SEO", "graphQl"],
        github: "",
        demo: "https://apps.shopify.com/gs-header-footer-code",
    },
    {
        title: "Gallary Photo Viewer Mobile App",
        description: "A mobile app to view photos in gallery format with smooth navigation and user-friendly interface.",
        image: "",
        tech: ["React Native", "Expo"],
        github: "https://github.com/Palash-repo-11/Gallary--photo-viewer-mobile-",
        demo: "",
    },
    
];

export default function Projects() {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 3,
            spacing: 16,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 2, spacing: 12 },
            },
            "(max-width: 640px)": {
                slides: { perView: 1, spacing: 10 },
            },
        },
    });

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
            <h2 className="text-4xl font-bold mb-8">My Projects</h2>

            <div className="relative">
                <button
                    onClick={() => instanceRef.current?.prev()}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
                >
                    <HiChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                    onClick={() => instanceRef.current?.next()}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
                >
                    <HiChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                <div ref={sliderRef} className="keen-slider">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="keen-slider__slide  p-4 rounded-xl shadow bg-white/10 border border-white/20 backdrop-blur-lg">
                            {
                                proj.image ? <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-40 object-cover rounded-lg"
                                /> :
                                    <img
                                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                                        alt={proj.title}
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                            }

                            <div className="mt-4">
                                <h3 className="text-xl font-semibold">{proj.title}</h3>
                                <p className="text-gray-600 mt-2">{proj.description}</p>
                                <div className="flex flex-wrap gap-2 mt-3 text-gray-600">
                                    {proj.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="flex items-center gap-1 bg-gray-100 px-3 py-1 text-sm rounded-full"
                                        >
                                            {techIcons[tech]} {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4">
                                    {
                                        proj.github && <a
                                            href={proj.github}
                                            target="_blank"
                                            className="flex items-center gap-2 border px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                    }
                                    {
                                        proj.demo && <a
                                            href={proj.demo}
                                            target="_blank"
                                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                                        >
                                            Demo
                                        </a>
                                    }

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
