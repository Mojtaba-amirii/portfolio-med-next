export default function Projects() {
  return (
    <main className="flex flex-col justify-center items-center gap-10 ">
      <h1 className="text-3xl text-blue-700 font-bold">My latest projects</h1>
      <section className="flex flex-row gap-4">
        <div>
          <h4 className="text-xl font-semibold "> Zoom Redisign</h4>
          <img className="w-[400px] rounded-xl" src="zoom.png"></img>
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
          <img className=" rounded-xl" src="rejoi.png"></img>
          <a
            className="text-xl font-semibold hover:underline hover:text-blue-400"
            href=""
            target="_blank"
          >
            have a look
          </a>
        </div>
      </section>
    </main>
  );
}
