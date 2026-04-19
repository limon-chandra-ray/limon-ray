"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { motion } from "motion/react";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Contact', href: '/contact' }
    ];

    return <header className="sticky top-0 z-[999] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20 shadow-lg backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-0 py-4">
            {/* Logo */}
            <motion.div 
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
            >
                <Link href="/" className="flex items-center gap-3">
                    {/* Modern Geometric Logo */}
                    <div className="relative w-[50px] h-[50px] flex items-center justify-center">
                        {/* Background gradient circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl opacity-80 blur-md"></div>
                        {/* Main logo box */}
                        <div className="relative w-[50px] h-[50px] bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-shadow">
                            {/* Inner letter L */}
                            <span className="text-white font-black text-[28px] tracking-tight">L</span>
                        </div>
                        {/* Animated corner accent */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -right-1 -top-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        ></motion.div>
                    </div>
                    {/* Brand text */}
                    <div className="hidden sm:flex flex-col gap-0">
                        <span className="text-[20px] font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Limon</span>
                        <span className="text-[10px] font-[600] text-cyan-300 tracking-widest uppercase">Engineer</span>
                    </div>
                </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1">
                {navItems.map((item, index) => (
                    <motion.div key={item.href} whileHover={{ y: -2 }}>
                        <Link 
                            href={item.href} 
                            className="px-4 py-2 text-white font-[600] text-[15px] relative group transition duration-300"
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <Close /> : <Menu />}
            </motion.button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden bg-slate-800 border-t border-cyan-500/20 py-4 px-4"
            >
                <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <Link 
                            key={item.href}
                            href={item.href} 
                            className="px-4 py-2 text-white font-[600] hover:bg-cyan-600/20 rounded-lg transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </motion.div>
        )}
    </header>
}