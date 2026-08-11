import { profile } from './profile';
import type { SocialLink } from '@/lib/types';

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email, icon: 'mail' },
];
