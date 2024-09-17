import Image from "next/image";
import Ir from '@/public/project/ir.png'
import { DomainAddRounded, LanguageOutlined } from "@mui/icons-material";
import Link from "next/link";
export default function Project3(){
    return <div className="grid grid-cols-12 items-center">
        <div className=" col-span-8 row-start-1 row-end-1 col-start-1 col-end-8 relative">
           <Image width={1000} height={700} className="backdrop-blur-md  bg-opacity-20 w-full h-[420px]"  src={Ir} alt="Project one"/> 
        </div>
        <div className="drop-shadow-lg col-span-7 col-start-5 col-end-12 row-start-1 row-end-1 z-50 bg-white rounded-md">
            <div className="p-4">
                <div>01</div>
                <div className="my-3 text-[18px]" style={{"letterSpacing":"2px"}}>BSMRSTU IR Department blog</div>
                <div className="text-[16px] font-[500] my-3" style={{"word-spacing":"5px"}}>This Platform Student submit topic base information. this information shows all active student and comment. This blog reaction uses any event make this information showing this platform.</div>
                <div className="grid grid-cols-4 gap-2">
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Django Framework</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">PostgreSQL</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Tailwind CSS</span>
                    <span className="px-2 py-1 text-center bg-green-300 font-[600] text-[16px] tracking-wider rounded-sm text-cyan-50">Share server</span>
                </div>
                <div>
                    <Link href="/"><LanguageOutlined/></Link>
                </div>
            </div>
        </div>
    </div>
}