import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-zinc-400 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white text-xl font-semibold">Ready to accelerate?</h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-md">
              Tell us about your goals and we’ll craft a plan that compounds results over time.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-zinc-200 transition-colors"
          >
            Book a discovery call
          </a>
        </motion.div>

        <div className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} NightArrow Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
