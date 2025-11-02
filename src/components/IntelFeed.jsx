import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin, ExternalLink } from 'lucide-react';

export default function IntelFeed() {
  return (
    <section id="intel" className="relative w-full bg-[#0D0D0E] text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-[#00BFFF]">Intel Feed</p>
          <h2 className="text-3xl md:text-5xl font-extrabold">Live Operations</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-300">
            Tap into the war room: trailers, dev logs, and community transmissions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* YouTube Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-[#141416]/60 p-3 backdrop-blur"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Cinematic Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <div>
                <p className="text-sm text-gray-300">Cinematic Trailer</p>
                <p className="text-xs text-gray-400">YouTube Embed</p>
              </div>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/90 transition hover:border-[#E50914]/60"
              >
                <Youtube className="h-4 w-4 text-[#E50914]" /> View All Intel
              </a>
            </div>
          </motion.div>

          {/* Instagram Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-[#141416]/60 p-4 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-pink-400" />
                <p className="text-sm text-gray-300">Recent Transmissions</p>
              </div>
              <a
                href="https://www.instagram.com/godaeon_studio/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/90 transition hover:border-[#00BFFF]/60"
              >
                <ExternalLink className="h-4 w-4 text-[#00BFFF]" /> Open
              </a>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/godaeon_studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-md border border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#222222] to-[#0D0D0E]" />
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white">
                      View
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-md border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-[#00BFFF]/60 hover:text-white"
          >
            <Linkedin className="h-4 w-4 text-[#00BFFF]" /> Follow Our Operations
          </a>
        </div>
      </div>

      {/* Footer inside this section to keep components to 4 total */}
      <div className="mt-16 border-t border-white/10/ bg-[#0D0D0E]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>Built by Godaeon. Forged in Fire.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/godaeon_studio/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:text-white">YouTube</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://discord.com/" target="_blank" rel="noreferrer" className="hover:text-white">Discord</a>
          </div>
        </div>
      </div>
    </section>
  );
}
