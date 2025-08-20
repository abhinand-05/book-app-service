export type Genre = 'Fiction' | 'Non-Fiction' | 'Sci-Fi' | 'Biography'| 'Mystery'| 'Romance'| 'Philosophy'|'Fantasy'|'Thriller';

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  description?: string;
  available?: boolean;
}