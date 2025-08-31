"use client";

import { Section, SectionTitle, SectionSubtitle } from "../ui/section";

const uniqueSkills = [
  {
    name: "Creative Problem Solving",
    description: "Designing innovative solutions for complex challenges.",
    icon: "🧠",
  },
  {
    name: "Rapid Prototyping",
    description: "Building MVPs and proof-of-concepts efficiently.",
    icon: "⚡",
  },
  {
    name: "UI/UX Craftsmanship",
    description:
      "Delivering delightful user experiences with attention to detail.",
    icon: "🎨",
  },
  {
    name: "Automation & Scripting",
    description: "Automating workflows and repetitive tasks.",
    icon: "🤖",
  },
  {
    name: "API Integration",
    description: "Connecting diverse services and data sources.",
    icon: "🔗",
  },
  {
    name: "Performance Optimization",
    description: "Making apps fast and resource-efficient.",
    icon: "🚀",
  },
  {
    name: "Technical Writing",
    description: "Documenting code and processes for clarity.",
    icon: "✍️",
  },
  {
    name: "Remote Collaboration",
    description: "Working effectively with distributed teams.",
    icon: "🌍",
  },
];

const technicalSkills = [
  {
    name: "Java",
    icon: "☕",
    description: "Robust backend development and enterprise applications.",
  },
  {
    name: "Spring Boot",
    icon: "🌱",
    description: "Building scalable RESTful APIs and microservices.",
  },
  {
    name: "Microservices",
    icon: "🧩",
    description:
      "Designing distributed systems for flexibility and scalability.",
  },
  {
    name: "REST APIs",
    icon: "🔌",
    description:
      "Integrating services and enabling communication between systems.",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    description: "Managing relational databases for structured data.",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    description: "Handling NoSQL databases for flexible data storage.",
  },
  {
    name: "ReactJS",
    icon: "⚛️",
    description: "Building interactive and dynamic user interfaces.",
  },
  {
    name: "JavaScript",
    icon: "🟨",
    description: "Core scripting for web applications and logic.",
  },
  {
    name: "Angular",
    icon: "🅰️",
    description: "Developing robust front-end applications.",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    description: "Writing safer and scalable JavaScript code.",
  },
  {
    name: "HTML",
    icon: "📄",
    description: "Structuring web content and layouts.",
  },
  {
    name: "CSS",
    icon: "🎨",
    description: "Styling and designing responsive web pages.",
  },
  {
    name: "Git",
    icon: "🔗",
    description: "Version control and collaborative development.",
  },
  {
    name: "Jenkins",
    icon: "🧰",
    description: "Automating CI/CD pipelines for faster deployments.",
  },
  {
    name: "AWS",
    icon: "☁️",
    description: "Cloud computing and scalable infrastructure.",
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/40 py-16">
      <SectionTitle>Technical Skills</SectionTitle>
      <SectionSubtitle>
        Technologies, frameworks, and tools I work with:
      </SectionSubtitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 mb-16">
        {technicalSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-card rounded-lg shadow hover:scale-105 transition-transform"
          >
            <span className="text-3xl mb-2">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
            <p className="text-muted-foreground text-center text-sm">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      <SectionTitle>My Unique Skills</SectionTitle>
      <SectionSubtitle>
        Beyond the basics, here’s what sets me apart:
      </SectionSubtitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {uniqueSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-6 bg-card rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <span className="text-4xl mb-4">{skill.icon}</span>
            <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
            <p className="text-muted-foreground text-center">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
