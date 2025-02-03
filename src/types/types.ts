export type Nanny = {
  id: number;
  name: string;
  avatar_url: string;
  birthday: string;
  experience: string;
  reviews: Review[];
  education: string;
  kids_age: string;
  price_per_hour: number;
  location: string;
  about: string;
  characters: string[];
  rating: number;
};

type Review = {
  reviewer: string;
  rating: number;
  comment: string;
};

type User = {
  uid: string;
  name: string;
  email: string | null;
};

export type AuthState = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
};

export type NannyState = {
  nannies: Nanny[];
  isLoading: boolean;
  error: string | null;
};
