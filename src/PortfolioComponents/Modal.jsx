import { ArrowLeft } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import { useEffect } from "react";

export default function Modal({ images, isOpen, isClose }) {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                isClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xl w-full h-full z-40 p-10" onClick={isClose} >
            <div className="w-full h-auto flex justify-start" onClick={(e) => e.stopPropagation()}>
                <button onClick={isClose} className="bg-white/10 hover:bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-3 flex items-center"><ArrowLeft /></button>
                <h1 className="text-2xl mx-auto font-light">Images of the project</h1>
            </div>
            <div className="w-full h-full flex mx-auto mt-10">
                <div className="w-2/3 h-5/6 border-4 mx-auto border-white bg-black/40" onClick={(e) => e.stopPropagation()}>
                    <Carousel className="h-full">
                        <CarouselContent className="h-full">
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="h-full flex items-center justify-center">
                                    <img src={image} alt="" className="w-full h-[510px] object-fill p-3" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}