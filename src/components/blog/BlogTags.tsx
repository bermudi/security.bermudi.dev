import React from 'react';
import { Tag } from 'lucide-react';

interface BlogTagsProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const BlogTags: React.FC<BlogTagsProps> = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onTagSelect(null)}
        className={`flex items-center px-4 py-2 rounded-full text-sm ${
          selectedTag === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`flex items-center px-4 py-2 rounded-full text-sm ${
            selectedTag === tag
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Tag className="w-4 h-4 mr-1" />
          {tag}
        </button>
      ))}
    </div>
  );
};

export default BlogTags;