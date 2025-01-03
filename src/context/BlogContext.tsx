import React, { createContext, useContext, useState } from 'react';
import type { BlogPost } from '../types/blog';
import { searchPosts, filterPostsByTag } from '../utils/blogUtils';

interface BlogContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  filteredPosts: BlogPost[];
  allPosts: BlogPost[];
}

interface BlogProviderProps {
  children: React.ReactNode;
  initialPosts: BlogPost[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<BlogProviderProps> = ({ children, initialPosts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allPosts] = useState<BlogPost[]>(initialPosts);

  const filteredPosts = React.useMemo(() => {
    let filtered = [...allPosts];
    if (selectedTag) {
      filtered = filterPostsByTag(filtered, selectedTag);
    }
    if (searchQuery) {
      filtered = searchPosts(filtered, searchQuery);
    }
    return filtered;
  }, [allPosts, selectedTag, searchQuery]);

  return (
    <BlogContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedTag,
        setSelectedTag,
        filteredPosts,
        allPosts
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}; 