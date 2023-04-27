import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { SiVisualstudiocode } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24">
      <div className="flex py-10">
        <h1>
          Hello, my name is Mojtaba and I am studying to become a front-end
          developer.
        </h1>
      </div>
      <div>
        <img src="https://cdn.glitch.global/b3e16d1d-347e-47c4-9209-5ec30e9cabe2/1_HdBFQ9EO_Vc4-lHKShFbAQ%20(1).png?v=1652890118769" />
      </div>
      <div className="flex py-10">
        <h4>Technologies I have been working with:</h4>
      </div>
      <div className="flex flex-row gap-5">
        <AiFillHtml5 size={70} style={{ fill: "orange" }} />
        <DiCss3 size={70} style={{ fill: "lightblue" }} />
        <IoLogoJavascript size={70} style={{ fill: "yellow" }} />
        <GrReactjs size={70} style={{ fill: "cyan" }} />
        <AiFillGithub size={70} style={{ fill: "white" }} />
        <SiVisualstudiocode size={70} style={{ fill: "blue" }} />
      </div>
    </main>
  );
}
