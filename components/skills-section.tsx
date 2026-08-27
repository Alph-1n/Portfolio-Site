'use client';

import { skillCategories } from '@/data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="container max-w-[1400px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <h2 className="section-heading text-coral">Capabilities</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed self-end">
            Technologies, frameworks, and tools used for shipping responsive web products, robust
            APIs, and automated workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="bento-card p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
                {cat.highlight && (
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-coral shrink-0">
                    Core
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
