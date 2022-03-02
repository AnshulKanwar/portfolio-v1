import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Skills from "../components/skills";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
