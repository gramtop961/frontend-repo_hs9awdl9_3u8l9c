import React from 'react';
import { motion } from 'framer-motion';
import { Map, Wrench, Users, Radio, Target } from 'lucide-react';

export default function TacticalSystems() {
  const cards = [
    {
      title: 'Real-Time Strategic Combat',
      desc: 'Command the field with live tactical overlays and shifting frontlines.',
      icon: Map,
      accent: 'from-[#E50914]/20 to-transparent',
    },
    {
      title: 'Squad Customization',
      desc: 'Forge your unit. Optimize weapons, gadgets, and roles for every mission.',
      icon: Wrench,
      accent: 'from-[#00BFFF]/20 to-transparent',
    },
    {
      title: 'Online Warfronts',
      desc: 'Persistent territories contested by players worldwide. Every battle matters.',
      icon: Users,
      accent: 'from-[#E50914]/20 to-transparent',
    },
    {
      title: 'Encrypted Comms',
      desc: 'Coordinate strikes using secure channels and squad-to-command relays.',
      icon: Radio,
      accent: 'from-[#00BFFF]/20 to-transparent',
    },
  ];

  return (
    <section id="systems" className="relative w-full bg-[#0D0D0E] text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-[#00BFFF]">Tactical Systems</p>
          <h2 className="text-3xl md:text-5xl font-extrabold">Command Console Interface</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-300">
            Each module responds like a high-tech ops terminal. Hover to engage panels and reveal intel.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ title, desc, icon: Icon, accent }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#141416]/60 p-6 backdrop-blur-md"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-black/40">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-300">{desc}</p>

                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
                  <Target className="h-3.5 w-3.5 text-[#E50914]" />
                  Hover to Scan
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E50914]/30 blur-3xl" />
                <div className="absolute -left-20 -bottom-16 h-40 w-40 rounded-full bg-[#00BFFF]/25 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
