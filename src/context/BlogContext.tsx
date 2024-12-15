import React, { createContext, useState, useContext } from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';

export interface BlogPost {
  title: string;
  slug: string;
  publishDate: Date;
  description: string;
  author?: string;
  estimatedReadTime?: number;
}

interface BlogContextType {
  posts: BlogPost[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isLoading: boolean;
  error: Error | null;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { posts, isLoading, error } = useBlogPosts();
  
  const value = {
    posts,
    searchQuery,
    setSearchQuery,
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