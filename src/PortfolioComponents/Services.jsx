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
            expText: '',
            serviceText: 'I design modern, visually appealing websites with a strong focus on usability and user experience. From layout structure and visual hierarchy to responsive design, I ensure that every interface is intuitive, accessible, and optimized for different screen sizes.',
            Role: 'Web Designer',
            icon: Wallpaper,
            gradient: 'from-[#ff6b6b] via-[#feca57] to-[#48dbfb]'
        },
        {
            expText: '',
            serviceText: 'I develop scalable and performance-driven web applications using modern frontend and backend technologies. My work involves building responsive interfaces, integrating APIs, managing databases, and ensuring smooth communication between the client and server.',
            Role: 'Web Developer',
            icon: Globe,
            gradient: 'from-[#7b2ff7] via-[#00b2ff] to-[#00f5d4]'
        },
        {
            expText: '',
            serviceText: 'I build cross-platform mobile applications using React Native and Flutter. My approach focuses on creating seamless, high-performance apps that deliver a native-like experience across iOS and Android devices.',
            Role: 'App Developer',
            icon: TabletSmartphone,
            gradient: 'from-[#00eaff] via-[#00ff87] to-[#f9f871]'
        },
        {
            expText: '',
            serviceText: 'I design clean, intuitive, and responsive user interfaces that focus on usability and visual clarity. My goal is to create experiences that feel natural to users while ensuring consistency, accessibility, and performance across devices.',
            Role: 'UI/UX designer',
            icon: PencilRuler,
            gradient: 'from-[#ffb703] via-[#fb8500] to-[#d00000]'
        },
    ]

    return (
        <section className="bg-[#2a2b2a] py-10 w-full h-auto" id="services">
            <div className="w-full flex flex-col gap-12 justify-center items-center text-white mt-5">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-gray-500 md:text-3xl text-xl" >What i Offer</h3>
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
                <p className="md:w-2/4 w-6/7 text-center text-gray-500">I am a frontend developer from California, USA with 10 years of experience in multiple
                    companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className="w-full h-auto justify-center items-center mt-20">
                <div className="md:flex hidden flex-row w-full gap-10 pb-10 px-20">
                    {ServiceAndExperience.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <PixelTransition
                                key={index}
                                firstContent={
                                    <>
                                        <div className="w-full h-auto p-5">
                                            <AnimatePresence>
                                                <SplitText
                                                    text={<h1 className="flex items-center w-full"><span className="w-fit h-fit mr-4 bg-pink-500 text-white p-2 rounded-lg"><Icon size={22} /></span>{info.Role}</h1>}
                                                    className="text-2xl font-semibold text-center"
                                                    delay={100}
                                                    duration={0.6}
                                                    ease="power3.out"
                                                    splitType="chars"
                                                    from={{ opacity: 0, y: 40 }}
                                                    to={{ opacity: 1, y: 0 }}
                                                    threshold={0.1}
                                                    rootMargin="-100px"
                                                    textAlign="center"
                                                />

                                            </AnimatePresence>
                                            <p className="pt-4">{info.serviceText}</p>
                                        </div>
                                    </>
                                }
                                secondContent={
                                    <div className="bg-black w-full h-full p-5">
                                        <h2 className="text-xl font-medium">Experience in <br /><span className={`bg-linear-to-r ${info.gradient} text-transparent bg-clip-text text-3xl font-medium`}>{info.Role}</span></h2>
                                        <p>{info.text}</p>
                                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
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

                <div className="md:hidden flex-row flex items-center justify-center w-full md:gap-10 pb-10 md:px-20 px-8">
                    <Carousel className="w-8/9">
                        <CarouselContent className="w-full flex justify-between space-x-1 items-center">
                            {ServiceAndExperience.map((info, index) => (
                                <CarouselItem className="basis-full w-full h-auto" key={index}>
                                    <PixelTransition
                                        key={index}
                                        firstContent={
                                            <>
                                                <div className="w-full h-auto p-5">
                                                    <AnimatePresence>
                                                        <SplitText
                                                            text="Hello, GSAP!"
                                                            className="text-2xl font-semibold text-center"
                                                            delay={100}
                                                            duration={0.6}
                                                            ease="power3.out"
                                                            splitType="chars"
                                                            from={{ opacity: 0, y: 40 }}
                                                            to={{ opacity: 1, y: 0 }}
                                                            threshold={0.1}
                                                            rootMargin="-100px"
                                                            textAlign="center"
                                                        >
                                                            <h1 className="">Web Design</h1>
                                                        </SplitText>
                                                    </AnimatePresence>
                                                    <p className="pt-4">I am a frontend developer from California, USA with 10 years of experience in multiple
                                                        companies like Microsoft, Tesla and Apple.</p>
                                                </div>
                                            </>
                                        }
                                        secondContent={
                                            <div className="bg-black w-full h-full p-5">
                                                <h2 className="text-xl font-medium">Experience in <br /><span className={`bg-linear-to-r ${info.gradient} text-transparent bg-clip-text text-3xl font-medium`}>{info.Role}</span></h2>
                                                <p>{info.text}</p>
                                                <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
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