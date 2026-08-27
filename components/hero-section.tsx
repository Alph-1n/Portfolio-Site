'use client';

import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';

export function HeroSection() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Content */}
      <div className="flex flex-col justify-between px-6 sm:px-10 lg:px-14 py-10 lg:py-14 min-h-[70vh] lg:min-h-screen bg-background order-2 lg:order-1">
        <div className="status-pill w-fit">
          <span className="status-dot" aria-hidden />
          <span>{profile.availability.split(' for ')[0]} for new roles</span>
        </div>

        <div className="flex-1 flex flex-col justify-center py-12 lg:py-0 max-w-xl">
          <h1 className="text-balance text-[clamp(2.25rem,5.5vw,4rem)] font-semibold tracking-tightest leading-[1.08] text-foreground">
            {profile.headline}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
            {profile.bio}
          </p>
          <div className="mt-10">
            <a href="#overview" className="btn-pill focus-ring">
              Find out more
            </a>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Find me at{' '}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-coral">
            GitHub
          </a>{' '}
          and{' '}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-coral">
            LinkedIn
          </a>
          .{' '}
          <Link href={profile.resumeUrl} className="link-coral">
            View my résumé
          </Link>
        </p>
      </div>

      {/* Right: Portrait */}
      <div className="relative min-h-[50vh] lg:min-h-screen bg-muted order-1 lg:order-2">
        <Image
          src={profile.headshot}
          alt={profile.fullName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent lg:bg-none pointer-events-none" />
      </div>
    </section>
  );
}
