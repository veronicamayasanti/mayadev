import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";

function Techcnologies() {
  return (
    <div className="pb-24">
      <h2 className="my-24 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
          <TbBrandHtml5 className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <TbBrandCss3 className="text-7xl text-red-500" />
        </div>
        <div className="p-4">
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </div>
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-sky-500" />
        </div>
        <div className="p-4">
          <TbBrandTailwind className="text-7xl text-yellow-500" />
        </div>
        <div className="p-4">
          <FaNode className="text-7xl text-red-500" />
        </div>
        <div className="p-4">
          <SiMysql className="text-7xl text-green-500" />
        </div>
      </div>
    </div>
  );
}

export default Techcnologies;
