// Import necessary dependencies
import React, { createContext, useContext, useState } from 'react';
import type { BlogPost } from '../../types/blog';
import { searchPosts, filterPostsByTag } from '../../utils/blogUtils';

// Define the shape of our context
interface BlogContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  filteredPosts: BlogPost[];
  allPosts: BlogPost[];
}

// Create a context with undefined as initial value
const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  children: React.ReactNode;
  initialPosts: BlogPost[];
}

// Create a provider component
export const BlogProvider: React.FC<BlogProviderProps> = ({ children, initialPosts }) => {
  // Set up state using useState hooks
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allPosts] = useState<BlogPost[]>(initialPosts);

  // Use useMemo to memoize filtered posts
  const filteredPosts = React.useMemo(() => {
    let filtered = [...allPosts];
    // Apply tag filter if a tag is selected
    if (selectedTag) {
      filtered = filterPostsByTag(filtered, selectedTag);
    }
    // Apply search filter if there's a search query
    if (searchQuery) {
      filtered = searchPosts(filtered, searchQuery);
    }
    return filtered;
  }, [allPosts, selectedTag, searchQuery]); // Dependencies for useMemo

  // Provide the context value to children components
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

// Custom hook to use the blog context
export const useBlog = () => {
  const context = useContext(BlogContext);
  // Throw an error if the hook is used outside of the provider
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};