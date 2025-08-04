import { ProjectsTypes } from "@/components/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { ScrollArea } from "./ui/scroll-area";
export default function ProjectCard({ project }: { project: ProjectsTypes }) {
  const [showProjectsDataWindow, setShowProjectsDataWindow] = useState(false);
  return (
    <>
      <li
        className="bg-[#232329] cursor-pointer h-fit m-5 rounded-md transition-all duration-300 hover:scale-110"
        onClick={() => setShowProjectsDataWindow(true)}
      >
        <Image
          src={project.image}
          alt="Project Image"
          className="object-cover w-full h-[180px] rounded-md"
        />
        <div className="bottom px-4 py-4">
          <h4 className="text-2xl font-semibold">{project.name}</h4>
          <ul className="flex mt-1 gap-2 max-w-full flex-wrap">
            {project.technologies.map((skill:string , index:number)=> (
              <li key={index} className="border rounded-md px-2 min-w-fit">
                {skill}
              </li>
            ))}
          </ul>
          <div className="icons -mb-2 py-4 flex justify-between text-2xl">
            <Link
              href={project.github}
              target="_blanck"
              className="transition-all duration-300 hover:text-mainHover"
            >
              <FiGithub />
            </Link>
            <Link
              href={project.website}
              target="_blanck"
              className="transition-all duration-300 hover:text-mainHover"
            >
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </li>
      {showProjectsDataWindow && (
        <div className="bg-black/70 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
          <div className="bg-primary w-5/6 md:w-[600px] h-5/6 relative rounded-lg">
            <button
              className="absolute -right-5 -top-5 text-2xl transition duration-300 hover:text-mainHover"
              onClick={() => setShowProjectsDataWindow(false)}
            >
              <IoClose />
            </button>
            <Image
              src={project.image}
              alt="project image"
              className="w-full h-[160px] md:h-[260px] rounded-t-lg"
            />
            <div className="flex flex-col h-[calc(100%-220px)] md:h-[calc(100%-320px)] m-3 gap-3">
              <h4 className="text-3xl font-bold mb-2">{project.name}</h4>
              
              <ScrollArea className="w-full overflow-auto pr-2">
                <ul className="flex mb-1 gap-2 max-w-full flex-wrap">
            {project.technologies.map((skill:string , index:number)=> (
              <li key={index} className="border rounded-md px-2 min-w-fit">
                {skill}
              </li>
            ))}
          </ul>
                <ul className="list-disc pl-6 space-y-2">
                  {project.more.map((item: string, index: number) => (
                    <li className="pl-2 -indent-2" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollArea>

              <div className="flex justify-end gap-5 text-2xl absolute bottom-2 right-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="transition-all duration-300 hover:text-mainHover"
                >
                  <FiGithub />
                </Link>
                <Link
                  href={project.website}
                  target="_blank"
                  className="transition-all duration-300 hover:text-mainHover"
                >
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
