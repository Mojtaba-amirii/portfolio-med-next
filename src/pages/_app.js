import "@/styles/globals.css";
import Link from "next/link";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="flex flex-col sticky top-0 bg-black  border-b-[3px] border-blue-700 border-opacity-50 justify-between items-center mx-40 mt-10 md:flex-row md:gap-5 ">
        <div className="flex flex-row gap-2 text-2xl font-bold  md:justify-center lg:gap-5">
          <img
            src="MUJI.jpg"
            className="w-[40px] rounded-full md:w-[60px]"
            alt="Mojtaba Amiri picture"
          ></img>
          <h4 className="justify-center bg-gradient-to-r from-blue-700 via-green-500 to-indigo-400  text-transparent bg-clip-text lg:mt-3">
            Mojtaba Amiri
          </h4>
        </div>
        <ul className="flex flex-row gap-2 font-bold  m-4 md:flex-row  md:gap-2 md:flex-end lg:flex-end lg:gap-10">
          <li className=" text-blue-700 hover:text-blue-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/about">About Me</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/techStack"> Tech Stack</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/projects"> Projects</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/contact">Contact</Link>
          </li>
          <div className="flex flex-row gap-3 items-center">
            <li className="text-blue-700 hover:text-blue-400  text-4xl cursor-pointer">
              <a
                href="https://www.linkedin.com/in/mojtaba-amiri-a26208173/"
                target="blank"
              >
                <TiSocialLinkedinCircular />
              </a>
            </li>
            <li className="text-blue-700 hover:text-blue-400 text-3xl cursor-pointer">
              <a href="https://github.com/Mojtaba-amirii" target="blank">
                <AiFillGithub />
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
//hej
