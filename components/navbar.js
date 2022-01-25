import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiMoon, HiSun } from "react-icons/hi";

export default function Navbar({ theme, setTheme }) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="w-full">
      <div className="py-6">
        <div className="flex h-12 justify-between mx-16 items-center">
          <Link href="/">
            <a>
              <h1 className="text-3xl font-thin tracking-wide">Anshul Kanwar</h1>
            </a>
          </Link>
          <div>
            <button
              className="md:hidden"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <HiMenu className="text-3xl" />
            </button>
            <div className="hidden md:block">
              <ul className="flex justify-evenly items-center space-x-8 text-slate-500 dark:text-slate-300">
                <li className="hover:text-black dark:hover:text-white">
                  <Link href="/#about">
                    <a>About Me</a>
                  </Link>
                </li>
                <li className="hover:text-black dark:hover:text-white">
                  <Link href="/#projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li className="hover:text-black dark:hover:text-white">
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li className="hover:text-black dark:hover:text-white">
                  <Link href="/#contact">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <button
                    className="ml-5 text-2xl"
                    onClick={() => {
                      setTheme(theme === "dark" ? "light" : "dark");
                    }}
                  >
                    {theme === "dark" ? (
                      <span>
                        <HiMoon />
                      </span>
                    ) : (
                      <span>
                        <HiSun />
                      </span>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isOpen && (
          <AnimatePresence>
            <div className="min-h-[calc(100vh-theme(spacing.12))] flex justify-center items-center md:hidden">
              <motion.ul
                className="flex flex-col justify-center space-y-20 items-center text-slate-500 dark:text-slate-300"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                exit={{ y: "-100%" }}
              >
                <li className="hover:text-black dark:hover:text-white">
                  <Link href="#about">
                    <a>About Me</a>
                  </Link>
                </li>
                <li className="hover:text-black dark:hover:text-white">
                  <Link href="#projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li className="hover:text-black dark:hover:text-white">
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li className="hover:text-black dark:hover:text-white">
                  <Link href="#contact">
                    <a>Contact</a>
                  </Link>
                </li>
                <li className="hover:text-black dark:hover:text-white">
                  <button
                    className=""
                    onClick={() => {
                      console.log(theme);
                      console.log(theme === "dark" ? "light" : "dark");
                      setTheme(theme === "dark" ? "light" : "dark");
                    }}
                  >
                    Set {' '}
                    {theme === "dark" ? (
                      <span>
                        light
                      </span>
                    ) : (
                      <span>
                        dark
                      </span>
                    )}
                    {' '} theme
                  </button>
                </li>
              </motion.ul>
            </div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
}
