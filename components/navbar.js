import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full">
      <div className="py-6">
        <div className="flex h-10 justify-around items-center">
          <Link href="/">
            <a>
              <h1 className="text-3xl font-thin">Anshul Kanwar</h1>
            </a>
          </Link>
          <button
            className="sm:hidden"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <IoMenuOutline className="text-3xl" />
          </button>
          <ul className="hidden justify-evenly space-x-8 sm:flex">
            <li>
              <Link href="#about">
                <a>About Me</a>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        {isOpen && (
          <ul className="min-h-screen flex flex-col justify-center space-y-20 items-center">
            <li>
              <Link href="#about">
                <a>About Me</a>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
