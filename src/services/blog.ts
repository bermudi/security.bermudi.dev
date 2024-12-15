import type { BlogPost } from '../context/BlogContext';
import { ApiError, NotFoundError } from '../types/errors';

export class BlogService {
  static async getPosts(): Promise<BlogPost[]> {
    try {
      // In Astro, we would typically use the Content Collections API
      // This is a placeholder for the actual implementation
      const posts = await import.meta.glob('../content/blog/*.md');
      const loadedPosts = await Promise.all(
        Object.entries(posts).map(async ([path, loader]) => {
          const post = await loader();
          return {
            ...post.frontmatter,
            slug: path.split('/').pop()?.replace('.md', ''),
          };
        })
      );

      return loadedPosts as BlogPost[];
    } catch (error) {
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

  static async searchPosts(query: string): Promise<BlogPost[]> {
    try {
      const posts = await this.getPosts();
      const searchTerm = query.toLowerCase();

      return posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm)
      );
    } catch (error) {
      throw new ApiError(500, 'Failed to search blog posts', error);
    }
  }
} 