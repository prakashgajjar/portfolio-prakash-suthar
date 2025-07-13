import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    const speed = 0.1; // smaller = smoother trailing

    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      circle.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed top-3 left-3 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000]"
      ></div>

      {/* Trailing circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999]"
      ></div>
    </>
  );
};

export default CustomCursor;
