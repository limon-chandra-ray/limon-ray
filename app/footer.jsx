"use client";
import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

export default function Footer(){
    return <footer className="bg-[#000000] py-8">
        <div className="flex flex-col items-center justify-center gap-y-3">
            <div className="flex gap-x-4 mt-4">
                <Link href="https://www.facebook.com/limon.limon.9634340/" target="_blank">
                    <Facebook fontSize="large" className="w-[40px] h-[40px] text-[#fff] hover:text-[#0b48cc]"/>
                </Link>
                <Link href="https://www.linkedin.com/in/limon-roy-910b44197/" target="_blank">
                    <LinkedIn fontSize="large" className="w-[40px] h-[40px] text-[#fff] hover:text-[#0077b5]"/>
                </Link>
                <Link href="https://github.com/limon-chandra-ray" target="_blank">
                    <GitHub fontSize="large" className="w-[40px] h-[40px] text-[#fff] hover:text-[#3b8f96]"/>
                </Link>
                <Link href="" target="_blank">
                    <Twitter fontSize="large" className="w-[40px] h-[40px] text-[#fff] hover:text-[#1da1f2]"/>
                </Link>
                
            </div>
            <div className="flex justify-center items-center text-[24px] tracking-widest">
                <div className="text-[#fff]">© 2024, </div>
                <div className="text-[#3b8f96]"> Limon Chandra Ray </div>
                <div className="text-[#fff]">- All Rights Reserved</div>
            </div>
        </div>
    </footer>
}