"use client";

import { getBlogBySlug } from "@/app/data/blogs";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

export default function BlogDetailPage({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return (
      <main className="w-full min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-0 py-12">
          <div className="text-center">
            <h1 className="text-[48px] font-[700] text-black mb-4">Blog Not Found</h1>
            <p className="text-gray-600 text-[16px] mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blogs">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-cyan-600 text-white font-[600] rounded-lg hover:bg-cyan-700 transition"
              >
                Back to Blogs
              </motion.button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-0 py-12">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/blogs" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-[600]">
            <ArrowBack className="w-[20px] h-[20px]" />
            Back to Blogs
          </Link>
        </motion.div>

        {/* Blog Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="mb-4 flex gap-2 items-center">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-[12px] font-[600]">
              {blog.category}
            </span>
            <span className="text-gray-500 text-[14px]">{blog.date}</span>
            <span className="text-gray-500 text-[14px]">•</span>
            <span className="text-gray-500 text-[14px]">{blog.readTime}</span>
          </div>
          
          <h1 className="text-[42px] font-[700] text-black mb-4 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <div>
              <p className="text-gray-700 font-[600] text-[14px]">By {blog.author}</p>
              <p className="text-gray-500 text-[12px]">Software Engineer</p>
            </div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-[16px]">
            {blog.content}
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <h2 className="text-[28px] font-[700] text-black mb-6">Share This Article</h2>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={`https://twitter.com/intent/tweet?text=${blog.title}&url=`}
              target="_blank"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Twitter
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={`https://www.linkedin.com/sharing/share-offsite/?url=`}
              target="_blank"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={`https://www.facebook.com/sharer/sharer.php?u=`}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Facebook
            </motion.a>
          </div>
        </motion.div>

        {/* Comments Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <h2 className="text-[28px] font-[700] text-black mb-6">Comments</h2>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">Comments section coming soon. Join our mailing list to stay updated!</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-600"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-2 bg-cyan-600 text-white font-[600] rounded-lg hover:bg-cyan-700 transition"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
