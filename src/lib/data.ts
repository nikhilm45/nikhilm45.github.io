import {
  Github,
  Linkedin,
  GraduationCap,
  Instagram,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhilkumar-marathe/",
    icon: Linkedin,
  },
  { name: "GitHub", href: "http://github.com/nikhilm45", icon: Github },
  {
    name: "Instagram",
    href: "https://instagram.com/nikhil__marathe",
    icon: Instagram,
  },
];

export const experience = [
  {
    company: "Cognizant Technology Solutions",
    role: "Full Stack Developer",
    period: "2021 - Present",
    description:
      "Led the development of scalable web applications using Java and React + Angular. Implemented CI/CD pipelines, reducing deployment time by 40%. Mentored junior developers and conducted code reviews.",
    logoUrl: "/cognizant-logo.png",
  },
  {
    company: "Utkarshini Edutech",
    role: "Machine Learning Researcher(Intern)",
    period: "2020",
    description:
      "Artficial Neural Network based Reserach with different machine learning models and approach. Developed a predictive model for student performance using Python and scikit-learn. Collaborated with the data science team to analyze educational datasets.",
    logoUrl: "/utkarshini-logo.png",
  },
];

export const projects = [
  {
    title: "Patient Management System",
    description:
      "Simple Management System using Java Spring Boot & JavaScript with CRUD features, REST APIs, and a clean, user-friendly UI.",
    technologies: ["Java", "Spring Boot", "Javascript", "MySQL"],
    repoLink: "https://github.com/nikhilm45/PensionManagementSystem",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "A Python-based attendance system using OpenCV and face_recognition library. It captures real-time video, detects faces, and marks attendance in a CSV file.",
    technologies: ["Python", "OpenCV", "Tkinter"],
    repoLink:
      "https://github.com/nikhilm45/face-recognition-attendance-management-system",
  },
  {
    title: "Food App - Healthy or Not?",
    description:
      "A machine learning project that classifies food items as healthy or unhealthy using a dataset of food images. Built with Python, TensorFlow, and Pandas.",
    technologies: ["Python", "Machine Learning", "Pandas"],
    repoLink: "https://github.com/nikhilm45/FoodApp",
  },
];

export const education = [
  {
    institution:
      "NDMVPs Karmaveer Baburao Ganpatrao Thakare College of Engineering, Nashik",
    degree: "Bachelor of Engineering",
    description:
      "Key coursework in data structures, software architecture, and database management.",
    icon: GraduationCap,
  },
];
