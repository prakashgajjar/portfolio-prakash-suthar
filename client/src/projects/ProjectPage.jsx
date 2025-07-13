import React from 'react'

const ProjectPage = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-black text-white ">
            <div className="w-full lg:w-2/3 flex flex-col gap-4 p-8 overflow-auto">
                {[1, 2, 3, 4].map((num) => (
                    <img
                        key={num}
                        src={`/images/poplix/poplix${num}.png`}
                        alt={`poplix${num}`}
                        className="w-full rounded-lg object-cover shadow-lg"
                    />
                ))}
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/3 p-8 flex flex-col gap-20">
                <div className="flex justify-between  mt-8">
                    <button className="text-gray-400 hover:text-white transition">
                        &larr; Back
                    </button>
                    <button className="text-gray-400 hover:text-white transition">
                        Next &rarr;
                    </button>
                </div>
                {/* Tags */}
                <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-4">#Design, #UX, #PHP, #Wordpress, #jQuery, #Vue</p>
                    <h2 className="text-3xl font-bold mb-4">National Geographic Learning</h2>
                    <p className="mb-4 text-gray-300">
                        A blog/offer website for National Geographic Learning. Designed a custom, sleek layout,
                        taking NG Brand Book into account. Developed as a WordPress dedicated theme with custom AJAX
                        timeline stream, SM integration and more.
                    </p>
                    <p className="mb-6 text-gray-400">
                        Also implemented store locator with filter and search - built with Vue.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition"
                    >
                        VISIT
                    </a>
                </div>

                {/* Arrows */}

            </div>

        </div>
    )
}

export default ProjectPage
