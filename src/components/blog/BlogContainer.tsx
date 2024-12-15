import React from 'react';
import { BlogProvider } from '../../context/BlogContext';
import BlogSearch from './BlogSearch';
import BlogGrid from './BlogGrid';
import BlogTags from './BlogTags';
import type { BlogPost } from '../../types/blog';

interface BlogContainerProps {
  posts: BlogPost[];
}

const BlogContainer: React.FC<BlogContainerProps> = ({ posts }) => {
  return (
    <BlogProvider initialPosts={posts}>
      <div className="space-y-8">
        <div className="space-y-4">
          <BlogSearch />
          <BlogTags />
        </div>
        <BlogGrid />
      </div>
    </BlogProvider>
  );
};

export default BlogContainer; 