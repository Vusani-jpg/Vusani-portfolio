import Navbar from "../../components/ui/Navbar";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import Projects from "../../components/sections/Projects";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";


export default function Home() {
  return (
    <div className="grid items-center bg-gray-700 justify-items-center min-h-screen gap- sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute inset-0 bg-gradient-to-bl from-background via-background to-primary/5 pointer-events-none overflow-hidden"/>
      <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />


      
			<Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
</div>
      

    //  </div> 
       
    

     
  );
}
