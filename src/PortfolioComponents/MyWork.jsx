import { AnimatePresence } from "framer-motion";
import Shuffle from "../components/Shuffle";
import { CirclePlay, SquareArrowOutUpRight } from "lucide-react";
import Modal from "./Modal";
import { useState } from "react";

export default function MyWork() {

    const projects = [
        {
            name: 'InterviewPrep',
            description: 'These is a special project one close to my heart',
            tech: ['React.js', 'Tailwind CSS', 'Node.js & Express.js', 'MongoDB Atlas', 'Supabase Storage', 'JWT Authentication', 'Google Gen API'],
            img: ['intprep-1.png', 'intprep-2.png', 'intprep-3.png', 'intprep-4.png', 'intprep-5.png'],
            link: 'https://interviewprep-ai-rrk.vercel.app/'
        },
        {
            name: 'SkillSly',
            description: 'These is a special project one close to my heart',
            tech: ['React.js', 'Tailwind CSS', 'Node.js & Express.js', 'MongoDB Atlas', 'Supabase Storage', 'JWT & Google OAuth 2 Authentication', 'Socket.io', 'Jitsi Meet API'],
            img: ['/skillsly-1.png', '/skillsly-2.png', '/skillsly-3.png', '/skillsly-4.png'],
            link: ''
        },
        {
            name: 'MemoPad+',
            description: 'These is a special project one close to my heart',
            tech: ['React.js', 'Tailwind CSS', 'Node.js & Express.js', 'MongoDB Atlas'],
            img: ['/memopad-1.png', '/memopad-2.png', '/memopad-3.png', '/memopad-4.png', '/memopad-5.png', '/memopad-6.png', '/memopad-7.png'],
            link: 'https://memopad-project.vercel.app/'
        },
        {
            name: 'MyDigitalMenu',
            description: 'These is a special project one close to my heart',
            tech: ['React.js', 'Node.js'],
            img: ['/mdm-1.png', '/mdm-2.png', '/mdm-3.png', '/mdm-4.png'],
            link: 'https://menu.crobtechlabs.in/'
        },
    ]

    const [viewImage, setViewImage] = useState(false)
    const [displayImage, setDisplayImage] = useState([]);

    const handleViewImage = (images) => {
        images.map((img) =>
            setDisplayImage((prev) => [...prev, img]
            ))
        setViewImage(true);
    }
    const closeImage = () => {
        setViewImage(false);
        setDisplayImage([]);
    }

    return (
        <section className="bg-[#2a2b2a] md:py-20 py-5 w-full h-auto text-white">
            <div className="w-full flex flex-col gap-8 justify-center items-center text-white mt-5">
                <div className="flex flex-col justify-center items-center" id="mywork">
                    <h3 className="text-gray-500 md:text-2xl text-xl" >Solo/Group Projects</h3>
                    <Shuffle
                        text="My Work"
                        shuffleDirection="right"
                        duration={0.35}
                        animationMode="evenodd"
                        shuffleTimes={1}
                        ease="power3.out"
                        stagger={0.03}
                        threshold={0.1}
                        triggerOnce={true}
                        triggerOnHover={true}
                        respectReducedMotion={true}
                        className="font-bartle md:text-5xl text-3xl text-white"
                    />
                </div>
                <p className="md:w-2/4 w-6/7 text-center text-gray-500">Welcome to my web development portfolio! Explore a collection of projects showcasing
                    my expertise in front-end development.</p>
            </div>
            <div className="w-full h-auto md:scale-none scale-80 flex flex-wrap justify-center items-center mx-auto md:mt-10 -mt-30 gap-10">
                <AnimatePresence>
                    {projects.map((info, index) => (
                        <div key={index} className="flex flex-col w-[550px] h-[550px] rounded-2xl bg-white/10 hover:bg-black/10 backdrop-blur-xl border border-white/20">
                            <div className="relative w-full h-72 overflow-hidden rounded-t-2xl group">
                                <img
                                    src={info.img[0]}
                                    alt="project images"
                                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                                />
                                <div
                                    className=" absolute inset-0 flex justify-center items-center bg-black/0 group-hover:bg-black/60 transition-all duration-500"
                                >
                                    <button onClick={() => handleViewImage(info.img)} className="text-white flex gap-3 cursor-pointer text-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-widest" >
                                        <CirclePlay /> View
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between gap-5 p-5">
                                <div className="flex flex-col gap-5">
                                    <h1>{info.name}</h1>
                                    <p>{info.description}</p>
                                </div>
                                <p>Tech Stack used :</p>
                                <div className="flex items-start justify-center gap-5">
                                    <div className="w-full flex flex-wrap justify-start items-start -space-x-3">
                                        {info.tech.map((tech, num) => (
                                            <div key={num} className="w-fit h-fit px-3 py-2 scale-80 text-sm text-center font-bold border border-white rounded-full">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                    <a className="absolute bottom-4 right-5 flex items-center gap-2 cursor-pointer hover:text-blue-500 text-white text-md" href={info.link} target="_blank"
                                        rel="noopener noreferrer">view <SquareArrowOutUpRight size={16} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                    {viewImage && <Modal
                        images={displayImage}
                        isOpen={viewImage}
                        isClose={closeImage}
                    >
                    </Modal>}
                </AnimatePresence>
            </div>
        </section>
    )
}