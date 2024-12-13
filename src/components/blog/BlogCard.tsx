import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Clock, User, Tag } from 'lucide-react';

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

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {format(post.date, 'MMM d, yyyy')}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </a>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
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

export default BlogCard;