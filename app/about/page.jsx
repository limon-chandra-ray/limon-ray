import Image from "next/image";
import limon1 from "@/public/limon.png";
import { MailOutline, PhoneOutlined, LocationOnOutlined, WorkOutline, CodeOutlined } from "@mui/icons-material";

export default function page(){
    return <main className="w-full bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="min-h-[80vh] flex justify-center items-center px-4 md:px-0">
            <div className="max-w-6xl w-full grid px-2 md:px-10 md:grid-cols-2 grid-cols-1 items-center gap-8">
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30"></div>
                        <Image src={limon1} className="w-[300px] h-[300px] rounded-full relative z-10 border-4 border-white shadow-2xl" alt="Limon Chandra Ray" width={300} height={300}/>
                    </div>
                </div>
                <div className="text-black grid grid-cols-1 gap-y-4">
                    <div>
                        <h1 className="text-[48px] font-bold mb-2">Limon Chandra Ray</h1>
                        <p className="text-[24px] font-semibold text-cyan-600">Senior Software Engineer (Full Stack)</p>
                    </div>
                    <p className="text-[16px] leading-relaxed text-gray-700">
                        Full-stack expertise in building scalable web applications with Python, Django, DRF, FastAPI, React.js, and Next.js. Proven track record of designing and implementing robust backend systems and engaging frontend interfaces. Passionate about solving complex problems and delivering high-quality solutions.
                    </p>
                    <div className="flex flex-col gap-y-2 text-[14px] text-gray-600">
                        <div className="flex items-center gap-2">
                            <MailOutline className="w-5 h-5 text-cyan-600" />
                            <a href="mailto:limonroy.19cse013@gmail.com" className="hover:text-cyan-600">limonroy.19cse013@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneOutlined className="w-5 h-5 text-cyan-600" />
                            <span>+880 1521570320</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Technical Skills Section */}
        <div className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 md:px-10">
                <h2 className="text-[32px] font-bold text-black mb-10 flex items-center gap-3">
                    <CodeOutlined className="text-cyan-600" />
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
                        <h3 className="text-[18px] font-semibold text-black mb-4">Languages & Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                                <span key={skill} className="bg-cyan-500 text-white px-3 py-1 rounded-full text-[12px] font-[500]">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                        <h3 className="text-[18px] font-semibold text-black mb-4">Backend & Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Redis', 'MongoDB', 'RESTful APIs'].map((skill) => (
                                <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded-full text-[12px] font-[500]">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                        <h3 className="text-[18px] font-semibold text-black mb-4">Tools & DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Agile', 'Microservices'].map((skill) => (
                                <span key={skill} className="bg-purple-500 text-white px-3 py-1 rounded-full text-[12px] font-[500]">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Experience Section */}
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 md:px-10">
                <h2 className="text-[32px] font-bold text-black mb-10 flex items-center gap-3">
                    <WorkOutline className="text-cyan-600" />
                    Professional Experience
                </h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition">
                        <h3 className="text-[20px] font-semibold text-black">Senior Software Engineer</h3>
                        <p className="text-cyan-600 font-[500] text-[14px] mt-1">Alpha 360 Health</p>
                        <p className="text-gray-600 text-[14px] mt-2">Designed and implemented scalable backend systems using Django and FastAPI. Developed responsive frontend applications with React.js and Next.js. Worked with PostgreSQL and Redis for data management and caching strategies.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                        <h3 className="text-[20px] font-semibold text-black">Python Developer</h3>
                        <p className="text-blue-600 font-[500] text-[14px] mt-1">BEMGroup</p>
                        <p className="text-gray-600 text-[14px] mt-2">Developed RESTful APIs and backend services using Python and FastAPI. Implemented real-time features and optimized database queries for improved performance.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Education Section */}
        <div className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-10">
                <h2 className="text-[32px] font-bold text-black mb-10">Education</h2>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg border-2 border-cyan-300">
                    <h3 className="text-[22px] font-semibold text-black">B.Sc. in Computer Science & Engineering</h3>
                    <p className="text-cyan-600 font-[500] text-[16px] mt-2">Bangabandhu Sheikh Mujibur Rahman Science and Technology University (BSMRSTU)</p>
                    <p className="text-gray-600 text-[14px] mt-3">Specialized in software development, database systems, and web technologies with hands-on experience in building full-stack applications.</p>
                </div>
            </div>
        </div>
    </main>
}