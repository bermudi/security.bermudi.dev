// Import necessary dependencies
import React, { useState } from 'react';
import { Search } from 'lucide-react'; // Import Search icon from lucide-react library

// Define the props interface for the BlogSearch component
interface BlogSearchProps {
  onSearch: (query: string) => void; // Function to call when search is submitted
}

// Define the BlogSearch component
const BlogSearch: React.FC<BlogSearchProps> = ({ onSearch }) => {
  // State to hold the current search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSearch(searchQuery); // Call the onSearch prop with the current query
  };

  return (
    // Form element with submit handler and styling
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-12">
      {/* Input field for search query */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
        placeholder="Buscar en el blog..."
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {/* Search icon positioned absolutely within the input */}
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </form>
  );
};

// Export the BlogSearch component as the default export
export default BlogSearch;