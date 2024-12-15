import React from 'react';
import { useBlogContext } from '../../context/BlogContext';
import BlogCard from './BlogCard';
import { Button } from '../common/Button';

const BlogGrid: React.FC = () => {
  const { filteredPosts, isLoading, error, searchQuery, selectedTag } = useBlogContext();

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <Button isLoading variant="primary">
          Loading posts...
        </Button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error.message}</div>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    );
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        {searchQuery || selectedTag ? (
          <p className="text-secondary-600 dark:text-secondary-400">
            No posts found {searchQuery && `matching "${searchQuery}"`}
            {searchQuery && selectedTag && ' and '}
            {selectedTag && `tagged with "${selectedTag}"`}
          </p>
        ) : (
          <p className="text-secondary-600 dark:text-secondary-400">
            No blog posts available.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;