export type ColorScheme = "dark" | "light";

export interface KulinerImage {
  src: string;
  alt: string;
}

export interface KulinerInfo {
  address: string;
  phone: string;
  hours: string;
  price: string;
}

export interface KulinerItem {
  slug: string;
  name: string;
  colorScheme: ColorScheme;
  title: string;
  descriptions: string[];
  images: KulinerImage[];
  info?: KulinerInfo;
  cardImage: string;
  cardName: string;
}
