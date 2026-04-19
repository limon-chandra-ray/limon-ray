"use client";

import Link from "next/link";
import { getAllBlogs } from "@/app/data/blogs";
import { motion } from "motion/react";
import { ArrowForward } from "@mui/icons-material";

export default function page(){
    const blogs = getAllBlogs();

    return  <main className="w-full">
        <div className="mx-auto max-w-7xl px-4 md:px-0 py-12 min-h-[75vh]">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-[42px] font-[700] text-black mb-4">Blog Posts</h1>
                <p className="text-gray-600 text-[16px]">Insights on web development, best practices, and technology trends.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <Link href={`/blogs/${blog.slug}`}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-cyan-300 transition h-full cursor-pointer">
                                <div className="mb-3 flex gap-2 items-center">
                                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-[11px] font-[600]">
                                        {blog.category}
                                    </span>
                                    <span className="text-gray-500 text-[12px]">{blog.date}</span>
                                </div>
                                <h2 className="text-[18px] font-[600] text-black mb-2 line-clamp-2 group-hover:text-cyan-600">{blog.title}</h2>
                                <p className="text-gray-600 text-[14px] mb-4 line-clamp-2">{blog.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-[12px]">{blog.readTime}</span>
                                    <div className="flex items-center gap-1 text-cyan-500 font-[500] group-hover:gap-2 transition-all">
                                        Read More
                                        <ArrowForward className="w-[16px] h-[16px]" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
  </main>
}