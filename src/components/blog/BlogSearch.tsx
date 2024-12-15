import React from 'react';
import { Search } from 'lucide-react';
import { useBlogContext } from '../../context/BlogContext';
import { Button } from '../common/Button';

const BlogSearch: React.FC = () => {
  const { searchQuery, setSearchQuery } = useBlogContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search blog posts..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      {searchQuery && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={() => setSearchQuery('')}
        >
          Clear
        </Button>
      )}
    </form>
  );
};

export default BlogSearch;