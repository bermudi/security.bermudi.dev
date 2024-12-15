import React from 'react';
import { BlogProvider } from '../../context/BlogContext';
import BlogSearch from './BlogSearch';
import BlogGrid from './BlogGrid';
import BlogTags from './BlogTags';

const BlogContainer: React.FC = () => {
  return (
    <BlogProvider>
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