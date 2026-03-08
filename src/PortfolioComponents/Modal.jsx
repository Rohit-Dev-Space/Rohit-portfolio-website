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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xl w-full h-full z-40 py-10 md:px-10 px-5" onClick={isClose} >
            <div className="w-full h-auto flex justify-start" onClick={(e) => e.stopPropagation()}>
                <button onClick={isClose} className="bg-white/10 hover:bg-black/30 backdrop-blur-xl border border-white/20 md:rounded-2xl rounded-xl md:p-3 p-1 flex items-center"><ArrowLeft /></button>
                <h1 className="md:text-2xl text-lg mx-auto font-light">Images of the project</h1>
            </div>
            <div className="w-full h-full flex mx-auto mt-10">
                <div className="md:w-2/3 md:h-5/6 w-full h-2/4 mx-auto bg-black/40" onClick={(e) => e.stopPropagation()}>
                    <Carousel className="h-full">
                        <CarouselContent className="h-full">
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="h-full flex items-center justify-center">
                                    <img src={image} alt="" className="w-full md:h-[510px] h-50 object-fill p-3" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="lg:flex hidden">
                            <CarouselPrevious className="hidden lg:flex" />
                            <CarouselNext className="hidden lg:flex" />
                        </div>
                        <div className="flex lg:hidden justify-center gap-4 mt-4">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}