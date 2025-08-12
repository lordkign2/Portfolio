import { 
    FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaPython, FaBootstrap 
  } from "react-icons/fa";
  import { 
    SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiJavascript, 
    SiSocketdotio, SiExpress, SiEjs, SiFirebase, SiSupabase 
  } from "react-icons/si";
  import { RiAiGenerate } from "react-icons/ri";
  import { TbApi } from "react-icons/tb";
  import { SiCplusplus } from "react-icons/si";
  
  export const skills = [
    { label: "React", icon: <FaReact size={40} className="text-sky-400" />, level: 95 },
    { label: "Next.js", icon: <SiNextdotjs size={40} className="text-white" />, level: 90 },
    { label: "TypeScript", icon: <SiTypescript size={40} className="text-blue-500" />, level: 85 },
    { label: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" />, level: 96 },
    { label: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" />, level: 96 },
    { label: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" />, level: 93 },
    { label: "Express.js", icon: <SiExpress size={40} className="text-gray-300" />, level: 95 },
    { label: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" />, level: 91 },
    { label: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-400" />, level: 80 },
    { label: "Socket.io", icon: <SiSocketdotio size={40} className="text-white" />, level: 80 },
    { label: "API Usage", icon: <TbApi size={40} className="text-purple-400" />, level: 90 },
    { label: "Python", icon: <FaPython size={40} className="text-yellow-400" />, level: 80 },
    { label: "C++", icon: <SiCplusplus size={40} className="text-blue-500" />, level: 80 },
    { label: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-400" />, level: 90 },
    { label: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" />, level: 95 },
    { label: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-500" />, level: 95 },
    { label: "EJS", icon: <SiEjs size={40} className="text-yellow-200" />, level: 96 },
    { label: "Firebase", icon: <SiFirebase size={40} className="text-yellow-400" />, level: 80 },
    { label: "Supabase", icon: <SiSupabase size={40} className="text-green-400" />, level: 85 },
    { label: "AI Usage & Integration", icon: <RiAiGenerate size={40} className="text-pink-400" />, level: 90 },
  ];
  