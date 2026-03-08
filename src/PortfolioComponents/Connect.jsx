import { CodeXml, Github, HandHeart, HeartHandshake, Instagram, Linkedin, Mail, Pizza, Send, SendHorizontal, Twitter } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Dock from "../components/Dock";
import Shuffle from "../components/Shuffle";
import LikeButton from "../components/LikeButton";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


export default function Connect() {

    const serviceId = "service_sr8js7u";
    const templateId = "template_1er13om";
    const publicKey = "OJcRF-qaJ9flgckG0";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const items = [
        { icon: <FaXTwitter size={18} />, label: 'Twitter', onClick: () => alert('Home!'), className: 'text-white cursor-pointer' },
        { icon: <Instagram size={18} />, label: 'Instagram', onClick: () => window.open('https://instagram.com/rohiiit_khrv', '_blank'), className: 'text-white cursor-pointer' },
        { icon: <Github size={18} />, label: 'GitHub', onClick: () => window.open('https://github.com/Rohit-Dev-Space', '_blank'), className: 'text-white cursor-pointer' },
        { icon: <Linkedin size={18} />, label: 'LinkedIn', onClick: () => window.open('www.linkedin.com/in/rohit-kharvi-671199320!', '_blank'), className: 'text-white cursor-pointer' },
        { icon: < SiLeetcode size={18} />, label: 'Leetcode', onClick: () => window.open("https://leetcode.com/u/82QusZatSJ/", "_blank"), className: 'text-white cursor-pointer' },
    ];

    const senEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            serviceId,
            templateId,
            formData,
            publicKey
        )
            .then(() => {
                alert("Message Sent Successfully! 🚀");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.log(error);
                alert("Oops! Something went wrong 😢");
            });
    }

    return (
        <section className="relative flex flex-col justify-center w-full h-auto items-center pt-20 gap-10 bg-[#2a2b2a]">
            <div className="flex flex-col gap-10 w-full justify-center items-center" id="connect">
                <div className="flex flex-col justify-center items-center w-full">
                    <h3 className="text-2xl text-slate-500">Connect With Me</h3>
                    <Shuffle
                        text="Get In Touch"
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
                        className="font-bartle text-3xl md:text-5xl text-white"
                    />                </div>
                <p className="md:w-2/6 pb-2 w-6/7 text-center text-gray-500">I'd love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.</p>
            </div>

            <div className="w-full flex justify-center items-center z-30">
                <form onSubmit={senEmail} className="md:w-3/6 w-6/8 h-full flex flex-col justify-center items-center md:gap-10 gap-5">
                    <div className="flex md:flex-row flex-col w-full justify-between md:gap-10 gap-5">
                        <input value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} type="text" placeholder="Enter your name" className="outline-none border p-3 border-gray-500 rounded-lg bg-black text-white md:w-4/7 w-full h-auto" />
                        <input value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} type="text" placeholder="Enter your Email" className="outline-none border p-3 border-gray-500 rounded-lg bg-black text-white md:w-4/7 w-full h-auto" />
                    </div>
                    <textarea value={formData.message} onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }} placeholder="Enter your message here" className="outline-none border p-5 border-gray-500 rounded-lg bg-black text-white w-full h-54" />
                    <div>
                        <button type="submit" className="bg-white/10 cursor-pointer md:scale-100 scale-80 text-white hover:bg-black/30 backdrop-blur-xl border border-white/20 rounded-full px-5 py-3 flex items-center">Submit <SendHorizontal size={30} className="pl-3" /></button>
                    </div>
                </form>
            </div>
            <div className="flex -mt-30 items-center justify-center blur-2xl md:w-3/5 w-4/5 md:h-82 h-96 absolute overflow-hidden z-10">
                <div className="bg-teal-500 blur-3xl w-26 h-26 z-20" ></div>
                <div className="bg-pink-300 blur-3xl w-26 h-26 z-20"></div>
                <div className="bg-yellow-500 blur-3xl w-26 h-26 z-20"></div>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex">
                    <div className="flex bg-white/40 w-fit h-auto p-3 rounded-full">
                        <img src="/RkLogo.png" alt="Logo" className="w-7 h-7" />
                    </div>
                    <p className="text-white text-xl leading-5 mt-2 ml-4">Rohit <br /> Kharvi.</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <Mail className="text-gray-500" />
                    <a href="mailto:rohitkharvy87@gmail.com" className="text-sm text-white font-poppins font-bold">rohitkharvy87@gmail.com</a>
                </div>
                <div className="md:hidden relative scale-80 mt-10">
                    <Dock
                        className={items.className}
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        magnification={70}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center md:px-10 px-2 py-3 bg-black/20 w-full h-fit max-h-22">
                <div className="flex flex-col items-start md:text-sm md:w-auto w-[18ch] text-[10px]">
                    <p className="flex md:gap-2 gap-0.5 text-gray-500 ">Made with <HeartHandshake size={15} className="text-red-500" /> and <Pizza size={15} className="text-yellow-600" /></p>
                    <p className="text-gray-500 font-light ">© {new Date().getFullYear()} Rohit Kharvi. All rights reserved.</p>
                </div>
                <div className="md:block hidden">
                    <Dock
                        className={items.className}
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        magnification={70}
                    />
                </div>

                <div className="md:flex-wrap flex md:gap-3 gap-1 md:pr-5 md:w-auto w-[14ch] items-center justify-center">
                    <LikeButton />
                    <p className="text-gray-400 md:leading-5 leading-3 md:text-[12px] text-[8px]">If you enjoyed exploring my portfolio,<br /> drop a like to support my work</p>
                </div>
            </div>
        </section>
    )
}

