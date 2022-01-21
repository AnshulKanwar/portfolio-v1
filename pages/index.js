import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div>
        <About />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
