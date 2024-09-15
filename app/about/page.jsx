import Image from "next/image";
import limon1 from "@/public/limon1.png";
export default function page(){
    return <main className="w-full">
    <div className="min-h-[70vh] flex justify-center items-center">
        <div className="grid px-2 md:px-10 md:grid-cols-2 grid-cols-1 items-center">
            <div className="flex justify-center">
                <Image src={limon1} className="w-[300px] h-[300px]" alt="Limon chandra ray" width={200} height={200}/>
            </div>
            <div className="px-0 md:px-5 text-black grid grid-cols-1 gap-y-2">
                <div className="text-[30px] font-[500]">Limon Chandra Ray</div>
                <p className="text-[16px] tracking-wider">An undergraduate student of Computer Science and Engineering with programming language and problem-solving experience. I am very passionate about new technologies. 
                    My field of interest is machine learning, full-stack web development, and DevOps .</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className="transition duration-300 text-center ease-out hover:ease-in py-1 px-2 bg-cyan-300 hover:bg-cyan-800 hover:text-white text-[16px] rounded-sm uppercase font-[500] tracking-widest cursor-pointer">Web Development</div>
                    <div className="transition duration-300 text-center ease-out hover:ease-in py-1 px-2 bg-cyan-300 hover:bg-cyan-800 hover:text-white text-[16px] rounded-sm uppercase font-[500] tracking-widest cursor-pointer">Mobile Application</div>
                    <div className="transition duration-300 text-center ease-out hover:ease-in py-1 px-2 bg-cyan-300 hover:bg-cyan-800 hover:text-white text-[16px] rounded-sm uppercase font-[500] tracking-widest cursor-pointer">Machine Learning</div>
                    <div className="transition duration-300 text-center ease-out hover:ease-in py-1 px-2 bg-cyan-300 hover:bg-cyan-800 hover:text-white text-[16px] rounded-sm uppercase font-[500] tracking-widest cursor-pointer">Problem Solving</div>
                    <div className="transition duration-300 text-center ease-out hover:ease-in py-1 px-2 bg-cyan-300 hover:bg-cyan-800 hover:text-white text-[16px] rounded-sm uppercase font-[500] tracking-widest cursor-pointer">Data Science</div>
                    <div className="transition duration-300 text-center ease-out hover:ease-in py-1 px-2 bg-cyan-300 hover:bg-cyan-800 hover:text-white text-[16px] rounded-sm uppercase font-[500] tracking-widest cursor-pointer">Travelling</div>
                    <div className="transition duration-300 text-center ease-out hover:ease-in py-1 px-2 bg-cyan-300 hover:bg-cyan-800 hover:text-white text-[16px] rounded-sm uppercase font-[500] tracking-widest cursor-pointer">playing football</div>
                    <div className="transition duration-300 text-center ease-out hover:ease-in py-1 px-2 bg-cyan-300 hover:bg-cyan-800 hover:text-white text-[16px] rounded-sm uppercase font-[500] tracking-widest cursor-pointer">cycling</div>
                </div>
            </div>
            
        </div>
    </div>
</main>
}