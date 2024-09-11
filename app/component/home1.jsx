"use client";
import { Facebook, FacebookOutlined, FacebookSharp, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";
import logo from "@/public/limon.png";
import Image from "next/image";
export default function HomeTop(){
    return <div className="w-full bg-[#c2c2c2]">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 items-center">
                <div className="pl-5">
                    <div>
                        <div className="text-[4rem] font-bold text-black">I&lsquo;m Limon</div>
                        <div className="text-[1.5rem] font-[500] text-gray-400">Software Engineer</div>
                    </div>
                    <div className="flex gap-x-4 my-3">
                        <button type="button" className="px-4 py-2 bg-[#3b8f96] hover:bg-[#4ab8c2] text-[16px] text-[#e8e8e8] font-[600] rounded-sm uppercase tracking-widest ">Get Resume</button>
                        <button type="button" className="px-4 py-2 bg-[#3b8f96] hover:bg-[#4ab8c2] text-[16px] text-[#e8e8e8] font-[600] rounded-sm uppercase tracking-widest ">contact Me</button>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                        <Link href="https://www.facebook.com/limon.limon.9634340/" target="_blank">
                            <Facebook className="w-[40px] h-[40px] hover:text-[#0b48cc]"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/limon-roy-910b44197/" target="_blank">
                            <LinkedIn className="w-[40px] h-[40px] hover:text-[#0077b5]"/>
                        </Link>
                        <Link href="https://github.com/limon-chandra-ray" target="_blank">
                            <GitHub className="w-[40px] h-[40px] hover:text-[#3b8f96]"/>
                        </Link>
                        <Link href="" target="_blank">
                            <Twitter className="w-[40px] h-[40px] hover:text-[#1da1f2]"/>
                        </Link>
                        
                    </div>
                </div>
                <div className="grayscale hover:grayscale-0">
                    <Image src={logo} width={200} height={200} className="cursor-pointer w-[450px] h-[450px] grayscale hover:grayscale-0 transition duration-700 ease-in-out" alt="logo" />
                </div>
            </div>
        </div>
    </div>
}