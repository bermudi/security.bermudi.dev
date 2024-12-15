import { useState, useEffect } from 'react';
import type { BlogPost } from '../context/BlogContext';
import { BlogService } from '../services/blog';
import { ApiError, NotFoundError } from '../types/errors';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await BlogService.getPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        if (err instanceof ApiError || err instanceof NotFoundError) {
          setError(err);
        } else {
          setError(new ApiError(500, 'An unexpected error occurred while fetching posts'));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading, error };
};