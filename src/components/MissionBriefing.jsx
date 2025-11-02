import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Shield, Crosshair } from 'lucide-react';

export default function MissionBriefing() {
  return (
    <section id="briefing" className="relative w-full bg-[#0D0D0E] text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-2 text-xs uppercase tracking-widest text-[#00BFFF]">Mission Briefing</p>
          <h2 className="text-3xl md:text-5xl font-extrabold">Classified Intelligence Decryption</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-300">
            When the world crosses the Red Line, war becomes the only language. Decrypt the intel to
            discover the origins of the conflict and the tactical systems shaping the battlefield.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Theaters of War',
              desc: 'Dynamic, evolving warfronts where every decision shifts the balance of power.',
              icon: Shield,
            },
            {
              title: 'Recon & Intel',
              desc: 'Scan the field with real-time satellite feeds, encrypted chatter, and heat maps.',
              icon: FileSearch,
            },
            {
              title: 'Engage the Target',
              desc: 'Strike fast with adaptive strategy, squad synergies, and precision loadouts.',
              icon: Crosshair,
            },
          ].map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-[#141416]/60 p-6 backdrop-blur-md"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-red-500/5 to-transparent" />
              <div className="relative z-10">
                <Icon className="h-6 w-6 text-[#E50914]" />
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-gray-300">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md border border-white/15 bg-transparent px-5 py-3 font-semibold text-white/90 transition hover:border-[#E50914]/60 hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-[#E50914] shadow-[0_0_12px_2px_rgba(229,9,20,0.6)]" />
            Read the Full Briefing
          </a>
        </div>
      </div>
    </section>
  );
}
