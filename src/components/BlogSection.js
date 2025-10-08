import React from 'react';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable MERN Applications: Best Practices',
      excerpt: 'Learn how to architect MERN stack applications for production with security, performance, and scalability in mind.',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Full Stack',
      tags: ['React', 'Node.js', 'MongoDB', 'Security'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'AI in Web Development: DeepFake Detection Implementation',
      excerpt: 'Deep dive into building AI-powered applications with computer vision and machine learning for real-world problems.',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'AI/ML',
      tags: ['Python', 'OpenCV', 'Machine Learning', 'AI'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Modern React Patterns: Hooks, Context, and Performance',
      excerpt: 'Explore advanced React patterns and optimization techniques for building high-performance applications.',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Frontend',
      tags: ['React', 'JavaScript', 'Performance', 'Hooks'],
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge about web development, AI, and modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📝</div>
                    <div className="text-sm font-medium">{post.category}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <time dateTime={post.date} itemProp="datePublished">{new Date(post.date).toLocaleDateString()}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" itemProp="headline">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed" itemProp="description">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${post.gradient} text-white text-xs rounded-full font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:from-purple-600 hover:to-blue-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-blog"></i>
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;