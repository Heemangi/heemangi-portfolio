"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Solvex - The Online Judge",
    description: "This Coding Platform is crafted to provide a space where individuals can practice and develop their coding skills. The built-in code evaluator automatically assesses their code submissions against predefined test cases and gives feedback.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Heemangi/OnlineJudge",
    previewUrl: "https://frontend-oj.vercel.app/",
  },
  {
    id: 2,
    title: "SariSway - The Traditional Ecommerce Store",
    description: "A captivating e-commerce platform for Indian sarees and ethnic wear, engineered with MongoDB, Express, Node.js, and React.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Heemangi/SariswayE",
    previewUrl: "https://frontend-inky-three-37.vercel.app/",
  },
  {
    id: 3,
    title: "Harmony Havens - The Real Estate Site",
    description: "Developed a comprehensive real estate application with MERN stack and Socket.io for seamless user experience. It provides a catalog of properties and real-time chat functionality for direct communication between users and property owners/agents.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Heemangi/Harmony-Havens-Estate-App",
    previewUrl: "https://github.com/Heemangi/Harmony-Havens-Estate-App",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
