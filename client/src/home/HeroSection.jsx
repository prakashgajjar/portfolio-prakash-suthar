import { useEffect, useState } from "react";
import RotatingText from "../components/RotatingText"; // your rotating text

export default function Hero() {
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, 1000); // 2 seconds for overlay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center">
            {/* Purple overlay */}
            {showOverlay && (
                <div className="fixed inset-0 bg-purple-600 z-50 animate-slide-left"></div>
            )}

            {/* Hero content */}
            <div className="relative left-4 md:left-[10%]">
                <h1 className="text-purple-400 text-sm md:text-base mb-4 font-mono">Home /&gt;</h1>

                <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
                    <span className="relative overflow-hidden inline-block">
                        <span className="reveal-text">Hi, my name is</span>
                    </span>
                    <br />
                    <span className="relative overflow-hidden inline-block">
                        <span className="reveal-text text-purple-500">Prakash Suthar</span>
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl italic font-light text-gray-300 mb-4">
                    I <span className="italic text-white">design</span> and{" "}
                    <span className="font-semibold text-white">develop</span> <RotatingText />
                </h2>

                <p className="text-md md:text-lg text-gray-400 mt-8">Let me show you...</p>
            </div>

        </div>
    );
}
