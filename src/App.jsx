import Cursor from './components/Cursor';
import Hero from './components/Hero';
import OnTrack from './components/OnTrack';
import Projects from './components/Projects';
import OffTrack from './components/OffTrack';

function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-[#ccff00] selection:text-black">
      {/* The cursor sits at the top level */}
      <Cursor />
      
      <Hero />
      <OnTrack /> 
      <Projects />
      <OffTrack />
      
      <footer className="py-12 bg-black flex flex-col items-center justify-center border-t border-neutral-900">
        <h2 className="text-[#ccff00] text-xl font-bold uppercase tracking-widest mb-4">System Online</h2>
        <p className="text-neutral-500 text-sm font-mono">© 2026 Engineering Portfolio</p>
      </footer>
    </main>
  );
}

export default App;