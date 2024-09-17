import Image from "next/image";

import prothom from "@/public/project/prothom.png";
import { LanguageOutlined } from "@mui/icons-material";
import Link from "next/link";
export default function Project4(){
    return <div className="grid grid-cols-12 items-center">
        
        <div className="drop-shadow-lg col-span-7 col-start-1 col-end-8 row-start-1 row-end-1 z-50 bg-white rounded-md">
            <div className="p-4">
                <div>02</div>
                <div className="my-3 text-[18px]" style={{"letterSpacing":"2px"}}>Prothom Surjo Foundation</div>
                <div className="text-[16px] font-[500] my-3" style={{"word-spacing":"5px"}}>Prothom Surjo Foundation is a nonprofit voluntary organization founded with the aims to help deprived street children by serving fundamental rights. The activity of the organization assists children to become a true human being.</div>
                <div className="grid grid-cols-4 gap-2">
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Django Framework</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">MYSQL</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Bootstarp</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Share server</span>
                </div>
                <div>
                    <Link href="/"><LanguageOutlined/></Link>
                </div>
            </div>
        </div>
        <div className="col-span-8 row-start-1 row-end-1 col-start-4 col-end-12 relative">
           <Image width={1000} height={700} className="backdrop-blur-md  bg-opacity-20 w-full h-[420px]" src={prothom} alt="Project one"/> 
        </div>
    </div>
}