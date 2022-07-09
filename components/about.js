import { DiGithubBadge } from "react-icons/di";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Section from "./section";

export default function About() {
  return (
    <Section title="About Me" id="about">
      <div className="max-w-lg">
        <p className="lg:text-left text-slate-500 dark:text-slate-300">
          I am <span className="font-bold">Anshul Kanwar</span>, a Computer
          Science Student living in India.
          <br />
          <br />
          I love <span className="font-bold">computers</span> and have
          been working with them for the past five years.
          <br />
          <br />
          My main interests include{" "}
          <span className="font-bold">Web Development</span>,{" "}
          <span className="font-bold">Computer Graphics</span>, and{" "}
          <span className="font-bold">Computer Architecture.</span>
        </p>
        <div className="mt-5 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
          <a className="flex items-center p-2 rounded-md bg-black text-white dark:bg-white dark:text-black" href="https://github.com/AnshulKanwar" target="_blank" rel="noreferrer noopener"><DiGithubBadge className="mr-1 text-2xl" />Github</a>
          <a className="flex items-center p-2 rounded-md bg-black text-white dark:bg-white dark:text-black" href="https://www.linkedin.com/in/anshul-kanwar/" target="_blank" rel="noreferrer noopener"><BsLinkedin className="mr-1 text-xl"/>LinkedIn</a>
          <a className="flex items-center p-2 rounded-md bg-black text-white dark:bg-white dark:text-black" href="https://www.instagram.com/_0xanshul/" target="_blank" rel="noreferrer noopener"><BsInstagram className="mr-1 text-xl"/>Instagram</a>
          <a className="flex items-center p-2 rounded-md bg-black text-white dark:bg-white dark:text-black" href="mailto:anshulkanwar@icloud.com" target="_blank" rel="noreferrer noopener"><HiMail className="mr-1 text-2xl"/>Send mail</a>
        </div>
      </div>
    </Section>
  );
}
