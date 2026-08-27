'use client';

import { useState } from 'react';
import { faqItems } from '@/data/faq';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="border-t border-border">
      <div className="container max-w-[1400px] px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="section-heading mb-12 sm:mb-16">Frequently asked questions</h2>

        <div className="divide-y divide-border border-y border-border">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            const num = String(index + 1).padStart(2, '0');

            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-start justify-between gap-6 py-6 sm:py-8 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium group-hover:text-coral transition-colors">
                    <span className="text-muted-foreground mr-3 tabular-nums">{num}</span>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted-foreground transition-transform mt-0.5',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="pb-6 sm:pb-8 pl-8 sm:pl-10 space-y-3">
                    {item.answer.map((paragraph, i) => (
                      <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
