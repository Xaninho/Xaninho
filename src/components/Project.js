import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, [] );
    
    return (
        <main className="bg-gray-900 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center text-white">My Project</h1>
                <h2 className="text-lg text-gray-400 flex justify-center mb-12">Welcome to my projects page!</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-gray-800 p-16">
                            <h3 className="text-white text-3xl font-bold mb-2 hover:text-purple-700">
                                <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                >{project.title}</a>
                            </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span>
                                        <strong className="font-bold">Finished on</strong>: {" "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Company</strong>: {" "}
                                        {project.place}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Type</strong>: {" "}
                                        {project.projectType}
                                    </span>
                                    <p className="my-6 text-lg text-white leading-relaxed">
                                        {project.description}
                                    </p>
                                    <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 font-bold hover:underline hover:text-purple-400 text-xl">
                                        View the Project{" "}
                                        <span role="img" aria-label="right pointer">
                                            👉
                                        </span>
                                    </a>
                                </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}