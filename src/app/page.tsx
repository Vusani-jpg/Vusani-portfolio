import Navbar from "../../components/ui/Navbar";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import Projects from "../../components/sections/Projects";
import Stats from "../../components/sections/Stats";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";


export default function Home() {
  return (
    <div className="grid items-center bg-gray-700 justify-items-center min-h-screen gap- sm:p-20 font-[family-name:var(--font-geist-sans)]">
      

      
			<Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
</div>
      
     
  );
}
