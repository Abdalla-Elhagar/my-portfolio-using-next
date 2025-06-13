"use client";
import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiRedux } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// types imports
import {
  aboutType,
  educationType,
  experienceType,
  skillsType,
} from "@/components/types";

// About data
const about: aboutType[] = [
  {
    title: "Name",
    description: "Abdalla Elhagar",
  },
  { title: "phone", description: "(+20) 112 935 2754" },
  {
    title: "Experience",
    description: "3+ months",
  },
  { title: "Nationality", description: "Egyptian" },
  {
    title: "Email",
    description: "abdallaelhgar@gmail.com",
  },
  { title: "Freelance", description: "Available" },
  { title: "languages", description: "Arabic, English" },
];

// Skills data
const skills: skillsType[] = [
  {
    title: "HTML",
    icon: <FaHtml5 className="" />,
  },
  {
    title: "CSS",
    icon: <FaCss3 className="" />,
  },
  {
    title: "JavaScript",
    icon: <FaJs className="" />,
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap className="" />,
  },
  {
    title: "React",
    icon: <FaReact className="" />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="" />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="" />,
  },
  {
    title: "Redux",
    icon: <SiRedux className="" />,
  },
];

// Education data
const education: educationType[] = [
  {
    title: "Bachelor of Computer Science",
    teacher: "HIMIT",
    date: "2021 - 2025",
  },
  {
    title: "HTML, CSS, JavaScript, and Bootstrap for Web Developers",
    teacher: "Elzero Web School",
    date: "2022 - 2023",
  },
  { title: "Tailwind CSS", teacher: "Online Courses", date: "2024" },
  {
    title: "React.js",
    teacher: "Tarmeez Academy",
    date: "2024",
  },
  {
    title: "Next.js",
    teacher: "Online Courses",
    date: "2025",
  },
];

// Experience data
const experience: experienceType[] = [
  {
    title: "Front-End Developer",
    company: "Web Masters",
    date: "Nov 2024 - Feb 2025",
  },
];

export default function Resume() {
  return (
    <motion.div
      transition={{ duration: 0.4, delay: 2, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex justify-center items-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col justify-center items-start lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">My experience</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  Gained hands-on experience by building personal projects using
                  React.js, Redux Toolkit, and Next.js. Focused on creating
                  responsive, user-friendly interfaces and applying best
                  practices in performance, state management, and version
                  control with Git.
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2">
                    {experience.map((item: experienceType, index: number) => (
                      <li className="bg-[#232329] h-[184] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-main">{item.date}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.title}
                        </h3>
                        <div className="dat flex items-center gap-3">
                          <span className="size-[6px] rounded-full bg-main "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">My education</h3>
                <p className="max-w-[600px] -mt-5 text-white/60 mx-auto xl:mx-0">
                  Studied computer science with a focus on web development.
                  Built a solid foundation in HTML, CSS, JavaScript, React.js,
                  and Next.js through academic and personal projects.
                </p>
                <ScrollArea className="h-[400px] -mt-5">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]  ">
                    {education.map((item: educationType, index: number) => (
                      <li className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-main">{item.date}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.title}
                        </h3>
                        <div className="dat flex items-center gap-3">
                          <span className="size-[6px] rounded-full bg-main "></span>
                          <p className="text-white/60">{item.teacher}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
