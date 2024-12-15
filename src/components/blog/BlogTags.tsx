import React from 'react';
import { useBlog } from '../../context/BlogContext';
import { Button } from '../common/Button';

const BlogTags: React.FC = () => {
  const { allPosts, selectedTag, setSelectedTag } = useBlog();
  
  // Get unique tags from all posts
  const tags = React.useMemo(() => {
    const tagSet = new Set<string>();
    allPosts.forEach(post => {
      post.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [allPosts]);

  if (!tags?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedTag === null ? 'primary' : 'outline'}
        size="sm"
        onClick={() => setSelectedTag(null)}
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default BlogTags;