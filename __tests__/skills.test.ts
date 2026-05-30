import { skills, getSkillPercentage, SkillLevel } from "../src/data/skills";

describe("Skills System Tests", () => {
    
    describe("getSkillPercentage Mapping Utility", () => {
        it("should correctly map beginner level to 25%", () => {
            expect(getSkillPercentage("beginner")).toBe(25);
        });

        it("should correctly map novice level to 40%", () => {
            expect(getSkillPercentage("novice")).toBe(40);
        });

        it("should correctly map intermediate level to 60%", () => {
            expect(getSkillPercentage("intermediate")).toBe(60);
        });

        it("should correctly map advanced level to 80%", () => {
            expect(getSkillPercentage("advanced")).toBe(80);
        });

        it("should correctly map expert level to 98%", () => {
            expect(getSkillPercentage("expert")).toBe(98);
        });
    });

    describe("Skills Data Validation", () => {
        it("should contain a non-empty list of skills", () => {
            expect(skills.length).toBeGreaterThan(0);
        });

        it("should verify every skill has a valid label", () => {
            skills.forEach(skill => {
                expect(typeof skill.label).toBe("string");
                expect(skill.label.length).toBeGreaterThan(0);
            });
        });

        it("should verify every skill level matches a permitted union type", () => {
            const validLevels: SkillLevel[] = ["beginner", "novice", "intermediate", "advanced", "expert"];
            skills.forEach(skill => {
                expect(validLevels).toContain(skill.level);
            });
        });

        it("should verify every skill category is recognized", () => {
            const validCategories = ["Frontend", "Backend", "Mobile", "Tools", "Business", "Other"];
            skills.forEach(skill => {
                expect(validCategories).toContain(skill.category);
            });
        });

        it("should find that React and Next.js are categorized under Frontend", () => {
            const reactSkill = skills.find(s => s.label === "React");
            const nextSkill = skills.find(s => s.label === "Next.js");

            expect(reactSkill).toBeDefined();
            expect(reactSkill?.category).toBe("Frontend");
            
            expect(nextSkill).toBeDefined();
            expect(nextSkill?.category).toBe("Frontend");
        });

        it("should verify Google Analytics and SEO are categorized under Business", () => {
            const gaSkill = skills.find(s => s.label === "Google Analytics");
            const seoSkill = skills.find(s => s.label === "SEO");

            expect(gaSkill).toBeDefined();
            expect(gaSkill?.category).toBe("Business");

            expect(seoSkill).toBeDefined();
            expect(seoSkill?.category).toBe("Business");
        });
    });
});
