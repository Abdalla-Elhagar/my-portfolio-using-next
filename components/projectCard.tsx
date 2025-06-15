import { ProjectsTypes } from "@/components/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
export default function ProjectCard({ project }: { project: ProjectsTypes }) {
  return (
    <li className="bg-[#232329] h-fit m-5 rounded-md transition-all duration-300 hover:scale-110">
      <Image
        src={project.image}
        alt="Project Image"
        className="object-cover w-full h-[180px] rounded-md"
      />
      <div className="bottom px-4 py-4">
        <h4 className="text-2xl font-semibold">{project.name}</h4>
        <div className="icons -mb-2 py-4 flex justify-between text-2xl">
          <Link href={project.github} target="_blanck" className="transition-all duration-300 hover:text-mainHover">
            <FiGithub />
          </Link>
          <Link href={project.website} target="_blanck" className="transition-all duration-300 hover:text-mainHover">
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </li>
  );
}
