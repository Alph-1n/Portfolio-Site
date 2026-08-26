import { profile } from './profile';
import type { SocialLink } from '@/lib/types';

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: profile.github, handle: 'github.com/Alph-1n', icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, handle: 'alphin-vargheese', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email, icon: 'mail' },
];

