"use client";

import ProjectsCard from "@/components/projectCard";
import { TabsContent } from "@/components/ui/tabs";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsData } from "./projectData";
import { ProjectsTypes } from "@/components/types";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Contact() {
  return (
    <motion.section
      transition={{ duration: 0.4, delay: 2, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex justify-center items-center py-12 lg:py-0"
    >
      <div className="container mx-auto flex flex-col gap-3">
        <h3 className="text-4xl font-bold">My projects</h3>
        <p className="text-white/60">
          Built several web projects using React, Next.js, and Tailwind CSS,
          focusing on responsive design, user experience, and performance.
          Projects include real-world features like authentication, routing,
          state management, and API integration.
        </p>

        <Tabs
          defaultValue="All"
          className="flex flex-col justify-center items-start lg:flex-row gap-[60px] mt-5"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger className="bg-[#232329] py-2 rounded-md" value="All">
              All
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#232329] py-2 rounded-md"
              value="HTML&CSS"
            >
              HTML&CSS
            </TabsTrigger>
            <TabsTrigger className="bg-[#232329] py-2 rounded-md" value="JS">
              JavaScript
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#232329] py-2 rounded-md"
              value="BootStrap"
            >
              BootStrap
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#232329] py-2 rounded-md"
              value="tailWind"
            >
              Tailwind
            </TabsTrigger>
            <TabsTrigger className="bg-[#232329] py-2 rounded-md" value="React">
              React
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* All projects */}
            <TabsContent value="All">
              <ScrollArea className="h-[580px]">
                <AnimatePresence>
                  <motion.ul
                    transition={{ duration: 0.7, delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px]"
                  >
                    {ProjectsData.map((project: ProjectsTypes) => (
                      <li
                        key={project.id}
                        className="bg-[#232329] h-[280px] rounded-md"
                      >
                        <ProjectsCard project={project} />
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </ScrollArea>
            </TabsContent>

            {/* HTML&CSS projects */}
            <TabsContent value="HTML&CSS">
              <ScrollArea className="h-[580px]">
                <AnimatePresence>
                  <motion.ul
                    transition={{ duration: 0.7, delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px]"
                  >
                    {ProjectsData.filter((project: ProjectsTypes) =>
                      project.type.includes("HTML&CSS")
                    ).map((project: ProjectsTypes) => (
                      <li
                        key={project.id}
                        className="bg-[#232329] h-[280px] rounded-md"
                      >
                        <ProjectsCard project={project} />
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </ScrollArea>
            </TabsContent>

            {/* JS projects */}
            <TabsContent value="JS">
              <ScrollArea className="h-[580px]">
                <AnimatePresence>
                  <motion.ul
                    transition={{ duration: 0.7, delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px]"
                  >
                    {ProjectsData.filter((project: ProjectsTypes) =>
                      project.type.includes("JS")
                    ).map((project: ProjectsTypes) => (
                      <li
                        key={project.id}
                        className="bg-[#232329] h-[280px] rounded-md"
                      >
                        <ProjectsCard project={project} />
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </ScrollArea>
            </TabsContent>

            {/* BootStrap projects */}
            <TabsContent value="BootStrap">
              <ScrollArea className="h-[580px]">
                <AnimatePresence>
                  <motion.ul
                    transition={{ duration: 0.7, delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px]"
                  >
                    {ProjectsData.filter((project: ProjectsTypes) =>
                      project.type.includes("BootStrap")
                    ).map((project: ProjectsTypes) => (
                      <li
                        key={project.id}
                        className="bg-[#232329] h-[280px] rounded-md"
                      >
                        <ProjectsCard project={project} />
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </ScrollArea>
            </TabsContent>

            {/* tailWind projects */}
            <TabsContent value="tailWind">
              <ScrollArea className="h-[580px]">
                <AnimatePresence>
                  <motion.ul
                    transition={{ duration: 0.7, delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px]"
                  >
                    {ProjectsData.filter((project: ProjectsTypes) =>
                      project.type.includes("tailWind")
                    ).map((project: ProjectsTypes) => (
                      <li
                        key={project.id}
                        className="bg-[#232329] h-[280px] rounded-md"
                      >
                        <ProjectsCard project={project} />
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </ScrollArea>
            </TabsContent>

            {/* React projects */}
            <TabsContent value="React">
              <ScrollArea className="h-[580px]">
                <AnimatePresence>
                  <motion.ul
                    transition={{ duration: 0.7, delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px]"
                  >
                    {ProjectsData.filter((project: ProjectsTypes) =>
                      project.type.includes("React")
                    ).map((project: ProjectsTypes) => (
                      <li
                        key={project.id}
                        className="bg-[#232329] h-[280px] rounded-md"
                      >
                        <ProjectsCard project={project} />
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
