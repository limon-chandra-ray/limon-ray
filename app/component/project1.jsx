import Image from "next/image";
import project_image from "@/public/chair.png"
import { DomainAddRounded, LanguageOutlined } from "@mui/icons-material";
import Link from "next/link";
export default function Project1(){
    return <div className="grid grid-cols-12 items-center">
        <div className="col-span-8 row-start-1 row-end-1 col-start-1 col-end-8 relative">
           <Image width={500} height={300} className="w-full h-[400px]"  src={project_image} alt="Project one"/> 
        </div>
        <div className="col-span-7 col-start-5 col-end-12 row-start-1 row-end-1 z-50 bg-white rounded-md">
            <div className="p-4">
                <div>01</div>
                <div className="my-3 text-[18px]" style={{"letterSpacing":"2px"}}>Alpha360 Health</div>
                <div className="text-[16px] font-[500] my-3" style={{"word-spacing":"5px"}}>A full-stack web application about an IT service provider. You can check which services we are providing. 
                    Then you can place an order with project details. On the client page, the registered user also can see their order, give feedback which will also show in the UI. In the admin dashboard, the admin can see all orders placed by the clients, delete or edit their current status. Admin can add a new service & also create another Admin through email of this site.</div>
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