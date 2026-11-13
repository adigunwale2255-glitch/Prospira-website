export interface PlaceholderImage {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export const placeholders: PlaceholderImage[] = [
  {
    id: "hero-main",
    description: "Prospira Premium Product Showcase",
    imageUrl: "https://www.image2url.com/r2/default/images/1781838217167-7b459953-6484-4588-a66d-d0ce4bcfd872.jpeg",
    imageHint: "premium digital product",
  },
  {
    id: "portfolio-1",
    description: "SaaS Dashboard UI",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    imageHint: "saas dashboard",
  },
  {
    id: "portfolio-2",
    description: "Mobile App Interface",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    imageHint: "mobile app interface",
  },
  {
    id: "portfolio-3",
    description: "E-commerce Web Platform",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80",
    imageHint: "ecommerce website",
  },
  {
    id: "about-team",
    description: "Prospira collaborative workspace",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    imageHint: "agency team",
  },
  {
    id: "services-header",
    description: "Premium digital solutions concept",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
    imageHint: "digital agency",
  },
  {
    id: "about-philosophy",
    description: "Digital Innovation and System Evolution",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    imageHint: "digital innovation",
  },
];

export function getPlaceholder(id: string): PlaceholderImage | undefined {
  return placeholders.find((item) => item.id === id);
}
