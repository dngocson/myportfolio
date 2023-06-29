import { About, Contact, Project, Skill } from "@/components";
import { Main } from "@/components";

export default function Home() {
  return (
    <main className="">
      <Main />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
