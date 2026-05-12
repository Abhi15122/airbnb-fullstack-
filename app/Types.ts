export interface Host {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  joinedYear: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  comment: string;
  rating: number;
}

export interface Listing {
  _id: string;
  id: string;
  title: string;
  price: number;
  images: string[]; // changed from image to images array
  location: string;
  rating: number;
  reviewCount: number; // added
  description: string;
  amenities: string[];
  guests: number; // added
  bedrooms: number; // added
  beds: number; // added
  bathrooms: number; // added
  host: Host; // added
  reviews: Review[]; // added
}
