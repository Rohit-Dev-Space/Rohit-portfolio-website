import Silk from "../components/Silk";
import MagicBento from "../components/MagicBento";
import Shuffle from "../components/Shuffle";

export default function IntroductionPg() {
    return (
        <section className="w-full h-full z-20 bg-linear-to-b from-black to-[#2a2b2a] md:rounded-t-[290px] rounded-t-[130px] py-25 md:py-30">
            <div className="w-full flex flex-col justify-center items-center text-white mt-5" id="aboutMe">
                <h3 className="text-gray-500 md:text-3xl text-2xl">Introduction</h3>
                <Shuffle
                    text="About Me"
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
                    className="font-bartle text-3xl md:text-6xl"
                />
            </div>
            <div className="w-full h-auto md:px-10 px-0 flex justify-center items-center mt-20">
                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255"
                />
            </div>
        </section>
    )
}