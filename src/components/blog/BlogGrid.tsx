import { useBlogPosts } from '../../hooks/useBlogPosts';
import React from 'react';
import BlogCard from './BlogCard';

const BlogGrid: React.FC = () => {
  const { posts, isLoading, error } = useBlogPosts();

  console.log('BlogGrid render:', { posts, isLoading, error });
  if (isLoading) {
    return <div className="text-center py-12">Cargando entradas...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-600">Error loading posts: {error}</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center py-12">No se encontraron entradas de blog.</div>;
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