import { useRef, useState, useEffect } from 'react';

const TiltCard = ({ imageSrc, text }) => {
    const cardRef = useRef(null);
    const [hoverImage, setHoverImage] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isVertical, setIsVertical] = useState(false);

    useEffect(() => {
        const hasTouch =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0;
        setIsTouchDevice(hasTouch);

        // Load image to check aspect ratio
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            if (img.height > img.width) {
                setIsVertical(true);
            } else {
                setIsVertical(false);
            }
        };
    }, [imageSrc]);

    const handleMouseMove = (e) => {
        if (isTouchDevice) return;

        setHoverImage(true);
        const card = cardRef.current;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const centerX = width / 2;
        const centerY = height / 2;

        const rotateX = ((y - centerY) / centerY) * 40;
        const rotateY = ((x - centerX) / centerX) * 40;

        const translateZ = 40;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
    };

    const handleMouseLeave = () => {
        if (isTouchDevice) return;

        setHoverImage(false);
        const card = cardRef.current;
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;

        setTimeout(() => {
            card.style.transition = '';
        }, 500);
    };

    return (
        <div className="w-full z-50 relative">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`
    relative overflow-visible rounded-xl shadow-xl 
    transition-transform duration-300 ease-out
    ${isVertical
                        ? 'h-[200px] w-[120px] sm:h-[400px] sm:w-[250px]'
                        : 'h-[120px] w-[200px] sm:h-[230px] sm:w-[410px]'
                    }
  `}
                style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                }}
            >
                <div className="relative w-full h-full">
                    <img
                        src={imageSrc}
                        alt={text}
                        className="w-full h-full object-cover block backface-hidden"
                    />

                    {/* Dark side gradient overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition duration-300 ease-out ${hoverImage ? 'bg-black/10' : 'bg-black/20'
                            }`}
                    ></div>
                </div>

                {/* 3D Text */}
                <div
                    className="absolute bottom-10 -left-12 w-32 opacity-80 text-white text-2xl font-bold drop-shadow-2xl"
                    style={{
                        transform: 'translateZ(60px)',
                    }}
                >
                    {text}
                    <svg
                        width="130%"
                        height="4"
                        viewBox="0 0 150 2"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-2"
                    >
                        <line
                            x1="0"
                            y1="1"
                            x2="150"
                            y2="1"
                            stroke="white"
                            strokeWidth="3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TiltCard;
