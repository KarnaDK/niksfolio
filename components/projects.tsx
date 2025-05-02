"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Bot } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react"; // Import useEffect

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [binaryPattern, setBinaryPattern] = useState<string>(""); // State for the binary pattern

  useEffect(() => {
    // Generate the binary pattern only on the client
    const generateBinaryPattern = () => {
      return Array(100)
        .fill(0)
        .map(() =>
          Array(100)
            .fill(0)
            .map(() => Math.round(Math.random()))
            .join(""),
        )
        .join("\n");
    };

    setBinaryPattern(generateBinaryPattern());
  }, []); // Empty dependency array means this runs only once on mount

  const projects = [
    {
      title: "Karna: All in one Raksha Kavach",
      subtitle: "Mobile Security Application",
      description:
        "Led development and implementation of core security features for a mobile application designed to combat misinformation and enhance user security. Engineered an AI-powered chatbot (using Gemini API) for real-time fake news classification and cyber assistance.",
      features: [
        "AI-powered chatbot for fake news classification",
        "Vulnerability detection system",
        "Malicious URL filtering",
        "Password security checking",
        "Security score system",
      ],
      technologies: ["Flutter", "Dart", "Gemini API", "Python"],
      context: "Developed during HackOverFlow 3.0 (3-day hackathon)",
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
      links: {
        demo: "#",
        github: "https://github.com/nikkk404/karna",
      },
    },
    {
      title: "Karna: Cybersecurity-Assisted Chatbot",
      subtitle: "AI Development",
      description:
        "Developed an interactive AI chatbot using Flutter and Dart for real-time security responses and user guidance (leveraging Mistral AI Model). Implemented secure API key management and user-server communication protocols.",
      features: [
        "Real-time security responses",
        "User guidance system",
        "Secure API key management",
        "User-server communication protocols",
      ],
      technologies: ["Flutter", "Dart", "Mistral AI Model"],
      context: "Core component of the 'Karna' mobile security application",
      icon: <Bot className="h-10 w-10 text-emerald-500" />,
      links: {
        demo: "#",
        github: "https://github.com/nikkk404/karna-chatbot",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative">
      {/* Binary pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="text-xs font-mono text-emerald-500 whitespace-pre leading-tight p-4">
          {binaryPattern} {/* Use the state variable */}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Showcasing my practical application of cybersecurity skills through innovative projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`bg-gray-800 border-gray-700 overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 ${
                  activeProject === index ? "border-emerald-500" : ""
                }`}
                onClick={() => setActiveProject(activeProject === index ? null : index)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>
                      {project.icon}
                    </motion.div>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                      {project.context}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-4">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="text-gray-300 flex"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        >
                          <span className="mr-2 text-emerald-500">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-700 hover:bg-emerald-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {activeProject === index && (
                    <motion.div
                      className="mt-4 p-3 bg-gray-900 rounded-md border border-gray-700 overflow-x-auto"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <pre className="text-xs text-emerald-400 font-mono">

                      </pre>
                    </motion.div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10 group"
                  >
                    <Link href={project.links.github} className="flex items-center">
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}