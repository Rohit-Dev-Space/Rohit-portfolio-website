import { AnimatePresence } from "framer-motion";
import PixelTransition from "../components/PixelTransition";
import { motion } from "framer-motion"
import SplitText from "../components/SplitText";
import { Globe, MoveRight, PencilRuler, TabletSmartphone, Wallpaper } from "lucide-react";
import { useState } from "react";
import Shuffle from "../components/Shuffle";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"

export default function Services() {

    const [deActive, setDeactive] = useState(false)

    const ServiceAndExperience = [
        {
            expText:
                "Designed and built responsive website layouts using modern design principles. Worked on multiple personal and freelance projects focusing on clean UI, accessibility, and mobile-first design. Experienced with Figma, TailwindCSS, and CSS animations to create visually engaging user interfaces.",
            serviceText:
                "I design modern, visually appealing websites with a strong focus on usability and user experience. From layout structure and visual hierarchy to responsive design, I ensure that every interface is intuitive, accessible, and optimized for different screen sizes.",
            Role: 'Web Designer',
            icon: Wallpaper,
            gradient: 'from-[#ff6b6b] via-[#feca57] to-[#48dbfb]'
        },
        {
            expText:
                "Worked on multiple freelance and personal full-stack projects where I built scalable web applications using modern technologies. Developed responsive frontend interfaces with React and Next.js while building backend APIs and handling database operations. I also deployed projects using modern hosting platforms and focused on writing clean, maintainable, and production-ready code.",
            serviceText:
                "I develop scalable and performance-driven web applications using modern frontend and backend technologies. My work involves building responsive interfaces, integrating APIs, managing databases, and ensuring smooth communication between the client and server.",
            Role: 'Web Developer',
            icon: Globe,
            gradient: 'from-[#7b2ff7] via-[#00b2ff] to-[#00f5d4]'
        },
        {
            expText:
                "Optimized websites for better search engine visibility and faster load times. Implemented SEO best practices such as semantic HTML, meta tags, structured content, and accessibility improvements. Improved performance using lazy loading, image optimization, code splitting, and reducing bundle sizes to achieve better Lighthouse and Core Web Vitals scores.",
            serviceText:
                "I optimize websites for search engines and performance to ensure better visibility, faster loading speeds, and improved user experience. My approach includes implementing SEO best practices, optimizing assets, improving Core Web Vitals, and ensuring that websites perform efficiently across all devices.",
            Role: 'SEO & Performance Optimization',
            icon: Globe,
            gradient: 'from-[#00eaff] via-[#00ff87] to-[#f9f871]'
        },
        {
            expText:
                "Designed user-centered interfaces by focusing on usability, accessibility, and intuitive navigation. Created wireframes, prototypes, and design systems while improving overall user experience through consistent layouts and clear interaction patterns.",
            serviceText:
                "I design clean, intuitive, and responsive user interfaces that focus on usability and visual clarity. My goal is to create experiences that feel natural to users while ensuring consistency, accessibility, and performance across devices.",
            Role: 'UI/UX Designer',
            icon: PencilRuler,
            gradient: 'from-[#ffb703] via-[#fb8500] to-[#d00000]'
        },
    ]

    return (
        <section className="bg-[#2a2b2a] py-10 w-full h-auto" id="services">
            <div className="w-full flex flex-col gap-12 justify-center items-center text-white mt-5">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-gray-500 md:text-3xl text-xl">What I Offer</h3>

                    <Shuffle
                        text={<p className="md:text-5xl text-2xl md:leading-none leading-5">Services &<br />Experience</p>}
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
                        className="font-bartle text-5xl"
                    />
                </div>

                <p className="md:w-2/4 w-6/7 text-center text-gray-500">
                    Passionate frontend developer focused on building responsive, modern, and
                    user-friendly digital experiences using the latest web technologies.
                </p>
            </div>

            <div className="w-full h-auto justify-center items-center mt-20">

                {/* Desktop */}
                <div className="md:flex hidden flex-row w-full gap-10 pb-10 px-20">

                    {ServiceAndExperience.map((info, index) => {
                        const Icon = info.icon;

                        return (
                            <PixelTransition
                                key={index}
                                firstContent={
                                    <div className="w-full h-auto p-5">

                                        <AnimatePresence>
                                            <h1 className="flex items-center gap-3 flex-wrap w-full">

                                                {index != 2 && <span className="bg-pink-500 text-white p-2 rounded-lg">
                                                    <Icon size={22} />
                                                </span>}

                                                <SplitText
                                                    text={info.Role}
                                                    className="text-2xl font-semibold"
                                                    delay={100}
                                                    duration={0.6}
                                                    splitType="chars"
                                                />
                                            </h1>
                                        </AnimatePresence>

                                        <p className="pt-4">{info.serviceText}</p>
                                    </div>
                                }

                                secondContent={
                                    <div className="bg-black w-full h-full p-5">

                                        <h2 className="text-xl font-medium">
                                            Experience in <br />

                                            <span className={`bg-linear-to-r ${info.gradient} w-full text-transparent bg-clip-text text-2xl font-medium`}>
                                                {info.Role}
                                            </span>
                                        </h2>

                                        <p className="mt-4 text-sm text-gray-300">{info.expText}</p>
                                    </div>
                                }

                                gridSize={12}
                                pixelColor='#ffffff'
                                once={false}
                                animationStepDuration={0.4}
                                className="custom-pixel-card w-full h-fit py-15"
                                setDeactive={deActive}
                            />
                        )
                    })}
                </div>

                {/* Mobile */}
                <div className="md:hidden flex-row flex items-center justify-center w-full md:gap-10 pb-10 md:px-20 px-8">

                    <Carousel className="w-8/9">

                        <CarouselContent className="w-full flex justify-between space-x-1 items-center">

                            {ServiceAndExperience.map((info, index) => (

                                <CarouselItem className="basis-full w-full h-auto ml-1" key={index}>

                                    <PixelTransition
                                        key={index}

                                        firstContent={
                                            <div className="w-full h-auto p-5">

                                                <SplitText
                                                    text={info.Role}
                                                    className="text-2xl font-semibold text-center"
                                                    delay={100}
                                                    duration={0.6}
                                                    splitType="chars"
                                                />

                                                <p className="pt-4 text-center">{info.serviceText}</p>
                                            </div>
                                        }

                                        secondContent={
                                            <div className="bg-black w-full h-full p-5">

                                                <h2 className="text-xl font-medium">
                                                    Experience in <br />

                                                    <span className={`bg-linear-to-r ${info.gradient} text-transparent bg-clip-text text-3xl font-medium`}>
                                                        {info.Role}
                                                    </span>
                                                </h2>

                                                <p className="mt-4 text-gray-300">{info.expText}</p>

                                            </div>
                                        }

                                        gridSize={12}
                                        pixelColor='#ffffff'
                                        once={false}
                                        animationStepDuration={0.4}
                                        className="custom-pixel-card w-full"
                                        setDeactive={deActive}
                                    />

                                </CarouselItem>
                            ))}

                        </CarouselContent>

                        <CarouselNext />
                        <CarouselPrevious />

                    </Carousel>
                </div>
            </div>
        </section>
    )
}