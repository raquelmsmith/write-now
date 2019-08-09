import { Comment } from './comment';

export interface Testimonial {
  id: number;
  author: string;
  quote: string;
  comments: Comment[];
  thumbnail: string;
}
