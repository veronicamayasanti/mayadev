import { EXPERIENCES } from "../constants/index.js";
function Experiences() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experiences</h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-2xl font-bold">{experience.year}</p>
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <h3 className="mb-2  font-bold">
                {experience.role} -{" "}
                <span className="text-sm text-sky-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-white">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span className="mr-2 mt-4 rounded bg-sky-500 px-2 py-1 text-sm font-medium text-white" key={index}>
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

export default Experiences;
