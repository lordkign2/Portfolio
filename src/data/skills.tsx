import {
    SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiJavascript,
    SiSocketdotio, SiExpress, SiEjs, SiFirebase, SiSupabase, SiFlutter, SiDart, SiGodotengine,
    SiKalilinux, SiDocker, SiCplusplus, SiReactiveresume, SiReact, SiNodedotjs, SiCss3, SiHtml5,
    SiPython, SiBootstrap, SiNestjs, SiDjango, SiSqlite
} from "react-icons/si";

import { RiAiGenerate } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

export interface Skill {
    label: string;
    icon: React.ReactNode;
    level: number;
    category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools' | 'Other';
}

export const skills: Skill[] = [
    // Frontend
    { label: "React", icon: <SiReact size={ 40} className = "text-sky-400" />, level: 96, category: 'Frontend' },
{ label: "Next.js", icon: <SiNextdotjs size={ 40 } className = "text-white" />, level: 94, category: 'Frontend' },
{ label: "TypeScript", icon: <SiTypescript size={ 40 } className = "text-blue-500" />, level: 95, category: 'Frontend' },
{ label: "JavaScript", icon: <SiJavascript size={ 40 } className = "text-yellow-400" />, level: 98, category: 'Frontend' },
{ label: "HTML5", icon: <SiHtml5 size={ 40 } className = "text-orange-500" />, level: 96, category: 'Frontend' },
{ label: "CSS3", icon: <SiCss3 size={ 40 } className = "text-blue-500" />, level: 94, category: 'Frontend' },
{ label: "Tailwind CSS", icon: <SiTailwindcss size={ 40 } className = "text-cyan-400" />, level: 97, category: 'Frontend' },
{ label: "Bootstrap", icon: <SiBootstrap size={ 40 } className = "text-purple-500" />, level: 93, category: 'Frontend' },

// Backend
{ label: "Node.js", icon: <SiNodedotjs size={ 40 } className = "text-green-500" />, level: 95, category: 'Backend' },
{ label: "Express.js", icon: <SiExpress size={ 40 } className = "text-gray-300" />, level: 94, category: 'Backend' },
{ label: "NestJS", icon: <SiNestjs size={ 40 } className = "text-red-500" />, level: 90, category: 'Backend' },
{ label: "Python", icon: <SiPython size={ 40 } className = "text-blue-600" />, level: 90, category: 'Backend' },
{ label: "Django", icon: <SiDjango size={ 40 } className = "text-green-600" />, level: 87, category: 'Backend' },
{ label: "MongoDB", icon: <SiMongodb size={ 40 } className = "text-green-400" />, level: 92, category: 'Backend' },
{ label: "PostgreSQL", icon: <SiPostgresql size={ 40 } className = "text-blue-400" />, level: 89, category: 'Backend' },
{ label: "SQLite", icon: <SiSqlite size={ 40 } className = "text-blue-500" />, level: 88, category: 'Backend' },
{ label: "Firebase", icon: <SiFirebase size={ 40 } className = "text-yellow-400" />, level: 91, category: 'Backend' },
{ label: "Supabase", icon: <SiSupabase size={ 40 } className = "text-green-400" />, level: 88, category: 'Backend' },
{ label: "RESTful APIs", icon: <TbApi size={ 40 } className = "text-purple-400" />, level: 93, category: 'Backend' },
{ label: "Socket.IO", icon: <SiSocketdotio size={ 40 } className = "text-white" />, level: 90, category: 'Backend' },

// Mobile
{ label: "React Native", icon: <SiReactiveresume size={ 40 } className = "text-sky-500" />, level: 91, category: 'Mobile' },
{ label: "Flutter", icon: <SiFlutter size={ 40 } className = "text-blue-400" />, level: 93, category: 'Mobile' },
{ label: "Dart", icon: <SiDart size={ 40 } className = "text-blue-500" />, level: 92, category: 'Mobile' },

// Tools & Others
{ label: "Docker", icon: <SiDocker size={ 40 } className = "text-blue-500" />, level: 87, category: 'Tools' },
{ label: "Kali Linux", icon: <SiKalilinux size={ 40 } className = "text-blue-600" />, level: 86, category: 'Tools' },
{ label: "Godot Engine", icon: <SiGodotengine size={ 40 } className = "text-blue-400" />, level: 85, category: 'Other' },
{ label: "C++", icon: <SiCplusplus size={ 40 } className = "text-blue-700" />, level: 85, category: 'Other' },
{ label: "AI Integration", icon: <RiAiGenerate size={ 40 } className = "text-pink-500" />, level: 89, category: 'Other' },
{ label: "EJS", icon: <SiEjs size={ 40 } className = "text-yellow-300" />, level: 92, category: 'Other' },
];
