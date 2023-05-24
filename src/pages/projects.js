export default function Projects() {
  return (
    <main className="flex flex-col justify-center items-center gap-10 ">
      <h1 className="text-3xl text-blue-700 font-bold">My latest projects</h1>
      <section className="flex flex-row gap-10">
        <div>
          <h4 className="text-xl font-semibold "> Zoom Redisign</h4>
          <img
            className="w-[400px] rounded-xl"
            src="zoom.png"
            alt="zoom redisign picture"
          ></img>
          <a
            className="text-xl font-semibold hover:underline hover:text-blue-400"
            href="https://zoom-redisign-lemon.vercel.app/"
            target="_blank"
          >
            have a look
          </a>
        </div>
        <div>
          <h4 className="text-xl font-semibold "> Rejoi</h4>
          <img className=" rounded-xl" src="rejoi.png" alt="Rejoi Logo"></img>
          <a
            className="text-xl font-semibold hover:underline hover:text-blue-400"
            href=""
            target="_blank"
          >
            have a look
          </a>
        </div>
        <div>
          <h4 className="text-xl font-semibold ">Save the spaceship</h4>
          <img
            className="w-[400px] h-[180px] rounded-xl"
            src="https://cdn.glitch.global/b3e16d1d-347e-47c4-9209-5ec30e9cabe2/Ska%CC%88rmavbild%202022-05-11%20kl.%2019.49.44.png?v=1652291478771"
            alt="An spacecraft lost in space"
            target="_blank"
            loading="lazy"
          ></img>
          <a
            className="text-xl font-semibold hover:underline hover:text-blue-400"
            href="https://acute-jealous-binder.glitch.me/"
            target="_blank"
          >
            have a look
          </a>
        </div>
      </section>
    </main>
  );
}
