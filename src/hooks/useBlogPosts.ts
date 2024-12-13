import { useState, useEffect } from 'react';
import { getBlogPosts } from '../utils/blogUtils';
import type { BlogPost } from '../types/blog';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log('Fetching posts...');
      try {
        const fetchedPosts = await getBlogPosts();
        console.log('Fetched posts:', fetchedPosts);
        setPosts(fetchedPosts);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log('useBlogPosts hook state:', { posts, isLoading, error });
  return { posts, isLoading, error };
};