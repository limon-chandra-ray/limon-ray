import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return <header className="p-3 font-sans bg-[#124348]">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
      <div className="flex justify-between w-full items-center">
        <Link href="/">
            <Image src={logo} alt="logo" width={100} height={50}  className="w-[200px]" />
        </Link>
        <div className="flex gap-x-4 py-2">
            <Link href='/' className="cursor-pointer text-[18px] text-[#ffff] font-[700] tracking-widest border-b-2 border-[#124348] hover:border-b-2 hover:border-green-600 hover:text-green-600">Home</Link>
            <Link href='/about' className="cursor-pointer text-[18px] text-[#ffff] font-[700] tracking-widest border-b-2 border-[#124348] hover:border-b-2 hover:border-green-600 hover:text-green-600">About</Link>
            <Link href='/projects' className="cursor-pointer text-[18px] text-[#ffff] font-[700] tracking-widest border-b-2 border-[#124348] hover:border-b-2 hover:border-green-600 hover:text-green-600">Projects</Link>
            <Link href='/blogs' className="cursor-pointer text-[18px] text-[#ffff] font-[700] tracking-widest border-b-2 border-[#124348] hover:border-b-2 hover:border-green-600 hover:text-green-600">Blogs</Link>
            <Link href='/contact' className="cursor-pointer text-[18px] text-[#ffff] font-[700] tracking-widest border-b-2 border-[#124348] hover:border-b-2 hover:border-green-600 hover:text-green-600">Contact</Link>
        </div>
      </div>
    </nav>
  </header>
}