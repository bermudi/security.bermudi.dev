import React from 'react';
import { BlogProvider } from './BlogContext';
import BlogTags from './BlogTags';
import BlogGrid from './BlogGrid';
import BlogSearch from './BlogSearch';

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