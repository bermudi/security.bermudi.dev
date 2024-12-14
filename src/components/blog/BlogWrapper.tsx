// Import necessary dependencies and components
import React, { useEffect } from 'react';
import { BlogProvider, useBlog } from './BlogContext';
import BlogTags from './BlogTags';
import BlogGrid from './BlogGrid';
import BlogSearch from './BlogSearch';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { getAllTags } from '../../utils/blogUtils';

// Define the main content component for the blog
const BlogContent: React.FC = () => {
  // Use custom hook to fetch blog posts
  const { posts, isLoading, error } = useBlogPosts();
  // Use context to manage blog state
  const { setAllPosts, searchQuery, setSearchQuery, selectedTag, setSelectedTag } = useBlog();
  // Local state for tags
  const [tags, setTags] = React.useState<string[]>([]);

  // Effect to update all posts in context when posts are loaded
  useEffect(() => {
    if (posts.length > 0) {
      setAllPosts(posts);
    }
  }, [posts, setAllPosts]);

  // Effect to fetch all tags when component mounts
  useEffect(() => {
    const fetchTags = async () => {
      const allTags = await getAllTags();
      setTags(allTags);
    };
    fetchTags();
  }, []);

  // Show loading state
  if (isLoading) {
    return <div className="text-center py-12">Cargando entradas...</div>;
  }

  // Show error state
  if (error) {
    return <div className="text-center py-12 text-red-600">Error loading posts: {error}</div>;
  }

  // Render blog components
  return (
    <>
      <BlogSearch onSearch={setSearchQuery} />
      <BlogTags
        tags={tags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      <BlogGrid />
    </>
  );
};

// Wrapper component that provides context to BlogContent
const BlogWrapper: React.FC = () => {
  return (
    <BlogProvider>
      <BlogContent />
    </BlogProvider>
  );
};

// Export the BlogWrapper component as the default export
export default BlogWrapper;