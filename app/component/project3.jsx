"use client"
import Image from "next/image";
import Ir from '@/public/project/ir.png'
import { LanguageOutlined } from "@mui/icons-material";
import {motion} from "motion/react"
import Link from "next/link";
export default function Project3(){
    return <div className="grid grid-cols-12 items-center gap-6">
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-6 md:col-span-7 row-start-1 row-end-1 col-start-1 md:col-end-8 z-50 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6 md:p-8 shadow-xl">
            <span className="text-purple-600 font-bold text-[14px]">Project 05</span>
            <h3 className="text-[24px] font-bold text-black mt-2">BSMRSTU IR Department</h3>
            <p className="text-gray-700 text-[14px] leading-relaxed my-4">
                A collaborative platform for BSMRSTU&apos;s IR department where students can submit research topics, engage in discussions, and view community contributions. Features interactive comments, reactions, and event management for seamless information sharing.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-[12px] font-[600]">Django</span>
                <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-[12px] font-[600]">PostgreSQL</span>
                <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-[12px] font-[600]">Tailwind CSS</span>
            </div>
            <div className="flex gap-2 mt-6">
                <a href="#" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-[600] transition">
                    <LanguageOutlined className="text-[18px]" />
                    Visit Site
                </a>
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
        className="col-span-6 md:col-span-8 row-start-1 md:row-end-1 col-start-1 md:col-start-4 col-end-12 relative">
           <Image width={1000} height={700} className="w-full h-[400px] rounded-xl object-cover shadow-2xl"  src={Ir} alt="BSMRSTU IR Department"/> 
        </motion.div>
    </div>
}