import MySkills from "./MySkills";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center justify-center mx-40 my-10 lg:mt-40 lg:gap-40    ">
      <section className="flex flex-col w-full md:flex-row gap-10">
        <div className="flex flex-col gap-10 justify-center items-center md:w-1/2 ">
          <marquee>
            <h1 className="text-xl text-blue-400 font-semibold ml-4">
              Hello, my name is Mojtaba and I am studying to become a front-end
              developer.
            </h1>
          </marquee>
        </div>
        <div className="md:w-1/2">
          <img
            className="rounded-3xl md:min-w-96"
            src="https://cdn.glitch.global/b3e16d1d-347e-47c4-9209-5ec30e9cabe2/1_HdBFQ9EO_Vc4-lHKShFbAQ%20(1).png?v=1652890118769"
          />
        </div>
      </section>
      <MySkills />
      <Projects />
    </main>
  );
}
