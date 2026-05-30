import React from "react";
import {
    SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiJavascript,
    SiSocketdotio, SiExpress, SiEjs, SiFirebase, SiSupabase, SiFlutter, SiDart, SiGodotengine,
    SiKalilinux, SiDocker, SiCplusplus, SiReactiveresume, SiReact, SiNodedotjs, SiCss3, SiHtml5,
    SiPython, SiBootstrap, SiNestjs, SiDjango, SiSqlite,
    SiGoogleanalytics, SiGoogleads
} from "react-icons/si";

import { RiAiGenerate } from "react-icons/ri";

import { TbApi, TbSeo } from "react-icons/tb";
import { TargetIcon } from "../components/ui/CustomIcons";

export type SkillLevel = 'beginner' | 'novice' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
    label: string;
    icon: React.ReactNode;
    level: SkillLevel;
    category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools' | 'Business' | 'Other';
}

export const getSkillPercentage = (level: SkillLevel): number => {
    switch (level) {
        case 'beginner': return 25;
        case 'novice': return 40;
        case 'intermediate': return 60;
        case 'advanced': return 80;
        case 'expert': return 98;
    }
};

export const skills: Skill[] = [
    // Frontend
    { label: "React", icon: <SiReact size={40} className="text-sky-400" />, level: 'expert', category: 'Frontend' },
    { label: "Next.js", icon: <SiNextdotjs size={40} className="text-white" />, level: 'advanced', category: 'Frontend' },
    { label: "TypeScript", icon: <SiTypescript size={40} className="text-blue-500" />, level: 'expert', category: 'Frontend' },
    { label: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" />, level: 'expert', category: 'Frontend' },
    { label: "HTML5", icon: <SiHtml5 size={40} className="text-orange-500" />, level: 'expert', category: 'Frontend' },
    { label: "CSS3", icon: <SiCss3 size={40} className="text-blue-500" />, level: 'advanced', category: 'Frontend' },
    { label: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" />, level: 'expert', category: 'Frontend' },
    { label: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-500" />, level: 'advanced', category: 'Frontend' },

    // Backend
    { label: "Node.js", icon: <SiNodedotjs size={40} className="text-green-500" />, level: 'expert', category: 'Backend' },
    { label: "Express.js", icon: <SiExpress size={40} className="text-gray-300" />, level: 'advanced', category: 'Backend' },
    { label: "NestJS", icon: <SiNestjs size={40} className="text-red-500" />, level: 'advanced', category: 'Backend' },
    { label: "Python", icon: <SiPython size={40} className="text-blue-600" />, level: 'advanced', category: 'Backend' },
    { label: "Django", icon: <SiDjango size={40} className="text-green-600" />, level: 'advanced', category: 'Backend' },
    { label: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" />, level: 'advanced', category: 'Backend' },
    { label: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-400" />, level: 'advanced', category: 'Backend' },
    { label: "SQLite", icon: <SiSqlite size={40} className="text-blue-500" />, level: 'advanced', category: 'Backend' },
    { label: "Firebase", icon: <SiFirebase size={40} className="text-yellow-400" />, level: 'advanced', category: 'Backend' },
    { label: "Supabase", icon: <SiSupabase size={40} className="text-green-400" />, level: 'advanced', category: 'Backend' },
    { label: "RESTful APIs", icon: <TbApi size={40} className="text-purple-400" />, level: 'advanced', category: 'Backend' },
    { label: "Socket.IO", icon: <SiSocketdotio size={40} className="text-white" />, level: 'advanced', category: 'Backend' },

    // Mobile
    { label: "React Native", icon: <SiReactiveresume size={40} className="text-sky-500" />, level: 'advanced', category: 'Mobile' },
    { label: "Flutter", icon: <SiFlutter size={40} className="text-blue-400" />, level: 'advanced', category: 'Mobile' },
    { label: "Dart", icon: <SiDart size={40} className="text-blue-500" />, level: 'advanced', category: 'Mobile' },

    // Tools & Others
    { label: "Docker", icon: <SiDocker size={40} className="text-blue-500" />, level: 'advanced', category: 'Tools' },
    { label: "Kali Linux", icon: <SiKalilinux size={40} className="text-blue-600" />, level: 'advanced', category: 'Tools' },
    { label: "Godot Engine", icon: <SiGodotengine size={40} className="text-blue-400" />, level: 'advanced', category: 'Other' },
    { label: "C++", icon: <SiCplusplus size={40} className="text-blue-700" />, level: 'advanced', category: 'Other' },
    { label: "AI Integration", icon: <RiAiGenerate size={40} className="text-pink-500" />, level: 'advanced', category: 'Other' },
    { label: "EJS", icon: <SiEjs size={40} className="text-yellow-300" />, level: 'advanced', category: 'Other' },

    // Business & Optimization
    { label: "Google Analytics", icon: <SiGoogleanalytics size={40} className="text-yellow-500" />, level: 'advanced', category: 'Business' },
    { label: "Google Ads", icon: <SiGoogleads size={40} className="text-blue-500" />, level: 'advanced', category: 'Business' },
    { label: "SEO", icon: <TbSeo size={40} className="text-green-500" />, level: 'advanced', category: 'Business' },
    { label: "Conversion Optimization", icon: <TargetIcon size={40} className="text-red-500" />, level: 'advanced', category: 'Business' },
];
