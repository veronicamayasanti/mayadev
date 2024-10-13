import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
function App() {
  return (
    <div className="overflow-x-hidden text-sky-100 antialiased ">
      <div className="fixed inset-0 -z-10">
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-5 ">
        <NavBar />
        <Hero />

        <TechStack />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </div>
  );
}

export default App;
