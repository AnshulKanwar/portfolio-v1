import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import Section from "./section";

export default function Contact() {
  return (
    <Section title="Lets Talk" id="contact">
      <div>
        <ul className="lg:text-left text-slate-500 dark:text-slate-300 space-y-3">
          <a className="flex items-center" href="https://github.com/K3rnalP4n1c"><DiGithubBadge className="mr-1" />Github</a>
          <a className="flex items-center" href="https://www.linkedin.com/in/anshul-kanwar/"><BsLinkedin className="mr-1"/>LinkedIn</a>
          <a className="flex items-center" href="mailto:anshulkanwar@icloud.com"><HiMail className="mr-1"/>Send mail</a>
        </ul>
      </div>
    </Section>
  )
}