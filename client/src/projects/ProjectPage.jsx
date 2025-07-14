import { useParams, useNavigate } from "react-router-dom";
import ProjectShow from "./ProjectShow";



const ProjectPage = () => {

  const projects = [
    {
      _id: "686f9d236939fb0ac8c66ba5",
      title: "Poplix Social Media App",
      slug: "poplix-social-media-app",
      description:
        "Poplix is a social media app built with JavaScript where users can connect, share, and interact in real time. Includes features like posts, comments, likes, and live chat.",
      hashtags: ["#React", "#NodeJS", "#Express", "#MongoDB", "#MERN"],
      images: [
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140496/Screenshot_2025-06-30_224427_iwe2d6.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140488/Screenshot_2025-06-30_224442_veprzj.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140480/Screenshot_2025-06-30_224546_ljawnu.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140499/Screenshot_2025-06-30_224623_dgegxa.png",
      ],
      visitLink: "https://poplix.vercel.app",
      GithubLink: "https://github.com/prakashgajjar/poplix-js",
      linkdinLink:
        "https://www.linkedin.com/posts/prakash-suthar-15968127a_poplix-socialmediaapp-applaunch-activity-7345502551611445249-P4E6",
      index: 1,
    },
    {
      _id: "6873b7cda459456e15bb0b7b",
      title: "YouTube Video Streaming App",
      slug: "youtube-clone",
      description:
        "This is a YouTube clone built with JavaScript using the MERN stack. Users can upload, watch, like, and comment on videos. It includes real-time streaming, subscriptions, and personalized video recommendations.",
      hashtags: [
        "#React",
        "#NodeJS",
        "#Express",
        "#MongoDB",
        "#MERN",
        "#YouTubeClone",
      ],
      images: [
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140467/Screenshot_2025-07-10_115134_pitu0k.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140396/Screenshot_2025-07-10_134125_mcyvhu.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140401/Screenshot_2025-07-10_134114_z6z8bp.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140353/Screenshot_2025-07-10_134133_tbgegj.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140319/Screenshot_2025-07-10_134150_fdie26.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140329/Screenshot_2025-07-10_134141_wkfewm.png",
      ],
      visitLink: "",
      GithubLink: "https://github.com/prakashgajjar/youtube_clone",
      linkdinLink:
        "https://www.linkedin.com/posts/prakash-suthar-15968127a_mernstack-youtubeclone-ffmpeg-activity-7335351753355214848-ZADb",
      index: 2,
    },
    {
      _id: "6873b938a459456e15bb0b7e",
      title: "Novio - The Fashion Brand",
      slug: "novio-fashion-brand",
      description:
        "Novio is a modern fashion brand e-commerce platform built with the MERN stack. It offers stylish collections, seamless shopping, secure checkout, user authentication, and an admin dashboard to manage products and orders.",
      hashtags: [
        "#React",
        "#NodeJS",
        "#Express",
        "#MongoDB",
        "#MERN",
        "#Ecommerce",
        "#FashionBrand",
      ],
      images: [
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140394/Screenshot_2025-07-10_133905_euwmja.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140454/Screenshot_2025-07-10_114745_rb0imo.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140452/Screenshot_2025-07-10_114530_isy99j.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140347/Screenshot_2025-07-10_133540_iuasst.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140395/Screenshot_2025-07-10_133529_sdovgk.png",
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140351/Screenshot_2025-07-10_133846_e3yygw.png",
      ],
      visitLink: "",
      GithubLink: "https://github.com/prakashgajjar/Novio-e-commerce",
      linkdinLink:
        "https://www.linkedin.com/posts/prakash-suthar-15968127a_novio-fashionisfreedom-womensfashion-activity-7293955799939215360-HCDq",
      index: 3,
    },
    {
      _id: "6873cb178d3d4964c6dbdca1",
      title: "WhatsApp Chatting App",
      slug: "whatsapp-clone",
      description:
        "This is a real-time chat application inspired by WhatsApp, built with the MERN stack and Socket.IO. Users can send messages, create group chats, and enjoy seamless live communication with secure connections.",
      hashtags: [
        "#React",
        "#NodeJS",
        "#Express",
        "#MongoDB",
        "#MERN",
        "#SocketIO",
        "#ChatApp",
      ],
      images: [
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752140465/Screenshot_2025-07-10_114311_xiuw7r.png",
      ],
      visitLink: "",
      GithubLink: "https://github.com/prakashgajjar/whatsApp",
      linkdinLink:
        "https://www.linkedin.com/posts/prakash-suthar-15968127a_innovation-mern-socketio-activity-7298988340836507648-cGVr",
      index: 4,
    },
    {
      _id: "6873cd368d3d4964c6dbdca6",
      title: "Novio Genisis Ai Chat App",
      slug: "novio-genisis-ai-chat-app",
      description:
        "AI ChatBox is an intelligent real-time chat application powered by Gemini AI. Built with the MERN stack, it allows users to chat naturally with an AI, get instant smart replies, and enjoy an interactive chatbot experience.",
      hashtags: [
        "#React",
        "#NodeJS",
        "#Express",
        "#MongoDB",
        "#MERN",
        "#OpenAI",
        "#AIChat",
        "#ChatBot",
      ],
      images: [
        "https://res.cloudinary.com/dgbzruua4/image/upload/v1752419459/1739443378782_lrd7fw.jpg",
      ],
      visitLink: "",
      GithubLink: "https://github.com/prakashgajjar/AI-ChatBox",
      linkdinLink:
        "https://www.linkedin.com/posts/prakash-suthar-15968127a_ai-chatbot-geminiai-activity-7295754351971606530-_Olm",
      index: 5,
    },
  ];

  const  slug  = useParams();
  const name = slug.name;
  console.log(name)
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.slug === name);
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  const handlePrev = () => navigate(`/projects/${prev.slug}`);
  const handleNext = () => navigate(`/projects/${next.slug}`);

  const project = projects.find((p) => p.slug == name);
  console.log(project)
  return (
    <div className="h-screen w-screen overflow-hidden">

      <ProjectShow
        project={project}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

    </div>
  );
};

export default ProjectPage;
