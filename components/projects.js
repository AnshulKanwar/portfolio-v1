import Image from "next/image";
import { DiGithubBadge } from "react-icons/di";
import Section from "./section";

export default function Projects() {
  return (
    <Section title="Projects" id="projects">
      <div className="flex space-x-10 items-center flex-col sm:flex-row space-y-10">
        <Image
          src="/images/todo.png"
          alt=""
          width={276}
          height={542}
          layout="intrinsic"
        />
        <div className="text-left flex flex-col justify-center space-y-1">
          <h5 className="text-xl font-bold">A Todo App</h5>
          <p className="text-slate-500 dark:text-slate-300">
            built using{" "}
            <a
              href="https://reactnative.dev/"
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              React Native
            </a>
          </p>
          <p className="text-blue-600 flex items-center hover:underline">
            <DiGithubBadge className="text-xl" />
            <a
              href="https://github.com/AnshulKanwar/todo-react-native"
              target="_blank"
              rel="noreferrer noopener"
            >
              source
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
