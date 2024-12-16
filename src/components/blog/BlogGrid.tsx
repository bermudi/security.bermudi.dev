import React from 'react';
import { useBlog } from '../../context/BlogContext';
import BlogCard from './BlogCard';

const BlogGrid: React.FC = () => {
  const { filteredPosts, searchQuery, selectedTag } = useBlog();

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-16">
        {searchQuery || selectedTag ? (
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            No posts found {searchQuery && `matching "${searchQuery}"`}
            {searchQuery && selectedTag && ' and '}
            {selectedTag && `tagged with "${selectedTag}"`}
          </p>
        ) : (
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            No blog posts available.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {filteredPosts.map((post) => (
        <div key={post.slug} className="w-full max-w-md">
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;