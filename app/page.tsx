import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
    transition={{ duration: 0.4, delay: 2, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} exit={{opacity:0}} className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col gap-5 lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text */}
          <div className="text-center  order-2 lg:order-none lg:text-left">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="text-5xl font-semibold mb-6">
              Hello I'm <br />
              <span className="text-main">Abdalla Elhagar</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-[rgb(255 255 255 / 80%)]">
              I’m a Frontend Developer specialized in building modern web
              applications using React.js and Next.js, with experience in
              JavaScript, Tailwind CSS, and Redux. I focus on delivering clean
              and efficient user interfaces and continuously work on improving
              my skills and contributing to meaningful tech projects.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <a href="/cv/AbdallaElhagarResume.pdf" download>
                <Button
                  className="uppercase flex items-center gap-2 hover:bg-main hover:text-primary transition-all duration-500"
                  variant="outline"
                  size="lg"
                >
                  <span>DOWNLOAD CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 lg:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles=" size-9 border border-main rounded-full flex justify-center items-center text-base text-main hover:bg-main hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className=" order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
