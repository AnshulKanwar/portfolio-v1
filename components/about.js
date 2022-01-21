import Section from "./section";

export default function About() {
  return (
    <Section title="About Me" id="about">
      <div className="max-w-lg">
        <p className="lg:text-left text-slate-500 dark:text-slate-300">
          I am <span className="font-bold">Anshul Kanwar</span>, a Computer
          Science Student living in India.
          <br />
          <br />I love <span className="font-bold">computers</span> and have
          been working with them for the past five years.
          <br />
          My main interests include{" "}
          <span className="font-bold">Web Development</span>,{" "}
          <span className="font-bold">Computer Graphics</span>, and
          <span className="font-bold">Computer Architecture.</span>,{" "}
        </p>
      </div>
    </Section>
  );
}
