import React from 'react';
import { motion } from 'framer-motion';
import { Play, Send, Instagram, Youtube, Linkedin, Discord } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/godaeon_studio/', Icon: Instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/', Icon: Youtube },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: Linkedin },
  { name: 'Discord', href: 'https://discord.com/', Icon: Discord },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0D0D0E] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for cinematic depth - don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D0E]/70 via-transparent to-[#0D0D0E]/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D0E] to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1] }}
              transition={{ duration: 1.2 }}
              className="inline-block mb-6 tracking-widest text-xs md:text-sm uppercase text-[#00BFFF]"
            >
              Accessing Command Terminal…
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="text-5xl md:text-7xl font-black tracking-tight"
              style={{ textShadow: '0 0 16px rgba(229,9,20,0.35)' }}
            >
              ENTER THE <span className="text-[#E50914]">RED LINE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="mt-4 md:mt-6 text-base md:text-xl text-gray-200/90"
            >
              Where War Meets Strategy. A cinematic, tactical war experience by Godaeon Studio.
            </motion.p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-[#E50914] px-5 py-3 font-semibold text-white shadow-lg shadow-red-900/30 transition hover:brightness-110"
              >
                <Play className="h-5 w-5" />
                Watch the Trailer
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-white/20 bg-[#111113]/50 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:border-[#00BFFF]/50 hover:text-white"
              >
                <Send className="h-5 w-5 text-[#00BFFF]" />
                Join the Mission
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative"
                  aria-label={`${name} - Redirect`}
                >
                  <span className="absolute -inset-3 rounded-full bg-red-500/0 blur transition-all duration-300 group-hover:bg-red-500/10" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#141416]/70 backdrop-blur-md transition-all duration-300 group-hover:border-[#E50914]/60">
                    <Icon className="h-5 w-5 text-white transition-colors group-hover:text-[#E50914]" />
                  </div>
                  <span className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 rounded bg-black/70 px-2 py-1 text-xs text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    Redirecting…
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-6 text-xs uppercase tracking-widest text-gray-400">
              Red Line Nation — Cross It, or Be Crushed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
