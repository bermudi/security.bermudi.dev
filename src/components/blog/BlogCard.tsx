// Import necessary dependencies
import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { format } from 'date-fns'; // For date formatting
import { Clock, User, Tag } from 'lucide-react'; // Icons

// Define the props interface for the BlogCard component
interface BlogCardProps {
  post: {
    title: string;
    excerpt: string;
    author: string;
    date: Date;
    tags: string[];
    slug: string;
    image: string;
  };
}

// Define the BlogCard component
const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    // Use motion.article for animation
    <motion.article
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and 20px below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position when in view
      transition={{ duration: 0.5 }} // Animation duration
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Content container */}
      <div className="p-6">
        {/* Metadata: date and author */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {format(post.date, 'MMM d, yyyy')} {/* Format the date */}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
        </div>
        {/* Post title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </a>
        </h3>
        {/* Post excerpt */}
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <div key={tag} className="flex items-center text-sm text-blue-600">
              <Tag className="w-4 h-4 mr-1" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

// Export the BlogCard component
export default BlogCard;