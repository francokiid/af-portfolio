import { useEffect } from "react";
import Aos from "aos";
import "../node_modules/aos/dist/aos.css";
import "./App.css";
import { Navbar, Home, About, Skills, Projects, Contact } from "./components";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
