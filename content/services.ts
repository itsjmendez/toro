import { NavItem } from '@/types/nav';
import { Languages } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { Megaphone } from 'lucide-react';
import { Eye } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';

export const services: NavItem[] = [
  {
    title: 'Multicultural Marketing',
    href: '/services/multicultural-marketing',
    description:
      'We provide authentic messaging that goes beyond direct translation, helping your brand resonate with Spanish-speaking customers.',
    catchyLabel: 'Looking to reach Spanish-speaking audiences?',
    icon: Languages,
  },
  {
    title: 'Web Services',
    href: '/services/web-services',
    description:
      'We provide design strategy, web development and page optimization.',
    catchyLabel: 'Not happy with your website? ',
    icon: CodeXml,
  },
  {
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    description:
      'Increase online visibility with social media, video, audio, and blogging across organic and paid media.',
    catchyLabel: 'Not getting enough reach?',
    icon: Megaphone,
  },
  {
    title: 'Branding',
    href: '/services/branding',
    description:
      'Position and establish your brand in the eyes of your consumers with compelling storytelling and visual identity.',
    catchyLabel: 'Need help telling your story?',
    icon: Eye,
  },
  {
    title: 'Lifecycle',
    href: '/services/lifecycle',
    description:
      'We provide strategies to help you cross-sell, retain and make your customers loyal.',
    catchyLabel: 'Need to boost revenue with your CRM?',
    icon: HeartHandshake,
  },
];
