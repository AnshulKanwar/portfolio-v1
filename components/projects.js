import Image from "next/image";
import { DiGithubBadge } from "react-icons/di";
import Section from "./section";

export default function Projects() {
  return (
    <Section title="Projects" id="projects">
      <div className="flex space-x-10">
        <Image src="/images/todo.png" alt="" width={276} height={560} />
        <div className="text-left flex flex-col justify-center space-y-3">
          <h5 className="text-3xl font-bold">A Todo App</h5>
          <p className="text-slate-400">built using <a href="https://reactnative.dev/">React Native</a></p>
          <p className="text-blue-600 flex items-center"><DiGithubBadge className="text-xl"/><a href="https://github.com/K3rnalP4n1c/todo-react-native">source</a></p>
        </div>
      </div>
    </Section>
  );
}
