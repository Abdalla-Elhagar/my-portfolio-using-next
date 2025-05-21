"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceType {
  num: string;
  title: string;
  description: string;
  href: string;
}
const services: ServiceType[] = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Building responsive and interactive websites using React.js, Tailwind CSS, and modern JavaScript.",
    href: "https://wa.me/201129352754?text=Hello%20ِAbdalla!%0AI'm interested in your Frontend Development services.%0ACould you help me build a responsive and interactive website?",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces with a focus on simplicity and usability.",
    href: "https://wa.me/201129352754?text=Hi%20ِAbdalla,%0AI need help optimizing my website's performance.%0ACan you assist me in making it faster and more efficient?",
  },
  {
    num: "03",
    title: "Performance Optimization",
    description:
      "Improving website speed and performance for a smooth user experience.",
    href: "https://wa.me/201129352754?text=Hello%20ِAbdalla,%0AI'm looking for someone to help me maintain and update my website.%0ACould you assist with fixing bugs and making regular updates?",
  },
  {
    num: "04",
    title: "Version Control",
    description:
      "Using Git and GitHub to manage code versions and collaborate effectively.",
    href: "https://wa.me/201129352754?text=Hi%20ِAbdalla,%0AI need support with connecting my frontend app to a REST API.%0ACan you help me with the integration and data handling?",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service: ServiceType, index: number) => (
            <div
              key={index}
              className="col-span-1 flex flex-col flex-1 justify-center gap-6 group"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center ">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  className="size-[70px] rounded-full bg-white group-hover:bg-main duration-500 transition-all hover:-rotate-45 text-primary flex items-center justify-center"
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsArrowDownRight className="text-3xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none group-hover:text-main duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60 duration-500">
                {service.description}
              </p>
              {/* border */}
              <div className="border-b border-white/20 w-full duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
