import { PROJECTS } from "../constants";
function Projects() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={500}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
              <p className="mb-4 text-white">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-sky-500 p-2 text-sm font-medium text-white"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
