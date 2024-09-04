import Link from "next/link";
import NavBar from "./navbar/page";
import About from "./about/page";
import Career from "./career/page";
import Education from "./education/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <main>
      <NavBar />
      <About />
      <Career />
      <Education />
      <Contact />     
    </main>
  );
}
