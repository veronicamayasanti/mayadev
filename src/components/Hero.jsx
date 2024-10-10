import mayadevPic from "../assets/mayadevProfile.jpg";
import {HERO_CONTENT} from "../constants/index"
function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={mayadevPic}
              alt="mayadev"
              className="border border-sky-200 w-3/4 rounded-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-4xl">
              Hi, I'm Mayadev
            </h2>
            <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Front end developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              { HERO_CONTENT }
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-black hover:bg-purple-500 hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
