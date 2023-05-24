import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { SiVisualstudiocode } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";

export default function MySkills() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div>
        <h2 className="flex item-center justify-center text-3xl text-blue-700 font-bold py-6">
          My skills
        </h2>
        <p className="item-center justify-center text-xl text-blue-400 font-semibold ml-6">
          Technologies I have been working with
        </p>
      </div>
      <div
        className="gap-4 items-center justify-center mt-10 grid grid-cols-2 
      md:grid-cols-4 md:gap-20 lg:grid-cols-8 lg:gap-20  "
      >
        <AiFillHtml5 size={70} style={{ fill: "orange" }} />
        <DiCss3 size={70} style={{ fill: "lightblue" }} />
        <IoLogoJavascript size={70} style={{ fill: "yellow" }} />
        <SiVisualstudiocode size={69} style={{ fill: "blue" }} />
        <AiFillGithub size={70} style={{ fill: "white" }} />
        <GrReactjs size={70} style={{ fill: "cyan" }} />
        <SiTailwindcss size={71} style={{ fill: "rgb(48, 158, 209)" }} />
        <BsGit size={70} style={{ fill: "rgb(222, 76, 54)" }} />
      </div>
    </main>
  );
}
