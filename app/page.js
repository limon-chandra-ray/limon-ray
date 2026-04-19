"use client";
import HomeTop from "./component/home1";
import Project1 from "./component/project1";
import Project3 from "./component/project3";
import Project4 from "./component/project4";
import Project5 from "./component/project5";
import Project6 from "./component/project6";
import Project2 from "./component/projext2";
import { StarRounded, CodeRounded, LayersRounded, SpeedRounded } from "@mui/icons-material";

export default function Page(){
  return <>
    <main className="w-full bg-gradient-to-b from-white via-gray-50 to-white">
      <HomeTop/>
      
      {/* Statistics Section */}
      <div className="py-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[48px] font-bold">3+</div>
              <p className="text-[16px] mt-2 opacity-90">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] font-bold">7+</div>
              <p className="text-[16px] mt-2 opacity-90">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] font-bold">5+</div>
              <p className="text-[16px] mt-2 opacity-90">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] font-bold">100%</div>
              <p className="text-[16px] mt-2 opacity-90">Dedication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="mx-auto px-4 md:px-0 py-16 max-w-7xl">
        <h2 className="text-[36px] font-bold text-black mb-12 text-center">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 p-8 rounded-xl hover:shadow-xl transition duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[22px] font-bold text-black">Senior Software Engineer</h3>
                <p className="text-cyan-600 font-[600] text-[16px] mt-1">Alpha 360 Health</p>
              </div>
              <StarRounded className="text-cyan-600" style={{fontSize: "32px"}} />
            </div>
            <p className="text-gray-700 text-[14px] leading-relaxed mt-4">
              Designed and implemented scalable backend systems using Django and FastAPI. Developed responsive frontend applications with React.js and Next.js. Optimized database queries and implemented caching strategies with PostgreSQL and Redis for improved performance.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-[12px] font-[600]">Full Stack</span>
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-[12px] font-[600]">Django</span>
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-[12px] font-[600]">React.js</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 p-8 rounded-xl hover:shadow-xl transition duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[22px] font-bold text-black">Python Developer</h3>
                <p className="text-blue-600 font-[600] text-[16px] mt-1">BEMGroup</p>
              </div>
              <CodeRounded className="text-blue-600" style={{fontSize: "32px"}} />
            </div>
            <p className="text-gray-700 text-[14px] leading-relaxed mt-4">
              Developed RESTful APIs and backend services using Python and FastAPI. Implemented real-time features using WebSockets. Optimized database queries and designed efficient microservices architecture for scalability and maintainability.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-[12px] font-[600]">Python</span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-[12px] font-[600]">FastAPI</span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-[12px] font-[600]">APIs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Competencies Section */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-[36px] font-bold text-black mb-12 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-cyan-500 hover:shadow-lg transition">
              <LayersRounded className="text-cyan-600 mb-4" style={{fontSize: "40px"}} />
              <h3 className="text-[20px] font-bold text-black mb-3">Full Stack Development</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Expertise in building end-to-end applications with modern frontend and backend technologies. Proficient in React, Next.js, Django, and FastAPI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
              <SpeedRounded className="text-blue-600 mb-4" style={{fontSize: "40px"}} />
              <h3 className="text-[20px] font-bold text-black mb-3">Performance Optimization</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Database optimization, caching strategies with Redis, API optimization, and code efficiency improvements for blazing-fast applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-500 hover:shadow-lg transition">
              <CodeRounded className="text-purple-600 mb-4" style={{fontSize: "40px"}} />
              <h3 className="text-[20px] font-bold text-black mb-3">Scalable Architecture</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Design of microservices architecture, cloud deployment, Docker containerization, and CI/CD pipeline implementation for production-ready applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      {/* <div className="mx-auto my-16 min-h-[70vh] flex flex-col gap-y-12 justify-center max-w-7xl px-4 md:px-0">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-[36px] font-bold text-black mb-3">Featured Projects</h1>
          <p className="text-gray-600 text-[16px] text-center max-w-2xl">
            A showcase of my recent work demonstrating full-stack development expertise, problem-solving abilities, and technical innovation.
          </p>
        </div>
        <div className="space-y-12">
          <Project5/>
          <Project6/>
          <Project1/>
          <Project2/>
          <Project3/>
          <Project4/>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-[36px] font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-[18px] opacity-90 mb-8">
            Let&apos;s build something amazing together. Get in touch to discuss your project requirements.
          </p>
          <a href="/contact" className="inline-block bg-white text-cyan-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-[16px]">
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  </>
}