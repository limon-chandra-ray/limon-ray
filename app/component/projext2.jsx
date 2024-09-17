import Image from "next/image";

import porikkha from "@/public/project/porikkha.png";
import { DomainAddRounded, LanguageOutlined } from "@mui/icons-material";
import Link from "next/link";
export default function Project2(){
    return <div className="grid grid-cols-12 items-center">
        
        <div className="drop-shadow-lg col-span-7 col-start-1 col-end-8 row-start-1 row-end-1 z-50 bg-white rounded-md">
            <div className="p-4">
                <div>02</div>
                <div className="my-3 text-[18px]" style={{"letterSpacing":"2px"}}>Porikkha Online</div>
                <div className="text-[16px] font-[500] my-3" style={{"word-spacing":"5px"}}>This Platform is Educational Category base. this Platform use HSC, Admission and Job Preparation Student. User prepared and practice MCQ questions, participate teacher and daily weekly exams. he checks her upgrade charts.</div>
                <div className="grid grid-cols-4 gap-2">
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Django Framework</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Django rest framework</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">PostgreSQL</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Redis</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Bootstarp</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Mobile App</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Vps server</span>
                </div>
                <div>
                    <Link href="/"><LanguageOutlined/></Link>
                </div>
            </div>
        </div>
        <div className="col-span-8 row-start-1 row-end-1 col-start-4 col-end-12 relative">
           <Image width={1000} height={700} className="backdrop-blur-md  bg-opacity-20 w-full h-[420px]" src={porikkha} alt="Project one"/> 
        </div>
    </div>
}