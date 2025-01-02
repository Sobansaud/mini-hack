import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}