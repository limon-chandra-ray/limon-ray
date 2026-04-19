"use client"
import Image from "next/image";
import porikkha from "@/public/project/porikkha.png";
import { DomainAddRounded, LanguageOutlined } from "@mui/icons-material";
import { motion } from "motion/react";
import Link from "next/link";
export default function Project2(){
    return <div className="grid grid-cols-12 items-center">
        
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="drop-shadow-lg col-span-7 col-start-1 col-end-8 row-start-1 row-end-1 z-50 bg-white rounded-md">
            <div className="p-4">
                <div>04</div>
                <div className="my-3 text-[18px]" style={{"letterSpacing":"2px"}}>Porikkha Online</div>
                <div className="text-[16px] font-[500] my-3" style={{"word-spacing":"5px"}}>This Platform is Educational Category base. this Platform use HSC, Admission and Job Preparation Student. User prepared and practice MCQ questions, participate teacher and daily weekly exams. he checks her upgrade charts.</div>
                <div className="flex flex-wrap gap-2 my-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-[12px] font-[600]">Django</span>
                    <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-[12px] font-[600]">DRF</span>
                    <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-[12px] font-[600]">PostgreSQL</span>
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-[12px] font-[600]">Redis</span>
                    <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-[12px] font-[600]">Bootstrap</span>
                    <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-[12px] font-[600]">Mobile</span>
                </div>
                <div className="mt-6">
                    <a href="#" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-[600] transition">
                        <LanguageOutlined className="text-[18px]" />
                        Visit Site
                    </a>
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
           <Image width={1000} height={700} className="backdrop-blur-md  bg-opacity-20 w-full h-[420px] rounded-md" src={porikkha} alt="Project one"/> 
        </motion.div>
    </div>
}