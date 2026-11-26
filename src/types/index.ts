export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

export interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  price: string;
  estimatedPkr: number;
  duration: string;
  description: string;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cinematic' | 'bridal' | 'mehndi' | 'barat' | 'candid';
  imageUrl: string;
  location: string;
  caption: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  couple: string;
  event: string;
  city: string;
  quote: string;
  rating: number;
  date: string;
}
