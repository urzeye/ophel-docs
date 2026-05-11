import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { MessageSquare, LayoutList, FolderKanban, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features({ featuresTitle, featuresSubtitle, items }: any) {
  const icons = [LayoutList, FolderKanban, MessageSquare, Sparkles];

  return (
    <section id="features" className="relative py-24 z-10 bg-background">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            {featuresTitle}
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">{featuresSubtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {items.map((item: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <SpotlightCard key={index} className="p-8 group">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-neon-cyan group-hover:border-neon-cyan/30 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
