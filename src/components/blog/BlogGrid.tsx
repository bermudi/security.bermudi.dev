import React from 'react';
import BlogCard from './BlogCard';
import { useBlogPosts } from '../../hooks/useBlogPosts';

const BlogGrid: React.FC = () => {
  const { posts, isLoading, error } = useBlogPosts();

  if (isLoading) {
    return <div className="text-center py-12">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-600">Error loading posts: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;