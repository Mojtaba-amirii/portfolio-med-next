import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";

export default function Footer() {
  return (
    <main className="flex flew-row w-full justify-between items-center border-t-[3px] border-blue-700 border-opacity-50 pt-4">
      <section className="flex flex-row justify-center items-center gap-2">
        <div>
          <a
            className=" hover:text-blue-500 text-4xl cursor-pointer"
            href="https://www.linkedin.com/in/mojtaba-amiri-a26208173/"
            target="blank"
          >
            <TiSocialLinkedinCircular />
          </a>
        </div>
        <div>
          <a
            className=" hover:text-blue-500 text-3xl cursor-pointer"
            href="https://github.com/Mojtaba-amirii"
            target="blank"
          >
            <AiFillGithub />
          </a>
        </div>
      </section>
      <section>
        <h2 className="flex flex-row justify-center items-center gap-2">
          Designed and build by{" "}
          <p className=" text-xl font-semibold bg-gradient-to-r from-blue-700 via-fuchsia-500 to-rose-400  text-transparent bg-clip-text">
            Mojtaba Amiri
          </p>{" "}
          with <AiFillHeart className="text-xl" /> and{" "}
          <GiCoffeeCup className="text-2xl" />
        </h2>
      </section>
    </main>
  );
}
