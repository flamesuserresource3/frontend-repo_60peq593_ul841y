import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Globe } from 'lucide-react';

const services = [
  {
    title: 'Go-to-market acceleration',
    desc: 'Positioning, narrative, and launch campaigns engineered to convert.',
    icon: Rocket,
    color: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'Brand systems',
    desc: 'Visual identity, design systems, and assets built for scale.',
    icon: Globe,
    color: 'from-fuchsia-500/20 to-violet-500/10',
  },
  {
    title: 'Performance growth',
    desc: 'Full-funnel experimentation across paid, lifecycle, and SEO.',
    icon: Zap,
    color: 'from-amber-400/20 to-orange-500/10',
  },
  {
    title: 'Trust & security',
    desc: 'Compliance-aware messaging and enterprise-grade collateral.',
    icon: Shield,
    color: 'from-emerald-400/20 to-teal-500/10',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[80%] bg-gradient-to-b from-white/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-3 text-zinc-400">Compound your brand equity with a system that’s designed to win.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map(({ title, desc, icon: Icon, color }) => (
            <motion.div key={title} variants={item}>
              <div className={`group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-transform duration-300 hover:-translate-y-1` }>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-black/60 p-3">
                    <Icon className="h-5 w-5 text-zinc-100" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
