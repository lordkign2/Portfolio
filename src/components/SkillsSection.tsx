"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills"; // Assuming alias works, otherwise ../data/skills

export default function SkillsSection() {
    const categories = ["Frontend", "Backend", "Mobile", "Tools", "Other"] as const;

    return (
        <section className="py-20 w-full">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid gap-12">
                    {categories.map((category, catIndex) => {
                        const categorySkills = skills.filter(skill => skill.category === category);
                        if (categorySkills.length === 0) return null;

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                        {category}
                                    </h3>
                                    <div className="h-px bg-white/10 flex-grow" />
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {categorySkills.map((skill, index) => (
                                        <motion.div
                                            key={skill.label}
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors cursor-default group"
                                        >
                                            <div className="mb-3 text-4xl text-gray-400 group-hover:text-white transition-colors duration-300">
                                                {skill.icon}
                                            </div>
                                            <span className="font-medium text-sm text-gray-300 group-hover:text-white text-center">
                                                {skill.label}
                                            </span>
                                            {/* Optional Level Bar */}
                                            <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
