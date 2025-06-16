"use client"

import { ProjectsData } from '@/app/Projects/projectData'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { TabsContent } from '@radix-ui/react-tabs'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { ProjectsTypes } from './types'
import ProjectsCard from '@/components/projectCard';

export default function ProjectsContent({value}:{value:string;}) {
  return (
    <TabsContent value={value}>
              <ScrollArea className="h-[580px]">
                <AnimatePresence mode="wait">
                  <motion.ul
                    transition={{ duration: 0.7, delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} exit={{opacity:0}}
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-[40px] justify-center"
                  >
                    {ProjectsData.filter((project: ProjectsTypes)=> value=="All"? project : project.type.includes(value)).map((project: ProjectsTypes) => (
                      <ProjectsCard key={project.id} project={project} />
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </ScrollArea>
            </TabsContent>
  )
}
