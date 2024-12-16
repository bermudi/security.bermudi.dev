import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Clock, User, ArrowRight } from 'lucide-react';
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
      className="group bg-white dark:bg-secondary-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-secondary-100 dark:border-secondary-700"
    >
      {post.image && (
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      <div className="flex-1 p-6">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-bold text-secondary-900 dark:text-secondary-100 mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <a href={`/blog/${post.slug}`} className="block">
            {post.title}
          </a>
        </h3>

        <p className="text-secondary-600 dark:text-secondary-400 mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center gap-4 text-sm text-secondary-500 dark:text-secondary-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5 text-primary-500" />
              {format(new Date(post.date), 'MMM d, yyyy')}
            </div>
            {post.author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1.5 text-primary-500" />
                {post.author}
              </div>
            )}
          </div>

          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
          >
            Read more
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;