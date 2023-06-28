import { About, Contact, NavBar, Project, Skill } from "@/components";
import { Main } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Main />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
