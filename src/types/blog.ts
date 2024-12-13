export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  tags: string[];
  image: string;
}