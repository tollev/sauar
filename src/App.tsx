import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCF5E2' }}>
      <Header />
      <Hero />
      <About />
    </div>
  );
}