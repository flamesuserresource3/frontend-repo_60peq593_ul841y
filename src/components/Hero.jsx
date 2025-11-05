import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        <div className="pointer-events-none absolute -inset-x-20 -top-20 h-72 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Futuristic marketing for ambitious brands
          </span>

          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Scale with precision in a world that moves at lightspeed
          </h1>
          <p className="mt-5 text-lg text-zinc-300">
            We blend strategy, design and engineering to deliver compounding growth. From brand systems to performance funnels, we build engines that don’t stall.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
              Start a project
            </a>
            <a href="#services" className="px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors">
              Explore services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
