import { AnimatePresence, motion } from "framer-motion";
import Shuffle from "../components/Shuffle";
import { CirclePlay, SquareArrowOutUpRight, ChevronUp } from "lucide-react";
import Modal from "./Modal";
import { useRef, useState } from "react";

export default function MyWork() {

    const projects = [
        {
            name: 'InterviewPrep',
            description: 'These is a special project one close to my heart',
            tech: ['React.js', 'Tailwind CSS', 'Node.js & Express.js', 'Mongoose ODM & MongoDB Atlas', 'Supabase Storage', 'JWT Authentication', 'Google Gen API'],
            img: ['intprep-1.png', 'intprep-2.png', 'intprep-3.png', 'intprep-4.png', 'intprep-5.png'],
            link: 'https://interviewprep-ai-rrk.vercel.app/'
        },
        {
            name: 'SkillSly',
            description: 'These is a special project one close to my heart',
            tech: ['React.js', 'Tailwind CSS', 'Node.js & Express.js', 'Mongoose ODM & MongoDB Atlas', 'Supabase Storage', 'JWT & Google OAuth 2 Authentication', 'Socket.io', 'CRON job', 'Jitsi Meet API'],
            img: ['/skillsly-1.png', '/skillsly-2.png', '/skillsly-3.png', '/skillsly-4.png'],
            link: ''
        },
        {
            name: 'FeedIt',
            description: ' full-stack user feedback platform built with Next.js 16, enabling users to submit ideas, vote on features, and track progress on a public roadmap',
            tech: ['Next.js', 'Tailwind CSS', 'Typescript', 'Prisma ORM & PostgreSQL', 'Clerk Authentication', 'Shadcn/ui'],
            img: ['/feedIt-1.png', '/feedIt-2.png', '/feedIt-3.png', '/feedIt-4.png', '/feedIt-5.png'],
            link: 'https://feedit-platform.vercel.app/'
        },
        {
            name: 'MyDigitalMenu',
            description: 'Built full-stack application allowing restaurant owners to create and manage digital menus, customize branding,view real-time analytics, and process POS orders.',
            tech: ['React.js', 'Node.js'],
            img: ['/mdm-1.png', '/mdm-2.png', '/mdm-3.png', '/mdm-4.png'],
            link: 'https://menu.crobtechlabs.in/'
        },
        {
            name: 'MemoPad+',
            description: 'Developed collabrative note management app enabling users to collaborate with each other also adding feature of setting reminders on notes.',
            tech: ['React.js', 'Tailwind CSS', 'Node.js & Express.js', 'Mongoose ODM & MongoDB Atlas', 'JWT tokens', 'Multer'],
            img: ['/memopad-1.png', '/memopad-2.png', '/memopad-3.png', '/memopad-4.png', '/memopad-5.png', '/memopad-6.png', '/memopad-7.png'],
            link: 'https://memopad-project.vercel.app/'
        }
    ];

    const [viewImage, setViewImage] = useState(false);
    const [displayImage, setDisplayImage] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const projectsRef = useRef(null);

    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    const handleViewImage = (images) => {
        setDisplayImage(images);
        setViewImage(true);
    };

    const closeImage = () => {
        setViewImage(false);
        setDisplayImage([]);
    };

    return (
        <section className="bg-[#2a2b2a] md:py-20 py-5 w-full h-auto text-white">
            <div className="w-full flex flex-col gap-8 justify-center items-center text-white mt-5">
                <div className="flex flex-col justify-center items-center" id="mywork">
                    <h3 className="text-gray-500 md:text-2xl text-xl">Solo/Group Projects</h3>
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
                <p className="md:w-2/4 w-6/7 text-center text-gray-500">
                    Welcome to my web development portfolio! Explore a collection of projects showcasing
                    my expertise in front-end development.
                </p>
            </div>

            <div ref={projectsRef} className="w-full h-auto md:scale-none scale-80 flex flex-wrap justify-center items-center mx-auto md:mt-10 -mt-30 gap-10">
                <AnimatePresence>
                    {visibleProjects.map((info, index) => (
                        <motion.div
                            key={info.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col w-[550px] min-h-[650px] rounded-2xl bg-white/10 hover:bg-black/10 backdrop-blur-xl"
                        >
                            <div className="relative w-full h-72 overflow-hidden rounded-t-2xl group">
                                <img
                                    src={info.img[0]}
                                    alt="project images"
                                    className="w-full h-72 object-cover transform transition-all duration-500 group-hover:scale-110"
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
                                <div className="flex flex-wrap gap-3 mt-1">
                                    {info.tech.map((tech, num) => (
                                        <span
                                            key={num}
                                            className="px-4 py-1.5 text-sm font-medium border border-white rounded-full backdrop-blur-sm hover:bg-white/10 transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-start justify-start gap-2">
                                    <a
                                        className="absolute bottom-4 right-5 flex items-center gap-2 cursor-pointer hover:text-blue-500 text-white text-md"
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        view <SquareArrowOutUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="w-full flex justify-center -mt-50 md:mt-10 scale-70 md:scale-100">
                <button
                    onClick={() => {
                        if (showAll && projectsRef.current) {
                            projectsRef.current.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }
                        setShowAll(prev => !prev)
                    }}
                    className="flex items-center gap-3 border-2 border-white bg-white/30 rounded-4xl p-3 text-white cursor-pointer"
                >
                    <motion.span
                        animate={{ rotate: showAll ? 0 : 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronUp />
                    </motion.span>
                    {showAll ? "Show Less" : "Load More Projects"}
                </button>
            </div>
            {viewImage && (
                <Modal
                    images={displayImage}
                    isOpen={viewImage}
                    isClose={closeImage}
                />
            )}
        </section>
    );
}