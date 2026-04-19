import Project1 from "../component/project1";
import Project3 from "../component/project3";
import Project4 from "../component/project4";
import Project5 from "../component/project5";
import Project6 from "../component/project6";
import Project2 from "../component/projext2";

export default function page(){
    return <main className="mx-auto my-2 min-h-[70vh] flex flex-col gap-y-12 justify-center max-w-7xl px-4 md:px-0">
    <div className="flex flex-col items-center mb-4">
        <h1 className="text-center text-[28px] font-[600] border-b-4 border-cyan-500 pb-2">My Projects</h1>
        <p className="text-gray-600 text-[14px] mt-3">A collection of my recent work showcasing full-stack development, problem-solving, and technical expertise</p>
    </div>
    <Project5/>
    <Project6/>
    <Project1/>
    <Project2/>
    <Project3/>
    <Project4/>
</main>
}