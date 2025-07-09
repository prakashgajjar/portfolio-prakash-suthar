import { useEffect } from "react";

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
    drawCanvas("canvas3", false, 300);

    drawCanvas("canvas4", true, 250);
    drawCanvas("canvas5", false, 300);
    drawCanvas("canvas6", false, 300);

    drawCanvas("canvas7", true, 250);
    drawCanvas("canvas8", false, 300);
    drawCanvas("canvas9", false, 300);
  }, []);

  return (
    <div className="scrollable relative">
      {/* Section 1: Home */}
      <section className="relative h-screen bg-[#18181b] text-white px-6 md:px-68 pt-80">
        <div className="absolute top-80 -left-4 md:left-[18%] z-40">
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
            <span className="font-semibold text-white">develop</span> websites
          </h2>
          <p className="text-md md:text-lg text-gray-400 mt-8">Let me show you...</p>
        </div>
      </section>

      <section className="relative h-screen bg-black text-white px-6 md:px-68 pt-80">
        <div className="-mt-60">
          <div className="absolute  -left-4 md:left-[18%] z-40">
            <canvas id="canvas4" width="70" />
            <canvas id="canvas5" width="70" />
            <canvas id="canvas6" width="70" />
          </div>

          <div className="relative left-4 md:left-[10%] ">
            <h1 className="text-purple-400 text-sm md:text-base mb-4 font-mono">Work /&gt;</h1>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
