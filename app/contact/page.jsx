"use client";

import { motion } from "motion/react";
import { MailOutline, PhoneOutlined, LocationOnOutlined, Send } from "@mui/icons-material";

export default function page(){
    return <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-12">
        <div className="mx-auto max-w-5xl w-full px-4 md:px-0">
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <h1 className="text-[48px] font-[700] text-black mb-4">Get In Touch</h1>
                <p className="text-gray-600 text-[18px] max-w-2xl mx-auto">Have a question or want to collaborate? I'd love to hear from you. Reach out through the form or contact information below.</p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 hover:border-cyan-400 transition"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-cyan-500 rounded-full">
                            <MailOutline className="text-white w-[24px] h-[24px]" />
                        </div>
                        <h3 className="text-[18px] font-[600] text-black">Email</h3>
                    </div>
                    <p className="text-gray-600 text-[14px] mb-2">Send me an email</p>
                    <a href="mailto:limonroy.19cse013@gmail.com" className="text-cyan-600 font-[600] hover:text-cyan-700 break-all">
                        limonroy.19cse013@gmail.com
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:border-blue-400 transition"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-blue-500 rounded-full">
                            <PhoneOutlined className="text-white w-[24px] h-[24px]" />
                        </div>
                        <h3 className="text-[18px] font-[600] text-black">Phone</h3>
                    </div>
                    <p className="text-gray-600 text-[14px] mb-2">Call me anytime</p>
                    <a href="tel:+8801521570320" className="text-blue-600 font-[600] hover:text-blue-700">
                        +880 1521570320
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:border-purple-400 transition"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-purple-500 rounded-full">
                            <LocationOnOutlined className="text-white w-[24px] h-[24px]" />
                        </div>
                        <h3 className="text-[18px] font-[600] text-black">Location</h3>
                    </div>
                    <p className="text-gray-600 text-[14px] mb-2">Where I'm based</p>
                    <p className="text-purple-600 font-[600]">
                        Bangladesh
                    </p>
                </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-lg"
            >
                <h2 className="text-[32px] font-[700] text-black mb-8">Send Me a Message</h2>
                <form className="flex flex-col gap-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label className="block text-black font-[600] text-[14px] mb-2">Your Name</label>
                            <input 
                                className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition duration-300" 
                                placeholder="John Doe" 
                                type="text" 
                                name="name" 
                                id="name"
                                required
                            />
                        </motion.div>
                        <motion.div
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label className="block text-black font-[600] text-[14px] mb-2">Email Address</label>
                            <input 
                                type="email" 
                                className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition duration-300" 
                                placeholder="you@example.com" 
                                name="email" 
                                id="email"
                                required
                            />
                        </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                        whileFocus={{ scale: 1.02 }}
                    >
                        <label className="block text-black font-[600] text-[14px] mb-2">Subject</label>
                        <input 
                            className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition duration-300" 
                            placeholder="Project Inquiry or Collaboration" 
                            type="text" 
                            name="subject" 
                            id="subject"
                            required
                        />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        whileFocus={{ scale: 1.02 }}
                    >
                        <label className="block text-black font-[600] text-[14px] mb-2">Message</label>
                        <textarea 
                            name="body" 
                            id="body" 
                            rows={7} 
                            className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition duration-300 resize-none" 
                            placeholder="Tell me about your project, ideas, or how I can help you..."
                            required
                        ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-3 px-8 font-[600] text-white rounded-lg transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/50"
                    >
                        <Send className="w-[20px] h-[20px]" />
                        Send Message
                    </motion.button>
                </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
            >
                <p className="text-gray-600 text-[16px] mb-6">Connect with me on social media</p>
                <div className="flex justify-center gap-4">
                    <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.facebook.com/limon.limon.9634340/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-100 text-blue-600 font-[600] rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Facebook
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/limon-roy-910b44197/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-100 text-blue-600 font-[600] rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        LinkedIn
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/limon-chandra-ray"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gray-100 text-gray-600 font-[600] rounded-full hover:bg-gray-600 hover:text-white transition duration-300"
                    >
                        GitHub
                    </motion.a>
                </div>
            </motion.div>

            {/* Response Time Notice */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
            >
                <p className="text-gray-500 text-[14px]">⚡ I typically respond within 24-48 hours</p>
            </motion.div>
        </div>
    </main>
}