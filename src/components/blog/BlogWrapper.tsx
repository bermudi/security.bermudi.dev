import React, { useEffect } from 'react';
import { BlogProvider, useBlog } from './BlogContext';
import BlogTags from './BlogTags';
import BlogGrid from './BlogGrid';
import BlogSearch from './BlogSearch';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { getAllTags } from '../../utils/blogUtils';

const BlogContent: React.FC = () => {
  const { posts, isLoading, error } = useBlogPosts();
  const { setAllPosts, searchQuery, setSearchQuery, selectedTag, setSelectedTag } = useBlog();
  const [tags, setTags] = React.useState<string[]>([]);

  useEffect(() => {
    if (posts.length > 0) {
      setAllPosts(posts);
    }
  }, [posts, setAllPosts]);

  useEffect(() => {
    const fetchTags = async () => {
      const allTags = await getAllTags();
      setTags(allTags);
    };
    fetchTags();
  }, []);

  if (isLoading) {
    return <div className="text-center py-12">Cargando entradas...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-600">Error loading posts: {error}</div>;
  }
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

const BlogWrapper: React.FC = () => {
  return (
    <BlogProvider>
      <BlogContent />
    </BlogProvider>
  );
};

export default BlogWrapper;