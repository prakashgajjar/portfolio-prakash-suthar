import { useEffect, useState } from "react";
import ProjectCard from "../projects/ProjectCard.jsx";
import RotatingText from "../components/RotatingText.jsx";
import Navbar from "../components/Navbar.jsx";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom";
import CustomCursor from "../components/CustomeCursor.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import GetInTouchPopup from "../components/GetInTouchPopup.jsx";
import MessageSentPopup from "../components/MessageSentPopup.jsx";

const projects = [{
  "_id": {
    "$oid": "686f9d236939fb0ac8c66ba5"
  },
  "title": "Poplix Social Media App",
  "slug": "poplix-social-media-app",
  "description": "Poplix is a social media app built with JavaScript where users can connect, share, and interact in real time. Includes features like posts, comments, likes, and live chat.",
  "hashtags": [
    "#React",
    "#NodeJS",
    "#Express",
    "#MongoDB",
    "#MERN"
  ],
  "images": [
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140496/Screenshot_2025-06-30_224427_iwe2d6.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140488/Screenshot_2025-06-30_224442_veprzj.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140480/Screenshot_2025-06-30_224546_ljawnu.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140499/Screenshot_2025-06-30_224623_dgegxa.png"
  ],
  "visitLink": "https://poplix.vercel.app",
  "GithubLink": "https://github.com/prakashgajjar/poplix-js",
  "order": 1,
  "createdAt": {
    "$date": "2025-07-10T10:59:47.588Z"
  },
  "__v": 0,
  "linkdinLink": "https://www.linkedin.com/posts/prakash-suthar-15968127a_poplix-socialmediaapp-applaunch-activity-7345502551611445249-P4E6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQWN5UBS5tFFbHUPLQY-IzuUQeZ0H5CoLc",
  "index": 1
},
{
  "_id": {
    "$oid": "6873b7cda459456e15bb0b7b"
  },
  "title": "YouTube Video Streaming App",
  "slug": "youtube-clone",
  "description": "This is a YouTube clone built with JavaScript using the MERN stack. Users can upload, watch, like, and comment on videos. It includes real-time streaming, subscriptions, and personalized video recommendations.",
  "hashtags": [
    "#React",
    "#NodeJS",
    "#Express",
    "#MongoDB",
    "#MERN",
    "#YouTubeClone"
  ],
  "images": [
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140467/Screenshot_2025-07-10_115134_pitu0k.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140396/Screenshot_2025-07-10_134125_mcyvhu.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140401/Screenshot_2025-07-10_134114_z6z8bp.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140353/Screenshot_2025-07-10_134133_tbgegj.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140319/Screenshot_2025-07-10_134150_fdie26.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140329/Screenshot_2025-07-10_134141_wkfewm.png"
  ],
  "visitLink": "",
  "GithubLink": "https://github.com/prakashgajjar/youtube_clone",
  "order": 2,
  "createdAt": {
    "$date": "2025-07-13T13:42:37.961Z"
  },
  "__v": 0,
  "linkdinLink": "https://www.linkedin.com/posts/prakash-suthar-15968127a_mernstack-youtubeclone-ffmpeg-activity-7335351753355214848-ZADb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQWN5UBS5tFFbHUPLQY-IzuUQeZ0H5CoLc",
  "index": 2
},
{
  "_id": {
    "$oid": "6873b938a459456e15bb0b7e"
  },
  "title": "Novio - The Fashion Brand",
  "slug": "novio-fashion-brand",
  "description": "Novio is a modern fashion brand e-commerce platform built with the MERN stack. It offers stylish collections, seamless shopping, secure checkout, user authentication, and an admin dashboard to manage products and orders.",
  "hashtags": [
    "#React",
    "#NodeJS",
    "#Express",
    "#MongoDB",
    "#MERN",
    "#Ecommerce",
    "#FashionBrand"
  ],
  "images": [
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140394/Screenshot_2025-07-10_133905_euwmja.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140454/Screenshot_2025-07-10_114745_rb0imo.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140452/Screenshot_2025-07-10_114530_isy99j.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140347/Screenshot_2025-07-10_133540_iuasst.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140395/Screenshot_2025-07-10_133529_sdovgk.png",
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140351/Screenshot_2025-07-10_133846_e3yygw.png"
  ],
  "visitLink": "",
  "GithubLink": "https://github.com/prakashgajjar/Novio-e-commerce",
  "order": 3,
  "createdAt": {
    "$date": "2025-07-13T13:48:40.598Z"
  },
  "__v": 0,
  "linkdinLink": "https://www.linkedin.com/posts/prakash-suthar-15968127a_novio-fashionisfreedom-womensfashion-activity-7293955799939215360-HCDq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQWN5UBS5tFFbHUPLQY-IzuUQeZ0H5CoLc",
  "index": 3
},
{
  "_id": {
    "$oid": "6873cb178d3d4964c6dbdca1"
  },
  "title": "WhatsApp Chatting app",
  "slug": "whatsapp-clone",
  "description": "This is a real-time chat application inspired by WhatsApp, built with the MERN stack and Socket.IO. Users can send messages, create group chats, and enjoy seamless live communication with secure connections.",
  "hashtags": [
    "#React",
    "#NodeJS",
    "#Express",
    "#MongoDB",
    "#MERN",
    "#SocketIO",
    "#ChatApp"
  ],
  "images": [
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140465/Screenshot_2025-07-10_114311_xiuw7r.png"
  ],
  "visitLink": "",
  "GithubLink": "https://github.com/prakashgajjar/whatsApp",
  "order": 4,
  "createdAt": {
    "$date": "2025-07-13T15:04:55.684Z"
  },
  "__v": 0,
  "linkdinLink": "https://www.linkedin.com/posts/prakash-suthar-15968127a_innovation-mern-socketio-activity-7298988340836507648-cGVr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQWN5UBS5tFFbHUPLQY-IzuUQeZ0H5CoLc",
  "index": 4
},
{
  "_id": {
    "$oid": "6873cd368d3d4964c6dbdca6"
  },
  "title": "Novio Genisis Ai Chat App",
  "slug": "novio-genisis-ai-chat-app",
  "description": "AI ChatBox is an intelligent real-time chat application powered by Gemini ai. Built with the MERN stack, it allows users to chat naturally with an AI, get instant smart replies, and enjoy an interactive chatbot experience.",
  "hashtags": [
    "#React",
    "#NodeJS",
    "#Express",
    "#MongoDB",
    "#MERN",
    "#OpenAI",
    "#AIChat",
    "#ChatBot"
  ],
  "images": [
    "https://res.cloudinary.com/dgbzruua4/image/upload/v1752419459/1739443378782_lrd7fw.jpg"
  ],
  "visitLink": "",
  "GithubLink": "https://github.com/prakashgajjar/AI-ChatBox",
  "order": 5,
  "createdAt": {
    "$date": "2025-07-13T15:13:58.540Z"
  },
  "__v": 0,
  "linkdinLink": "https://www.linkedin.com/posts/prakash-suthar-15968127a_ai-chatbot-geminiai-activity-7295754351971606530-_Olm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQWN5UBS5tFFbHUPLQY-IzuUQeZ0H5CoLc",
  "index": 5
}]
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


const positions = [
  "relative top-0 mt-14  sm:left-0",
  "relative top-20 sm:top-30 sm:left-[530px]",
  "relative top-40 sm:-top-[400px] sm:left-[1180px]",
  "relative top-60 sm:-top-0 sm:left-11",
  "relative top-[300px] sm:left-[1080px] sm:-top-50",
  "relative top-[380px] sm:left-[600px] sm:top-[-100px]",
  "relative top-[460px] sm:left-[200px] sm:top-[-150px]",
  "relative top-[540px] sm:left-[800px] sm:top-[-200px]",
  "relative top-[620px] sm:left-[1300px] sm:top-[-250px]"
];

const Home = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showSentPopup, setShowSentPopup] = useState(false);

  const handleSent = () => {
    setShowPopup(false);
    setShowSentPopup(true);
  };

  useEffect(() => {
    AOS.init({
      once: true
    })

  }, []);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


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
    drawCanvas("canvas10", true, 700);
    drawCanvas("canvas11", false, 800);
    drawCanvas("canvas12", false, 900);
    drawCanvas("canvas13", true, 1000);

  }, []);


  return (
    <div className="scrollable relative ">
      <div>
        <div className="hidden sm:block">
          <CustomCursor />
        </div>
        <Navbar />
      </div>
      {/* Section 1: Home */}
      <section id="home" className="relative h-screen overflow-hidden bg-[#18181b] text-white px-6 md:px-68 pt-80">
        <div className="absolute top-80 -left-4 md:left-[18%] z-10">
          <canvas id="canvas1" width="70" />
          <canvas id="canvas2" width="70" />
          <canvas id="canvas3" width="70" />
        </div>

        <div className="relative left-4 md:left-[10%] overflow-hidden">
          {/* Content with same positioning */}
          <div>
            <h1 className="text-purple-400 text-sm md:text-base mb-4 font-mono fade-in-up delay-500">
              Home /&gt;
            </h1>

            <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4 fade-in-up delay-600">
              Hi, my name is{" "}
              <span className="text-purple-500 fade-in-up delay-600">Prakash Suthar</span>
            </h1>

            <h2 className="text-2xl md:text-3xl italic font-light text-gray-300 mb-4 fade-in-up delay-1000">
              I <span className="italic text-white">design</span> and{" "}
              <span className="font-semibold text-white">develop</span> <RotatingText />
            </h2>

            <p className="text-md md:text-lg text-gray-400 mt-8 fade-in-up delay-1500">
              Let me show you...
            </p>
          </div>
        </div>


      </section>

      <section id="work" className="relative overflow-hidden  min-h-[120vh] bg-[#18181b] text-white px-6 md:px-68 pt-80">
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

            {
              projects.map((project, index) => (
                <div key={index} className={positions[index]}
                  data-aos={positions[index] === "right" ? "fade-left" : "fade-right"}
                  data-aos-duration="500"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"

                  onClick={() => {
                    Navigate(`/projects/${project.slug}`);
                  }}
                >
                  <ProjectCard imageSrc={project.images[0]} text={project.title} />
                </div>
              ))
            }
          </div>

        </div>
      </section >

      <section id="about" className="relative overflow-hidden  min-h-screen bg-[#18181b] text-white px-6 md:px-68 pt-80">
        <div className="-mt-60">
          <div className="absolute  -left-4 md:left-[18%] z-0">
            <canvas id="canvas10" width="70" />
            <canvas id="canvas11" width="70" />
            <canvas id="canvas12" width="70" />
          </div>

          <div className="relative left-4 md:left-[10%] ">
            <h1 className="text-purple-400 text-sm md:text-base mb-2 font-mono">About /&gt;</h1>
          </div>

          <div className="mt-10 relative left-4 md:left-[10%]">
            <pre className="whitespace-pre-wrap text-sm md:text-lg font-mono leading-relaxed">
              <code className="block font-mono text-sm md:text-base leading-relaxed">
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-yellow-400">class</span> PrakashSuthar {'{'}
                </div>

                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-gray-400">  // I can, because I do.</span>
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-gray-400">  // My skills are growing every day.</span>
                </div>

                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-yellow-400">  constructor</span>() {'{'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-red-500">    this</span>.name = <span className="text-green-400">'Prakash Suthar'</span>
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-red-500">    this</span>.role = <span className="text-green-400">'Full-Stack MERN & Next.js Developer & AI/ML Enthusiast'</span>
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-red-500">    this</span>.email = <span className="text-green-400">'prakashgajjar096@gmail.com'</span>
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-red-500">    this</span>.basedIn = <span className="text-green-400">'India'</span>
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">{'}'}</div>

                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-yellow-400">  workExperience</span>() {'{'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-yellow-400">    return</span> [
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  {'      { '}<span className="text-green-400">'2024-now'</span>: <span className="text-green-400">'Full-Stack Developer && Deep Learning learner'</span> {'},'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  {'      { '}<span className="text-green-400">'2023-2024'</span>: <span className="text-green-400">'MERN Developer & Next.jsxxxx - Social Platforms & AI Tools'</span> {'}'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  {'    ];'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">{'  }'}</div>

                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-yellow-400">  education</span>() {'{'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-yellow-400">    return</span> [
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  {'      { '}<span className="text-green-400">'2023-2027'</span>: <span className="text-green-400">'Bachelor’s Degree - Computer Science / IT'</span> {'},'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  {'      { '}<span className="text-green-400">'Always'</span>: <span className="text-green-400">'Self-learning through projects'</span> {'}'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  {'    ];'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">{'  }'}</div>

                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-yellow-400">  skills</span>() {'{'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-yellow-400">    return</span> [
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-green-400">'HTML/CSS/JS/Ts'</span>,
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Express'</span>, <span className="text-green-400">'MongoDB'</span>,
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'TailwindCSS'</span>, <span className="text-green-400">'Socket.IO'</span>,
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-green-400">'Java'</span>, <span className="text-green-400">'Python'</span>, <span className="text-green-400">'NumPy'</span>, <span className="text-green-400">'Pandas'</span>, <span className="text-green-400">'Matplotlib'</span>,
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-green-400">'REST APIs'</span>, <span className="text-green-400">'JWT/Auth'</span>, <span className="text-green-400">'Git/GitHub'</span>,
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-green-400">'FFmpeg'</span>, <span className="text-green-400">'OpenAI API'</span>, <span className="text-green-400">'AWS Basics'</span>,
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  <span className="text-green-400">'UI/UX'</span>, <span className="text-green-400">'Design Thinking'</span>
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">
                  {'    ];'}
                </div>
                <div className="hover:bg-gray-800/50 px-2 rounded">{'  }'}</div>

                <div className="hover:bg-gray-800/50  px-2 rounded">{'}'}</div>
              </code>

            </pre>

          </div>
        </div>
      </section >

      <section id="contact" className="relative overflow-hidden min-h-[600px] bg-[#18181b] text-white px-6 md:px-68 pt-80">
        <div className="-mt-60">
          <div className="absolute  -left-4 md:left-[18%] z-0">
            <canvas id="canvas13" width="70" />
          </div>

          <div className="relative left-4 md:left-[10%] ">
            <h1 className="text-purple-400 text-sm md:text-base mb-2 font-mono">Contact /&gt;</h1>
          </div>

          <div className="mt-10 relative left-4 md:left-[10%]">
            <h2 className="text-white text-lg mb-4 font-semibold">Find me on:</h2>

            <div className="bg-[#18181b] text-purple-500 mt-10 mb-10 flex flex-col md:flex-row flex-wrap items-start gap-12 md:gap-24 rounded-lg">

              {/* Column 1 */}
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/prakash-suthar-15968127a/" target="_blank" className="hover:underline">
                      in/prakashgajjar
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGithub />
                    <a href="https://github.com/prakashgajjar" target="_blank" className="hover:underline">
                      github.com/prakashgajjar
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaInstagram />
                    <a href="https://www.instagram.com/prksh.suthar/" target="_blank" className="hover:underline">
                      @PrakashGajjar
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaTwitter />
                    <a href="https://x.com/Prakash80180577" target="_blank" className="hover:underline">
                      @PrakashGajjar
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEnvelope />
                    <a href="mailto:prakashgajjar096@gmail.com" className="hover:underline">
                      prakashgajjar096@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowPopup(true)}
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-white font-mono font-bold shadow-lg hover:shadow-purple-500/50 transition"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section >
      <GetInTouchPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSent={handleSent}

      />
      <MessageSentPopup
        show={showSentPopup}
        onClose={() => setShowSentPopup(false)}
      />
    </div >
  );
};

export default Home;
