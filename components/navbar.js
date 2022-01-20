import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full">
      <div className="py-6">
        <div className="flex h-12 justify-around items-center">
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
          <ul className="hidden justify-evenly space-x-8 sm:flex text-slate-400">
            <li className="hover:text-white">
              <Link href="#about">
                <a>About Me</a>
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        {isOpen && (
          <AnimatePresence>
            <div className="min-h-[calc(100vh-theme(spacing.12))] flex justify-center items-center">
              <motion.ul
                className="flex flex-col justify-center space-y-20 items-center text-slate-400"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                exit={{ y: "-100%" }}
              >
                <li className="hover:text-white">
                  <Link href="#about">
                    <a>About Me</a>
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link href="#projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link href="#contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </motion.ul>
            </div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
}
