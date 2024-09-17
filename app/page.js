"use client";
import HomeTop from "./component/home1";
import Project1 from "./component/project1";
import Project3 from "./component/project3";
import Project4 from "./component/project4";
import Project2 from "./component/projext2";

export default function Page(){
  return <>
    <main className="w-full">
      <HomeTop/>
      <div className="mx-auto my-2 min-h-[70vh] flex flex-col gap-y-12 justify-center max-w-7xl">
        <div className="flex justify-center">
          <h1 className="text-center text-[20px] font-[600] border-b-2">Projects</h1>
        </div>
        <Project1/>
        <Project2/>
        <Project3/>
        <Project4/>
      </div>
    </main>
  </>
}