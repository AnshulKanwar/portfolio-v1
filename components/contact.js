import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import Section from "./section";

export default function Contact() {
  return (
    <Section title="Lets Talk" id="contact">
      <div>
        <ul className="lg:text-left text-slate-500 dark:text-slate-300 space-y-3">
          <a className="flex items-center" href="https://github.com/AnshulKanwar" target="_blank" rel="noreferrer noopener"><DiGithubBadge className="mr-1" />Github</a>
          <a className="flex items-center" href="https://www.linkedin.com/in/anshul-kanwar/" target="_blank" rel="noreferrer noopener"><BsLinkedin className="mr-1"/>LinkedIn</a>
          <a className="flex items-center" href="https://www.instagram.com/_0xanshul/" target="_blank" rel="noreferrer noopener"><BsInstagram className="mr-1"/>Instagram</a>
          <a className="flex items-center" href="mailto:anshulkanwar@icloud.com" target="_blank" rel="noreferrer noopener"><HiMail className="mr-1"/>Send mail</a>
        </ul>
      </div>
    </Section>
  )
}