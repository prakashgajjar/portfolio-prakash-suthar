import {  useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomCursor from "../components/CustomeCursor.jsx";

const ProjectShow = ({project , handlePrev ,handleNext}) => {
    // console.log("projecys ahc asr : ",project)
    console.log(handleNext)
    const navigate = useNavigate()
    return (
        <div><div className="flex flex-col-reverse h-screen cursor-none lg:flex-row bg-black text-white">
            <div className="hidden sm:block">
                <CustomCursor />
            </div>

            <div className="w-full h-screen overflow-scroll lg:w-2/3 flex flex-col gap-4 p-8">
                {project.images?.length ? (
                    project.images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Screenshot ${i + 1}`}
                            className="w-full rounded-lg object-cover shadow-lg"
                        />
                    ))
                ) : (
                    <p className="text-gray-400">No images yet 🫣</p>
                )}
            </div>

            <div className="w-full lg:w-1/3 p-8 flex flex-col gap-20">
                <div className="flex justify-between mt-8">
                    <button
                        onClick={() => navigate("/#work")}
                        className="text-gray-400 hover:text-white transition"
                    >
                        &larr; Work
                    </button>
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
                        {project.hashtags?.join(", ")}
                    </p>

                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="mb-4 text-gray-300">{project.description}</p>

                    <div className="flex items-center gap-6 mt-4 flex-wrap">
                        {project.visitLink && (
                            <a
                                href={project.visitLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition"
                            >
                                VISIT
                            </a>
                        )}

                        <a
                            href={project.GithubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition text-2xl"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href={project.linkdinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default ProjectShow