import { About, NavBar, Skill } from "@/components";
import { Main } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Main />
      <About />
      <Skill />
    </main>
  );
}
