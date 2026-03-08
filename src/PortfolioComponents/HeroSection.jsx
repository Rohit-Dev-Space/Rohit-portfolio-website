import { ArrowUpRight, Download } from "lucide-react";
import GlareHover from "../components/GlareHover";
import Silk from "../components/Silk";
import ClickSpark from "../components/ClickSpark";
import CardNav from "../components/CardNav";

export default function HeroSection() {

    const items = [
        {
            label: "About Me",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Education", ariaLabel: "Education" },
                { label: "Languages", ariaLabel: "Languages" },
                { label: "Stats", ariaLabel: "Tech Stats" },
                { label: "Achivements", ariaLabel: "Achivements" },
            ],
            id: 'aboutMe'
        },
        {
            label: "Services & Experiences",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Work Description", ariaLabel: "Services offered" },
                { label: "Work Experience", ariaLabel: "Experiences" }
            ],
            id: 'services'
        },
        {
            label: "My Work",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Work Images", ariaLabel: "Email us" },
                { label: "Project links", ariaLabel: "Twitter" },
            ],
            id: 'mywork'
        }
    ];

    return (
        <section className="w-full h-dvh md:overflow-hidden md:mb-15 -mb-5" id="home">
            <div className="relative z-10 flex flex-col gap-15 items-center justify-center w-full py-7">
                <div className="bg-white/10 backdrop-blur-xl border md:flex hidden justify-between px-3 pr-20 items-center border-white/20 shadow-lg md:w-3/5 md:mx-auto w-6/7 h-20 rounded-full">
                    <div className="flex">
                        <div className="bg-white/40 w-fit h-auto p-3 rounded-full">
                            <img src="/RkLogo.png" alt="Logo" className="w-7 h-7" />
                        </div>
                        <p className="text-white text-xl leading-5 mt-2 ml-4">Rohit <br /> Kharvi.</p>
                    </div>
                    <div className="text-white flex justify-center items-center gap-5">
                        <a href="#aboutMe">About me</a>
                        <a href="#services">Services </a>
                        <a href="#mywork">My works</a>
                    </div>
                </div>
                <div className="w-full md:hidden block h-auto py-10">
                    <CardNav
                        logo={"/RkLogo.png"}
                        logoAlt="Company Logo"
                        items={items}
                        baseColor=""
                        menuColor="#fff"
                        buttonBgColor="#111"
                        buttonTextColor="#fff"
                        ease="power3.out"
                        className="md:hidden block"
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                    <GlareHover
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                    >
                        <img src="/moon_icon.png" alt="" />
                    </GlareHover>
                    <p className="text-white md:text-2xl text-[22px] flex items-end gap-3">Hi! I’m Rohit kharvi <span><img src="/hand-icon.png" className="Wave w-10" alt="" /></span></p>
                    <h1 className="text-white md:text-7xl text-[42px] leading-12 md:leading-none text-center font-bold">Fullstack Web Developer <br /> based in Goa.</h1>
                    <div className="flex md:flex-row flex-col md:items-around items-center md:gap-10 gap-7 text-white">
                        <a href="#connect" className="bg-white/10 hover:bg-black/30 order-2 md:w-auto w-fit backdrop-blur-xl border border-white/20 rounded-full px-5 py-3 flex items-center">Connect with me <ArrowUpRight size={30} className="pl-2" /></a>
                        <a href="/Rohit_Kharvi_Resume.pdf" download="Rohit_Kharvi_Resume.pdf" className="bg-white/10 hover:bg-black/30 order-1 md:w-auto w-fit  backdrop-blur-xl border border-white/20 rounded-full px-5 py-3 flex items-center"><Download className="pr-3" size={30} />Resume</a>
                    </div>
                </div>
            </div>
        </section>

    );
}
