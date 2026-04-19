"use client";
import { Facebook, GitHub, LinkedIn, MailOutline, PhoneOutlined, LocationOnOutlined } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer(){
    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/limon.limon.9634340/", label: "Facebook", color: "hover:text-blue-600" },
        { icon: LinkedIn, href: "https://www.linkedin.com/in/limon-roy-910b44197/", label: "LinkedIn", color: "hover:text-blue-500" },
        { icon: GitHub, href: "https://github.com/limon-chandra-ray", label: "GitHub", color: "hover:text-gray-400" }
    ];

    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href: '/contact' }
    ];

    return <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-black text-gray-300 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* About Section */}
                <div className="md:col-span-1">
                    <h3 className="text-[20px] font-bold text-white mb-4">Limon</h3>
                    <p className="text-[14px] leading-relaxed text-gray-400">
                        A passionate Full Stack Developer building scalable web applications with modern technologies.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-[16px] font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href}
                                    className="text-gray-400 hover:text-cyan-400 transition duration-300 text-[14px]"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-[16px] font-bold text-white mb-4">Services</h4>
                    <ul className="space-y-2 text-[14px] text-gray-400">
                        <li>Full Stack Development</li>
                        <li>API Development</li>
                        <li>Database Design</li>
                        <li>Performance Optimization</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-[16px] font-bold text-white mb-4">Contact</h4>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[14px] text-gray-400 hover:text-cyan-400 transition">
                            <MailOutline className="text-[18px]" />
                            <a href="mailto:limonroy.19cse013@gmail.com">limonroy.19cse013@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2 text-[14px] text-gray-400">
                            <PhoneOutlined className="text-[18px]" />
                            <span>+880 1521570320</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 py-8">
                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-6">
                    {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        return (
                            <motion.a
                                key={social.label}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 bg-slate-700 rounded-full text-white transition duration-300 ${social.color}`}
                                title={social.label}
                            >
                                <IconComponent className="w-[20px] h-[20px]" />
                            </motion.a>
                        );
                    })}
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-[14px] text-gray-400">
                        © 2024 <span className="text-cyan-400 font-[600]">Limon Chandra Ray</span>. All Rights Reserved.
                    </p>
                    <p className="text-[12px] text-gray-500 mt-2">
                        Designed & Developed with <span className="text-red-500">❤</span> | Powered by Next.js
                    </p>
                </div>
            </div>
        </div>
    </footer>
}