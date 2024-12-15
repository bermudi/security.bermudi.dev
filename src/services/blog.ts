import { getCollection } from 'astro:content';
import type { BlogPost } from '../context/BlogContext';
import { ApiError, NotFoundError } from '../types/errors';

export class BlogService {
  static async getPosts(): Promise<BlogPost[]> {
    try {
      const posts = await getCollection('blog');
      return posts.map(post => ({
        title: post.data.title,
        slug: post.data.slug || post.slug,
        publishDate: post.data.date,
        description: post.data.excerpt,
        author: post.data.author,
        tags: post.data.tags,
      }));
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