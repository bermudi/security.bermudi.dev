// Import necessary dependencies
import React from 'react';
import { Tag } from 'lucide-react'; // Import Tag icon from lucide-react library

// Define the props interface for the BlogTags component
interface BlogTagsProps {
  tags: string[]; // Array of tag strings
  selectedTag: string | null; // Currently selected tag (or null if none selected)
  onTagSelect: (tag: string | null) => void; // Function to call when a tag is selected
}

// Define the BlogTags component
const BlogTags: React.FC<BlogTagsProps> = ({ tags, selectedTag, onTagSelect }) => {
  return (
    // Container for all tags
    <div className="flex flex-wrap gap-3 mb-8">
      {/* "All" button to clear tag selection */}
      <button
        onClick={() => onTagSelect(null)}
        className={`flex items-center px-4 py-2 rounded-full text-sm ${
          // Conditional styling based on whether "All" is selected
          selectedTag === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {/* Map through each tag and create a button for it */}
      {tags.map((tag) => (
        <button
          key={tag} // Use tag as key for React list rendering
          onClick={() => onTagSelect(tag)}
          className={`flex items-center px-4 py-2 rounded-full text-sm ${
            // Conditional styling based on whether this tag is selected
            selectedTag === tag
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Tag className="w-4 h-4 mr-1" /> {/* Tag icon */}
          {tag} {/* Tag text */}
        </button>
      ))}
    </div>
  );
};

// Export the BlogTags component as the default export
export default BlogTags;