import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Clock, User } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg overflow-hidden"
    >
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-secondary-600 dark:text-secondary-400 mb-3">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {format(new Date(post.date), 'MMM d, yyyy')}
          </div>
          {post.author && (
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
          <a
            href={`/blog/${post.slug}`}
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {post.title}
          </a>
        </h3>

        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          {post.excerpt}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default BlogCard;