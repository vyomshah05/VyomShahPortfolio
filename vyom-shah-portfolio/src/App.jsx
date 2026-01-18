import Hero from "./components/Hero";
import About from "./components/About"
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./styles/global.css";
import "./styles/animations.css";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
    </>
  )
}
