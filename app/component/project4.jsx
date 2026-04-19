"use client"
import Image from "next/image";
import prothom from "@/public/project/prothom.png";
import { LanguageOutlined } from "@mui/icons-material";
import {motion} from "motion/react"
import Link from "next/link";
export default function Project4(){
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
           <Image width={1000} height={700} className="w-full h-[400px] rounded-xl object-cover shadow-2xl" src={prothom} alt="Prothom Surjo Foundation"/> 
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-6 md:col-span-7 col-start-1 md:col-start-5 row-start-1 md:row-end-1 z-50 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6 md:p-8 shadow-xl">
            <span className="text-orange-600 font-bold text-[14px]">Project 06</span>
            <h3 className="text-[24px] font-bold text-black mt-2">Prothom Surjo Foundation</h3>
            <p className="text-gray-700 text-[14px] leading-relaxed my-4">
                A nonprofit organization website dedicated to helping deprived street children. The platform showcases their mission, programs, and impact while enabling donors and volunteers to support their humanitarian cause.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-[12px] font-[600]">Django</span>
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-[12px] font-[600]">MySQL</span>
                <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-[12px] font-[600]">Bootstrap</span>
            </div>
            <div className="flex gap-2 mt-6">
                <a href="#" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-[600] transition">
                    <LanguageOutlined className="text-[18px]" />
                    Learn More
                </a>
            </div>
        </motion.div>
    </div>
}