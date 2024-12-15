import type { BlogPost } from '../types/blog';
import { ApiError, NotFoundError } from '../types/errors';

type Loader = () => Promise<{ frontmatter: any; content: string }>;

export class BlogService {
  static async getPosts(): Promise<BlogPost[]> {
    try {
      console.log('Starting to fetch blog posts...');
      const posts = await import.meta.glob('../../src/content/blog/*.md', { eager: true }) as Record<string, { frontmatter: any; content: string }>;
      console.log('Found posts:', Object.keys(posts));

      const allPosts = await Promise.all(
        Object.entries(posts).map(async ([filepath, post]) => {
          const slug = filepath.split('/').pop()?.replace(/\.md$/, '') || '';
          console.log('Processing post:', { filepath, slug, frontmatter: post.frontmatter });
          
          return {
            title: post.frontmatter.title,
            slug,
            excerpt: post.frontmatter.excerpt,
            content: post.content,
            author: post.frontmatter.author,
            date: new Date(post.frontmatter.date),
            tags: post.frontmatter.tags || [],
            image: post.frontmatter.image
          } as BlogPost;
        })
      );

      console.log('Processed all posts:', allPosts);
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