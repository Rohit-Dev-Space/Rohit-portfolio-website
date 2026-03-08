import { useEffect, useState } from "react";
import "./App.css";
import Silk from "./components/Silk";
import Connect from "./PortfolioComponents/Connect";
import HeroSection from "./PortfolioComponents/HeroSection";
import IntroductionPg from "./PortfolioComponents/IntroductionPg";
import MyWork from "./PortfolioComponents/MyWork";
import Services from "./PortfolioComponents/Services";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import { ArrowUp } from "lucide-react";

function App() {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk speed={6} scale={window.innerWidth > 768 ? 1.3 : 0.9} color="#5227ff" noiseIntensity={0.3} rotation={0} />
      </div>

      <main className="relative z-10">

        {visible && (
          <AnimatePresence>
            <motion.button
              initial={{ opacity: 0.5, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={() => {
                const homeSection = document.querySelector("#home");
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="
            fixed bottom-16 right-6
            w-10 h-10 rounded-full
            bg-white/20 backdrop-blur-xl
            border border-white/40 text-white
            flex items-center justify-center
            hover:bg-white/40
            hover:transition-all hover:duration-500 hover:translate-y-[-5px] cursor-pointer z-50
            "
            >
              <ArrowUp size={20} />
            </motion.button>
          </AnimatePresence>
        )}

        <HeroSection />
        <IntroductionPg />
        <Services />
        <MyWork />
        <Connect />
      </main >
    </>
  );
}

export default App;
