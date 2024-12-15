import React, { createContext, useState, useContext, useEffect } from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { BlogService } from '../services/blog';

export interface BlogPost {
  title: string;
  slug: string;
  publishDate: Date;
  description: string;
  author?: string;
  estimatedReadTime?: number;
  tags?: string[];
}

interface BlogContextType {
  posts: BlogPost[];
  filteredPosts: BlogPost[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  tags: string[];
  isLoading: boolean;
  error: Error | null;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const { posts, isLoading, error } = useBlogPosts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchedTags = await BlogService.getTags();
        setTags(fetchedTags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    fetchTags();
  }, [posts]);

  const filteredPosts = React.useMemo(() => {
    return posts
      .filter(post => {
        const matchesSearch = searchQuery
          ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase())
          : true;

        const matchesTag = selectedTag
          ? post.tags?.includes(selectedTag)
          : true;

        return matchesSearch && matchesTag;
      })
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [posts, searchQuery, selectedTag]);
  
  const value = {
    posts,
    filteredPosts,
    searchQuery,
    setSearchQuery,
    selectedTag,
    setSelectedTag,
    tags,
    isLoading,
    error,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
} 