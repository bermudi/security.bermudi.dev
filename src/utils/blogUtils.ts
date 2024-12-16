import type { BlogPost } from '../types/blog';

// Add this type definition for the loader function
type Loader = () => Promise<{ frontmatter: any; content: string }>;

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  console.log('getBlogPosts called');
  try {
    // Use Astro's import.meta.glob to get all .md files in the content/blog directory
    const posts = await import.meta.glob('../content/blog/*.md') as Record<string, Loader>;
    console.log('Files found:', Object.keys(posts));

    const allPostsData = await Promise.all(
      Object.entries(posts).map(async ([filepath, loader]) => {
        try {
          const slug = filepath.split('/').pop()?.replace(/\.md$/, '');
          console.log('Processing file:', filepath);
          const { frontmatter, content } = await loader();

          return {
            slug,
            ...frontmatter,
            content,
            date: new Date(frontmatter.date),
          } as BlogPost;
        } catch (error) {
          console.error(`Error processing file ${filepath}:`, error);
          return null;
        }
      })
    );

    const validPosts = allPostsData.filter((post): post is BlogPost => post !== null);
    console.log('Processed posts:', validPosts);

    return validPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
  } catch (error) {
    console.error('Error in getBlogPosts:', error);
    throw error;
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const posts = await import.meta.glob('../content/blog/*.md') as Record<string, Loader>;
    const matchingPost = Object.entries(posts).find(([filepath]) => filepath.includes(slug));

    if (!matchingPost) {
      throw new Error(`No post found with slug: ${slug}`);
    }

    const [filepath, loader] = matchingPost;
    const { frontmatter, content } = await loader();

    return {
      slug,
      ...frontmatter,
      content,
      date: new Date(frontmatter.date),
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error);
    return null;
  }
};

export const searchPosts = (posts: BlogPost[], query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterPostsByTag = (posts: BlogPost[], tag: string | null): BlogPost[] => {
  if (!tag) return posts;
  return posts.filter(post => post.tags.includes(tag));
};

export const getAllTags = async (): Promise<string[]> => {
  const posts = await getBlogPosts();
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)].sort();
};