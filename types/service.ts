import { ServiceSlug } from './service-slug';

export interface Service {
  id: string;
  title: string;
  subHeadline: string;
  intro: string;
  cta?: {
    header: string;
    subheader: string;
    btnText: string;
    link: string;
  };
  primaryCta?: {
    header: string;
    subheader: string;
    btnText: string;
    link: string;
  };
  contentSection: {
    header: string;
    description: string;
    contentBlocks: {
      title: string;
      description: string;
    }[];
  }[];
  faq: {
    header: string;
    description: string;
    questions: {
      question: string;
      answer: string;
    }[];
  }[];
}

export type ServicesData = Record<ServiceSlug, Service>;
