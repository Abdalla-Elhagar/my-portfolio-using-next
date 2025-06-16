"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ProjectsContent from "@/components/projectsContent";

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
            <TabsTrigger className="bg-[#232329] py-3 rounded-md" value="All">
              All
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#232329] py-3 rounded-md"
              value="HTML&CSS"
            >
              HTML&CSS
            </TabsTrigger>
            <TabsTrigger className="bg-[#232329] py-3 rounded-md" value="JS">
              JavaScript
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#232329] py-3 rounded-md"
              value="BootStrap"
            >
              BootStrap
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#232329] py-3 rounded-md"
              value="tailWind"
            >
              Tailwind
            </TabsTrigger>
            <TabsTrigger className="bg-[#232329] py-3 rounded-md" value="React">
              React
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* All projects */}
            <ProjectsContent value="All" />

            {/* HTML&CSS projects */}
            <ProjectsContent value="HTML&CSS" />

            {/* JS projects */}
            <ProjectsContent value="JS" />

            {/* BootStrap projects */}
            <ProjectsContent value="BootStrap" />

            {/* tailWind projects */}
            <ProjectsContent value="tailWind" />

            {/* React projects */}
            <ProjectsContent value="React" />
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
