import React from 'react';

const ContentSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Professional Full Stack Development Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                MERN Stack Expertise
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Specializing in MongoDB, Express.js, React.js, and Node.js development. 
                I create scalable, production-ready applications with modern architecture patterns, 
                RESTful APIs, and secure authentication systems.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>React.js with hooks and context API</li>
                <li>Node.js backend with Express framework</li>
                <li>MongoDB database design and optimization</li>
                <li>JWT authentication and authorization</li>
                <li>PayPal and Stripe payment integration</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                AI & Machine Learning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Developing intelligent applications using Python, OpenCV, and machine learning algorithms. 
                My AI deepfake detector achieved 79.2% accuracy using computer vision techniques.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Computer vision with OpenCV</li>
                <li>Machine learning model training</li>
                <li>Python data processing pipelines</li>
                <li>Real-time image and video analysis</li>
                <li>AI integration in web applications</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured Project: MERN E-Commerce Platform
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Built a comprehensive e-commerce solution featuring user authentication, product management, 
            shopping cart functionality, and secure payment processing. The platform includes an admin 
            dashboard for inventory management and order tracking.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h4 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">
              Technical Implementation
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The application uses React.js for the frontend with Redux for state management, 
              Node.js and Express.js for the backend API, and MongoDB for data persistence. 
              Security features include bcrypt password hashing, JWT tokens, and input validation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Live demo available at shopping-canter.netlify.app showcasing real-world functionality 
              including user registration, product browsing, cart management, and checkout process.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Development Approach & Best Practices
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I follow industry-standard development practices including clean code principles, 
            responsive design, performance optimization, and comprehensive testing. Every project 
            includes proper error handling, security measures, and scalable architecture.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-code text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Maintainable, well-documented code following industry standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-shield-alt text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security First</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Implementing robust security measures and data protection
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-rocket text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Optimized applications for speed and user experience
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Ready to bring your ideas to life? Contact me at visheshpanchal864@gmail.com or 
            connect on LinkedIn to discuss your next project. Available for freelance work, 
            full-time opportunities, and technical consulting worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;