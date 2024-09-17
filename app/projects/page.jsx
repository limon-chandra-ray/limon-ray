import Project1 from "../component/project1";
import Project3 from "../component/project3";
import Project4 from "../component/project4";
import Project2 from "../component/projext2";

export default function page(){
    return <main className="mx-auto my-2 min-h-[70vh] flex flex-col gap-y-12 justify-center max-w-7xl">
    <Project1/>
    <Project2/>
    <Project3/>
    <Project4/>
</main>
}