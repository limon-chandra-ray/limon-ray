"use client"
import Image from "next/image";

import BoiBazar from "@/public/project/boi-bazar.png";
import { DomainAddRounded, LanguageOutlined } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "motion/react";
import Link from "next/link";
export default function Project6(){
    return <div className="grid grid-cols-12 items-center">
        
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="drop-shadow-lg col-span-7 col-start-1 col-end-8 row-start-1 row-end-1 z-50 bg-white rounded-md">
            <div className="p-4">
                <div>02</div>
                <div className="my-3 text-[18px]" style={{"letterSpacing":"2px"}}>Boi Bazar Library</div>
                <div className="text-[16px] font-[500] my-3" style={{"word-spacing":"5px"}}>Boi Bazar is a secure library management system with categorized book selection, a comprehensive database, and secure routing for efficient book management. It allows students to browse books by categories or genres and maintains a well-organized database to store information about all books.</div>
                <div className="grid grid-cols-4 gap-2">
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={event => {}}
                        onHoverEnd={event => {}}
                        className="px-2 py-1 cursor-pointer text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">React Js</motion.span>
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={event => {}}
                        onHoverEnd={event => {}}
                        className="px-2 py-1 cursor-pointer text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Node JS</motion.span>
                    <motion.span 
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={event => {}}
                        onHoverEnd={event => {}}
                        className="px-2 py-1 cursor-pointer text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Express JS</motion.span>
                    <motion.span 
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={event => {}}
                        onHoverEnd={event => {}}
                        className="px-2 py-1 cursor-pointer text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Tailwind CSS</motion.span>
                    <motion.span 
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={event => {}}
                        onHoverEnd={event => {}}
                        className="px-2 py-1 cursor-pointer text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">firebase</motion.span>
                    <motion.span 
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={event => {}}
                        onHoverEnd={event => {}}
                        className="px-2 py-1 cursor-pointer text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Mongo DB</motion.span>
                </div>
                <div className="py-2 flex justify-between">
                    <div className="flex gap-x-3">
                        <Link href={`https://github.com/limon-chandra-ray/boi-bazar-library-app`} target="_blank" rel="noopener noreferrer" className="flex items-center bg-slate-400 text-white py-1 px-2 rounded-md hover:bg-slate-600"><GitHubIcon/> Frontend</Link>
                        <Link href={`https://github.com/limon-chandra-ray/boi-bazar-library-server`} target="_blank" rel="noopener noreferrer" className="flex items-center bg-slate-400 text-white py-1 px-2 rounded-md hover:bg-slate-600"><GitHubIcon/> Backend</Link>
                    </div>
                    <Link href={`https://boi-bazar-library-app.vercel.app/`} target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded-md"><LanguageOutlined/> Live Demo</Link>
                    
                </div>
            </div>
        </motion.div>
        <motion.div 
            initial={{ scale: 0.9,}}
            animate={{ scale: 1,}}
            transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className="col-span-8 row-start-1 row-end-1 col-start-4 col-end-12 relative">
           <Image width={1000} height={700} className="backdrop-blur-md  bg-opacity-20 w-full h-[420px] rounded-md" src={BoiBazar} alt="Project one"/> 
        </motion.div>
    </div>
}