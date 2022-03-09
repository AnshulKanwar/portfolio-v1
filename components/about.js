import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
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
        <div className="mt-5 flex space-x-4 justify-center lg:justify-start">
          <a className="flex items-center p-3 rounded-md bg-gray-500 text-white" href="https://github.com/K3rnalP4n1c" target="_blank" rel="noreferrer noopener"><DiGithubBadge className="mr-1" />Github</a>
          <a className="flex items-center p-3 rounded-md bg-gray-500 text-white" href="https://www.linkedin.com/in/anshul-kanwar/" target="_blank" rel="noreferrer noopener"><BsLinkedin className="mr-1"/>LinkedIn</a>
          <a className="flex items-center p-3 rounded-md bg-gray-500 text-white" href="mailto:anshulkanwar@icloud.com" target="_blank" rel="noreferrer noopener"><HiMail className="mr-1"/>Send mail</a>
        </div>
      </div>
    </Section>
  );
}
