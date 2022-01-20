import Section from "./section";

export default function About() {
  return (
    <Section title="About Me" id="about" color="ring-fuchsia-500" shadow="shadow-fuchsia-500">
        <p className="lg:text-left text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, quasi
          eum maiores libero dicta ipsam voluptatibus aperiam nam hic ea nostrum
          voluptatum perferendis autem ducimus nulla temporibus ipsa delectus!
          Enim? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          sit ipsum quidem minus totam perspiciatis sint illo facilis iusto quam
          eos, ut ducimus modi blanditiis vel nisi dicta sunt nam!
        </p>
    </Section>
  );
}