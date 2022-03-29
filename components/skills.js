import Section from "./section";
import {
  DiReact,
  DiJsBadge,
  DiLinux,
  DiRust,
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
  SiIos,
  SiTailwindcss,
  SiOpengl,
  SiGnubash,
} from "react-icons/si";

export default function Skills() {
  return (
    <Section title="Skills" id="skills">
      <div className="text-5xl grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-6 place-items-center">
          <DiLinux className="" />
          <DiRust className="text-6xl hover:text-[#F54903]" />
          <SiIos />
          <DiJsBadge className="hover:text-[#F0D63C]" />
          <DiReact className="hover:text-[#5FDBFA]" />
          <SiGatsby className="hover:text-[#663399]" />
          <SiNextdotjs />
          <SiRedux className="hover:text-[#754BB2]" />
          <DiNodejsSmall className="hover:text-[#42BA50]" />
          <DiPython className="hover:text-[#4080B0]" />
          <SiTailwindcss className="hover:text-[#16B3B7]" />
          <SiC className="hover:text-[#00427D]" />
          <SiCplusplus className="hover:text-[#025399]" />
          <SiOpengl className="hover:text-[#5184AF]" />
          <DiSwift className="hover:text-[#F05139]" />
          <DiUnitySmall className="" />
          <SiGnubash className="hover:text-[#4BA21C]" />
      </div>
    </Section>
  );
}
