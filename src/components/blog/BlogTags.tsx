import React from 'react';
import { useBlogContext } from '../../context/BlogContext';
import { Button } from '../common/Button';

const BlogTags: React.FC = () => {
  const { tags, selectedTag, setSelectedTag } = useBlogContext();

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