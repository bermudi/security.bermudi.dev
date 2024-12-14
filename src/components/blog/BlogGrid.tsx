// Import necessary dependencies and components
import { useBlogPosts } from '../../hooks/useBlogPosts';
import React from 'react';
import BlogCard from './BlogCard';

// Define the BlogGrid component
const BlogGrid: React.FC = () => {
  // Use the custom hook to fetch blog posts and related states
  const { posts, isLoading, error } = useBlogPosts();

  // Log the current state for debugging purposes
  console.log('BlogGrid render:', { posts, isLoading, error });

  // Show loading state while posts are being fetched
  if (isLoading) {
    return <div className="text-center py-12">Cargando entradas...</div>;
  }

  // Show error state if there was an error fetching posts
  if (error) {
    return <div className="text-center py-12 text-red-600">Error loading posts: {error}</div>;
  }

  // Show a message if no posts were found
  if (posts.length === 0) {
    return <div className="text-center py-12">No se encontraron entradas de blog.</div>;
  }

  // Render the grid of blog posts
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Map through each post and render a BlogCard component */}
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

// Export the BlogGrid component as the default export
export default BlogGrid;