"use client";
import { Facebook, GitHub, LinkedIn, Download, Mail } from "@mui/icons-material";
import Link from "next/link";
import logo from "@/public/limon.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function HomeTop(){
    return <div className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
                {/* Image Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center order-2 md:order-1">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-40"></div>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="relative"
                        >
                            <Image 
                                src={logo} 
                                width={400} 
                                height={400} 
                                className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full object-cover border-4 border-cyan-500 shadow-2xl grayscale hover:grayscale-0 transition duration-700 ease-in-out cursor-pointer" 
                                alt="Limon Chandra Ray" 
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="order-1 md:order-2">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-white leading-tight">
                                I&lsquo;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Limon</span>
                            </h1>
                            <h2 className="text-[1.8rem] md:text-[2.2rem] font-semibold text-cyan-400 mt-2">Senior Software Engineer</h2>
                        </div>
                        
                        <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-300">
                            A passionate Full Stack Developer with expertise in Python, Django, FastAPI, React.js, Next.js, PostgreSQL, and Redis. I specialize in building scalable web applications and solving complex problems with clean, efficient, and maintainable code.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a 
                                href="#" 
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-[600] rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <Download className="text-[20px]" />
                                Get Resume
                            </a>
                            <a 
                                href="/contact" 
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-[600] rounded-lg transition duration-300 transform hover:scale-105"
                            >
                                <Mail className="text-[20px]" />
                                Contact Me
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-4">
                            <motion.a 
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                href="https://www.facebook.com/limon.limon.9634340/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-700 hover:bg-blue-600 rounded-full transition duration-300 text-white"
                            >
                                <Facebook className="w-[24px] h-[24px]"/>
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                href="https://www.linkedin.com/in/limon-roy-910b44197/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-700 hover:bg-blue-500 rounded-full transition duration-300 text-white"
                            >
                                <LinkedIn className="w-[24px] h-[24px]"/>
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                href="https://github.com/limon-chandra-ray" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-700 hover:bg-gray-600 rounded-full transition duration-300 text-white"
                            >
                                <GitHub className="w-[24px] h-[24px]"/>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center pb-8"
        >
            <div className="text-gray-400 text-[12px] text-center">
                <p>Scroll to explore</p>
                <div className="text-[20px] mt-1">↓</div>
            </div>
        </motion.div>
    </div>
}