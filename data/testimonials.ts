export interface Testimonial {
  id: number;
  initials: string;
  gradient: string;
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: 'SR',
    gradient: 'linear-gradient(135deg,#9b2fff,#d4007a)',
    quote: 'We had almost no social media presence, and as a dairy farmer, I had very little knowledge about social media marketing. A friend introduced me to Abhishek when I was looking to increase my sales. Abhishek clearly explained the strategy he planned to use to grow my business and improve sales. Almost everything worked exactly as he said. By the second month, I was already getting more sales directly through Instagram.',
    name: 'Sourav',
    role: 'Dairy Business Owner',
  },
  {
    id: 2,
    initials: 'AG',
    gradient: 'linear-gradient(135deg,#4b3fff,#d4007a)',
    quote: 'We started a new music and podcast studio in November with absolutely no social media presence. Drishyam came in and helped us build everything from scratch. Within four months, nearly 80% of our sales were coming through social media marketing. Their team planned everything specifically for our niche, managed the campaigns for us, and consistently delivered the best ROI possible.',
    name: 'Aditya Gulati',
    role: 'Music & Podcast Studio Owner',
    featured: true,
  },
  {
    id: 3,
    initials: 'RB',
    gradient: 'linear-gradient(135deg,#ff3c2f,#d4007a)',
    quote: 'I run a marketing agency, and for all our shoot-related backend work, Christian Studios was our trusted production partner. We could always rely on them to deliver professional and high-quality work on time.',
    name: 'Rueben',
    role: 'Marketing Agency Owner',
  },
  {
    id: 4,
    initials: 'FA',
    gradient: 'linear-gradient(135deg,#4b3fff,#9b2fff)',
    quote: 'We worked closely with you and through research you not only understand our industry, but enhanced our brand across multiple platforms in a way that connects with our customers.',
    name: 'Falcon',
    role: 'Singer/Rapper',
  },
  {
    id: 5,
    initials: 'PV',
    gradient: 'linear-gradient(135deg,#9b2fff,#d4007a)',
    quote: 'The attention to detail is unmatched. Every design felt purposeful and strategic. We finally have a brand that stands out in our market.',
    name: 'PriyaVrindha',
    role: 'Performance Psychologist',
  },
  {
    id: 6,
    initials: 'MN',
    gradient: 'linear-gradient(135deg,#d4007a,#ff3c2f)',
    quote: 'Fast turnaround, creative solutions, and a team that actually listens. They took our rough ideas and turned them into a polished brand identity.',
    name: 'Mehnoor',
    role: 'Clothing Brand',
  },
  {
    id: 7,
    initials: 'SD',
    gradient: 'linear-gradient(135deg,#4b3fff,#d4007a)',
    quote: "ROI-focused and data-driven. They didn't just make things look pretty — they made sure our content actually converted and grew our audience.",
    name: 'SD Rotract',
    role: 'Marketing Director',
  },
  {
    id: 8,
    initials: 'RU',
    gradient: 'linear-gradient(135deg,#ff3c2f,#9b2fff)',
    quote: 'As a small business owner, I needed someone who understood budget constraints without compromising quality. Drishyam delivered exactly that.',
    name: 'Rudranshi',
    role: 'Fitness Content Creator',
  },
  {
    id: 9,
    initials: 'NK',
    gradient: 'linear-gradient(135deg,#9b2fff,#ff3c2f)',
    quote: "They're more than a service provider — they're a strategic partner. Every piece of content is crafted with our business goals in mind.",
    name: 'Navkiran',
    role: 'Education Content Creator',
  },
  {
    id: 10,
    initials: 'AD',
    gradient: 'linear-gradient(135deg,#9b2fff,#ff3c2f)',
    quote: "They're more than a service provider — they're a strategic partner. Every piece of content is crafted with our business goals in mind.",
    name: 'Aditya',
    role: 'Content Creator',
  },
  {
    id: 11,
    initials: 'YV',
    gradient: 'linear-gradient(135deg,#9b2fff,#ff3c2f)',
    quote: "They're more than a service provider — they're a strategic partner. Every piece of content is crafted with our business goals in mind.",
    name: 'Yuvraj',
    role: 'Fitness Trainer',
  },
];

export function getTestimonials(...ids: number[]): Testimonial[] {
  return ids.map((id) => testimonials.find((t) => t.id === id)!).filter(Boolean);
}
