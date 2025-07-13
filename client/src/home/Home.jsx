import { useEffect } from "react";
import ProjectCard from "../projects/ProjectCard";
import RotatingText from "../components/RotatingText";
import Navbar from "../components/Navbar";

const drawCanvas = (id, showCircle, height) => {
  const canvas = document.getElementById(id);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.height = height;

  const centerX = canvas.width / 2;
  const radius = 6;
  const color = "#5318cc";

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (showCircle) {
    ctx.beginPath();
    ctx.arc(centerX, radius + 2, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  ctx.beginPath();
  ctx.moveTo(centerX, showCircle ? radius * 2 + 4 : 0);
  ctx.lineTo(centerX, canvas.height);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
};

const Home = () => {
  useEffect(() => {
    drawCanvas("canvas1", true, 250);
    drawCanvas("canvas2", false, 300);
    drawCanvas("canvas3", false, 200);

    drawCanvas("canvas4", true, 250);
    drawCanvas("canvas5", false, 300);
    drawCanvas("canvas6", false, 300);

    drawCanvas("canvas7", false, 400);
    drawCanvas("canvas8", false, 500);
    drawCanvas("canvas9", false, 600);
  }, []);

  return (
    <div className="scrollable relative ">
      <div>
        <Navbar />
      </div>
      {/* Section 1: Home */}
      <section className="relative h-screen overflow-hidden bg-[#18181b] text-white px-6 md:px-68 pt-80">
        <div className="absolute top-80 -left-4 md:left-[18%] z-10">
          <canvas id="canvas1" width="70" />
          <canvas id="canvas2" width="70" />
          <canvas id="canvas3" width="70" />
        </div>

        <div className="relative left-4 md:left-[10%] ">
          <h1 className="text-purple-400 text-sm md:text-base mb-4 font-mono">Home /&gt;</h1>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
            Hi, my name is <span className="text-purple-500">Prakash Suthar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl italic font-light text-gray-300 mb-4">
            I <span className="italic text-white">design</span> and{" "}
            <span className="font-semibold text-white">develop</span> <RotatingText />
          </h2>

          <p className="text-md md:text-lg text-gray-400 mt-8">Let me show you...</p>
        </div>
      </section>

      <section className="relative overflow-hidden  min-h-screen bg-[#18181b] text-white px-6 md:px-68 pt-80">
        <div className="-mt-60">
          <div className="absolute  -left-4 md:left-[18%] z-0">
            <canvas id="canvas4" width="70" />
            <canvas id="canvas6" width="70" />
            <canvas id="canvas5" width="70" />
            <canvas id="canvas7" width="70" />
            <canvas id="canvas8" width="70" />
            <canvas id="canvas9" width="70" />
          </div>

          <div className="relative left-4 md:left-[10%] ">
            <h1 className="text-purple-400 text-sm md:text-base mb-2 font-mono">Work /&gt;</h1>
            <h1 className="text-2xl opacity-45 md:text-3xl font-bold leading-snug ">
              Selected web projects...
            </h1>
          </div>

          <div className="z-50 mt-14 relative left-18 sm:left-0">
            <div>
              <ProjectCard imageSrc="/images/poplix/poplix1.png" text="Poplix Social Media App" />
            </div>
            <div className="relative top-20 sm:top-30 sm:left-[530px]">
              <ProjectCard imageSrc="/images/youtube/youtube.png" text="Video Streaming Plateform Youtube" />
            </div>
            <div className="relative top-40 sm:-top-[400px] sm:left-[1180px]">
              <ProjectCard imageSrc="/images/novio/novio.png" text="Novio The Fashion Brand" />
            </div>
            <div className="relative top-60 sm:-top-0 sm:left-11">
              <ProjectCard imageSrc="/images/whatsapp/whatsapp.png" text="Chat Application What'sapp" />
            </div>
            <div className="relative top-[300px] sm:left-[1080px] sm:-top-50">
              <ProjectCard imageSrc="/images/virtualWindow/virtualwindow.png" text="Our Own Virtual Window" />
            </div>
            <div className="relative top-[380px] sm:left-[600px] sm:top-[-100px]">
              <ProjectCard imageSrc="/images/todo/Todo.png" text="Advance Todo App" />
            </div>

          </div>

          <div className="relative left-4 md:left-[10%] top-96 sm:top-0  mt-14 ">
            <h1 className="text-2xl opacity-45 md:text-3xl font-bold leading-snug ">
              More coming soon...
            </h1>
          </div>

          <div className="z-50 mt-60 sm:mt-32 relative left-18 sm:left-0">
            <div className="relative top-[240px] sm:-top-0 sm:left-11">
              <ProjectCard imageSrc="/images/bg21.png" text="Luxe Buy. Sell. Be Luxe" />
            </div>
            <div className="relative top-[320px] sm:left-[1080px] sm:-top-50">
              <ProjectCard imageSrc="/images/bg21.png" text="Meet. Talk. Collaborate" />
            </div>
            <div className="relative top-[460px] sm:left-[600px] sm:top-[-100px]">
              <ProjectCard imageSrc="/images/bg21.png" text="Unlock Your Home’s True Worth." />
            </div>
          </div>

        </div>
      </section >

    </div >
  );
};

export default Home;
