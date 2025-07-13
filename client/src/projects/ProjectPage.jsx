import { useEffect, useState } from "react";
import getOneProject from "../api/getOneProject.api";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomCursor from "../components/CustomeCursor";

const ProjectPage = () => {
  const slug = useParams(); // get slug directly
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const [currentSlug, setCurrentSlug] = useState(slug);

  useEffect(() => {
    getOneProject(slug)
      .then((res) => {
        setCurrentSlug(res.project.slug);
        setProject(res.project);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  const projects = [
    {
      slug: "poplix-social-media-app",
      index: 1,
    },
    {
      slug: "youtube-clone",
      index: 2,
    },
    {
      slug: "novio-fashion-brand",
      index: 3,
    },
    {
      slug: "whatsapp-clone",
      index: 4,
    },
    {
      slug: "novio-genisis-ai-chat-app",
      index: 5,
    },
  ];

  const sorted = projects.sort((a, b) => a.index - b.index);
  const currentIndex = sorted.findIndex((p) => p.slug === currentSlug);

  const prev = sorted[
    (currentIndex - 1 + sorted.length) % sorted.length
  ];
  const next = sorted[(currentIndex + 1) % sorted.length];

  const handlePrev = () => navigate(`/projects/${prev.slug}`);
  const handleNext = () => navigate(`/projects/${next.slug}`);

  return (
    project && (
      <div className="flex flex-col-reverse cursor-none lg:flex-row bg-black text-white">
        {/* Images Section */}
        <div className="hidden sm:block">
          <CustomCursor />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-4 p-8">
          {project?.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-full rounded-lg object-cover shadow-lg"
            />
          ))}
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/3 p-8 flex flex-col gap-20">
          <div className="flex justify-between mt-8">
            <div>
              <button
                onClick={() => navigate("/#work")}
                className="text-gray-400 hover:text-white transition"
              >
                &larr; Work
              </button>
            </div>
            <div className="flex justify-between gap-2">
              <button
                onClick={handlePrev}
                className="text-gray-400 hover:text-white transition"
              >
                &larr; Previous
              </button>
              <button
                onClick={handleNext}
                className="text-gray-400 hover:text-white transition"
              >
                Next &rarr;
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-lg text-gray-400 mb-4">
              {project?.hashtags?.join(", ")}
            </p>

            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="mb-4 text-gray-300">{project.description}</p>

            <div className="flex items-center gap-6 mt-4 flex-wrap">
              {project?.visitLink && (
                <Link
                  to={project.visitLink}
                  className="inline-block px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition"
                >
                  VISIT
                </Link>
              )}

              <a
                href={project?.GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-2xl"
              >
                <FaGithub />
              </a>

              <a
                href={project?.linkdinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProjectPage;
