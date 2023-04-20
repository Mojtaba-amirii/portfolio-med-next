import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul className="flex flex-row  first-letter:items-center justify-between font-bold m-4">
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/about">About Me</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/skills"> Skills</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/projects"> Projects</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-400">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
//hej
