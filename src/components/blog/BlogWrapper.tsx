import React from 'react';
import { BlogProvider } from './BlogContext';
import BlogGrid from './BlogGrid';
import BlogSearch from './BlogSearch';
import BlogTags from './BlogTags';

const BlogWrapper: React.FC = () => {
  return (
    <BlogProvider>
      <BlogSearch />
      <BlogTags />
      <BlogGrid />
    </BlogProvider>
  );
};

export default BlogWrapper;