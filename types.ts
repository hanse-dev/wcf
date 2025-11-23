export enum DesignConcept {
  MODERN = 'MODERN',
  TRADITIONAL = 'TRADITIONAL',
  URBAN = 'URBAN',
  NATURE = 'NATURE',
  BOLD = 'BOLD',
  CINEMATIC = 'CINEMATIC'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Training', href: '#training' },
  { label: 'Philosophy', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
];