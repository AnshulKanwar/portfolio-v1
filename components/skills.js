import Section from "./section";
import {
  DiReact,
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiLinux,
  DiNodejsSmall,
  DiPython,
  DiSwift,
  DiUnitySmall,
} from "react-icons/di";

import {
  SiC,
  SiCplusplus,
  SiGatsby,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiOpengl,
  SiArduino,
  SiGnubash,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

export default function Skills() {
  return (
    <Section title="Skills" id="skills">
      <div className="text-4xl flex flex-col items-center space-y-10">
        <div className="flex space-x-8 items-center">
          <DiJsBadge className="hover:text-[#F0D63C]" />
          <DiReact className="text-5xl hover:text-[#5FDBFA]" />
          <DiHtml5 className="hover:text-[#EA632A]" />
          <DiCss3 className="hover:text-[#2EA6D9]" />
          <DiBootstrap className="text-5xl hover:text-[#8512FB]" />
          <SiGatsby className="hover:text-[#663399]" />
          <SiNextdotjs />
          <SiRedux className="hover:text-[#754BB2]" />
        </div>
        <div className="flex space-x-8 items-center">
          <DiNodejsSmall className="text-5xl hover:text-[#42BA50]" />
          <DiLinux className="" />
          <DiPython className="text-5xl hover:text-[#4080B0]" />
          <SiNumpy className="hover:text-[#003243] dark:hover:text-[#008BBA]" />
          <SiPandas className="hover:text-[#090052] dark:hover:text-[#4831FF]" />
          <SiTailwindcss className="hover:text-[#16B3B7]" />
        </div>
        <div className="flex space-x-8 items-center">
          <SiC className="hover:text-[#00427D]" />
          <SiCplusplus className="hover:text-[#025399]" />
          <SiOpengl className="text-7xl hover:text-[#5184AF]" />
          <DiSwift className="text-5xl hover:text-[#F05139]" />
          <DiUnitySmall className="text-5xl" />
          <SiArduino className="text-5xl hover:text-[#00979E]" />
          <SiGnubash className="hover:text-[#4BA21C]" />
        </div>
      </div>
    </Section>
  );
}
