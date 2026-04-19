"use client"
import Image from "next/image";
import PetCorner from '@/public/project/pet-cotner.png'
import { motion } from "motion/react"
import { LanguageOutlined } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
export default function Project5(){
    return <div className="grid grid-cols-12 items-center gap-6">
        <motion.div
            initial={{ scale: 0.9,}}
            animate={{ scale: 1,}}
            transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }}
        className="col-span-6 md:col-span-8 row-start-1 md:row-end-1 col-start-1 md:col-end-8 relative">
           <Image width={1000} height={700} className="w-full h-[400px] rounded-xl object-cover shadow-2xl"  src={PetCorner} alt="pet adoption shop project"/> 
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-6 md:col-span-7 col-start-1 md:col-start-5 row-start-1 md:row-end-1 z-50 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6 md:p-8 shadow-xl">
            <span className="text-amber-600 font-bold text-[14px]">Project 01</span>
            <h3 className="text-[24px] font-bold text-black mt-2">Pet Adoption Corner</h3>
            <p className="text-gray-700 text-[14px] leading-relaxed my-4">
                A comprehensive pet adoption platform enabling users to adopt pets, create fundraising campaigns, and manage donations. Features include adoption tracking, campaign creation, donation management with refund options, and community engagement.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-[12px] font-[600]">React.js</span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-[12px] font-[600]">Node.js</span>
                <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-[12px] font-[600]">Express</span>
                <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-[12px] font-[600]">MongoDB</span>
                <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-[12px] font-[600]">Firebase</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
                <a href={`https://pet-adoption-app-black.vercel.app/`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-[600] transition">
                    <LanguageOutlined className="text-[18px]" />
                    Live Demo
                </a>
                <a href={`https://github.com/limon-chandra-ray/pet-adoption-app`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white py-2 px-4 rounded-lg font-[600] transition">
                    <GitHubIcon className="text-[18px]" />
                    Frontend
                </a>
                <a href={`https://github.com/limon-chandra-ray/pet-adoption-server`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white py-2 px-4 rounded-lg font-[600] transition">
                    <GitHubIcon className="text-[18px]" />
                    Backend
                </a>
            </div>
        </motion.div>
    </div>
}