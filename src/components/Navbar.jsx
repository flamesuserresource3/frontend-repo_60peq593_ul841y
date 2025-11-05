import { useEffect, useState } from 'react';
import { Rocket, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-zinc-900/70 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-400/20 border border-white/10">
            <Rocket className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="font-semibold tracking-tight text-white">NightArrow Agency</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#contact" className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors">Get a quote</a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/10 text-zinc-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900/80 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-3 text-zinc-300">
            <a href="#services" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Services</a>
            <a href="#work" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Work</a>
            <a href="#contact" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Contact</a>
            <a href="#contact" className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors inline-block w-max" onClick={() => setOpen(false)}>Get a quote</a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
