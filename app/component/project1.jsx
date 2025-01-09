"use client"
import Image from "next/image";
import project_image from "@/public/chair.png"
import alphaHealth from "@/public/project/alpha.png";
import { DomainAddRounded, LanguageOutlined } from "@mui/icons-material";
import {motion} from "motion/react"
import Link from "next/link";
export default function Project1(){
    return <div className="grid grid-cols-12 items-center">
        <motion.div 
        initial={{ scale: 0.9,}}
        animate={{ scale: 1,}}
        transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }}
        className=" col-span-8 row-start-1 row-end-1 col-start-1 col-end-8 relative">
           <Image width={1000} height={700} className="backdrop-blur-md  bg-opacity-20 w-full h-[420px]"  src={alphaHealth} alt="Project one"/> 
        </motion.div>
        <div className="drop-shadow-lg col-span-7 col-start-5 col-end-12 row-start-1 row-end-1 z-50 bg-white rounded-md">
            <div className="p-4">
                <div>03</div>
                <div className="my-3 text-[18px]" style={{"letterSpacing":"2px"}}>Alpha360 Health</div>
                <div className="text-[16px] font-[500] my-3" style={{"word-spacing":"5px"}}>A full-stack web application about an Health Category base. First step blood donation and you send blood request. Contract blood donor phone number and chat message. Helath related blogs contant. Second step Patient consultation and </div>
                <div className="grid grid-cols-4 gap-2">
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Django Framework</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Django rest framework</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">PostgreSQL</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Redis</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Next JS</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Vps server</span>
                </div>
                <div>
                    <Link href="/"><LanguageOutlined/></Link>
                </div>
            </div>
        </div>
    </div>
}