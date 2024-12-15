import type { BlogPost } from '../types/blog';
import { ApiError, NotFoundError } from '../types/errors';

type Loader = () => Promise<{ frontmatter: any; content: string }>;

export class BlogService {
  static async getPosts(): Promise<BlogPost[]> {
    try {
      const posts = await import.meta.glob('../content/blog/*.md') as Record<string, Loader>;
      const allPosts = await Promise.all(
        Object.entries(posts).map(async ([filepath, loader]) => {
          const slug = filepath.split('/').pop()?.replace(/\.md$/, '');
          const { frontmatter, content } = await loader();
          return {
            title: frontmatter.title,
            slug,
            excerpt: frontmatter.excerpt,
            content,
            author: frontmatter.author,
            date: new Date(frontmatter.date),
            tags: frontmatter.tags,
            image: frontmatter.image
          } as BlogPost;
        })
      );

      return allPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw new ApiError(500, 'Failed to fetch blog posts', error);
    }
  }

  static async getPostBySlug(slug: string): Promise<BlogPost> {
    try {
      const posts = await this.getPosts();
      const post = posts.find(p => p.slug === slug);

      if (!post) {
        throw new NotFoundError('Blog post', slug);
      }

      return post;
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new ApiError(500, `Failed to fetch blog post with slug: ${slug}`, error);
    }
  }

  static async getTags(): Promise<string[]> {
    try {
      const posts = await this.getPosts();
      const tags = new Set<string>();
      posts.forEach(post => post.tags?.forEach(tag => tags.add(tag)));
      return Array.from(tags).sort();
    } catch (error) {
      throw new ApiError(500, 'Failed to fetch tags', error);
    }
  }
} 