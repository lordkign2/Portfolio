export interface Experience {
    year: string;
    role: string;
    company: string;
    description: string;
}

export const experiences: Experience[] = [
    {
        year: "2022 - Present",
        role: "Senior Full-Stack Developer",
        company: "Freelance",
        description:
            "Developing scalable web applications for clients worldwide using React, Next.js, Node.js, and TypeScript. Specializing in creating exceptional user experiences with modern UI/UX principles and cutting-edge technologies."
    },
    {
        year: "2021 - 2022",
        role: "Web Development Instructor",
        company: "Whitestone Schools",
        description:
            "Taught web development fundamentals to aspiring developers, mentoring students in HTML, CSS, JavaScript, and React. Developed curriculum and guided students through hands-on projects to build their portfolios."
    },
    {
        year: "2020 - 2021",
        role: "Computer Science Student",
        company: "Computer School",
        description:
            "Completed intensive training in computer science fundamentals, programming languages, and software development methodologies. Built a strong foundation in algorithms, data structures, and problem-solving approaches."
    }
];
