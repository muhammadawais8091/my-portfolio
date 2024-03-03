import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-20 mb-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h6 className="text-purple">
          <Link href="/" className="hover:text-purple-400 duration-300">
            {/* <Image src='/logo.png' width={85} height={85} alt="logo" /> */}
            Muhammad Awais
          </Link>
        </h6>

        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}