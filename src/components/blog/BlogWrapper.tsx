import { BlogProvider } from './BlogContext';
import React from 'react';
import BlogTags from './BlogTags';
import BlogGrid from './BlogGrid';
import BlogSearch from './BlogSearch';
import { useBlog } from './BlogContext';

const BlogWrapper: React.FC = () => {
  const { selectedTag, setSelectedTag } = useBlog();
  return (
    <BlogProvider>
      <BlogSearch />
      <BlogTags
        tags={[]} // You need to pass the actual tags here
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      <BlogGrid />
    </BlogProvider>
  );
};

export default BlogWrapper;