"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldAlert, Cloud, Code, Globe, Monitor, Wrench, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <ShieldAlert className="h-6 w-6 text-emerald-500" />,
      skills: [
        "SIEM Management (Splunk)",
        "Network Security",
        "Penetration Testing",
        "Vulnerability Assessment",     
        "Digital Forensics (Hardware-Based)",
        "Ethical Hacking (Learning)",
        "Cyber Intelligence Research",
        "Security Awareness Training",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="h-6 w-6 text-emerald-500" />,
      skills: ["Wireshark", "Nmap", "Splunk", "TryHackMe", "Canva", "Figma", "Git/GitHub"],
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="h-6 w-6 text-emerald-500" />,
      skills: ["Python", "Java","Javascript", "Dart", "SQL", "Bash (Basic)"],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6 text-emerald-500" />,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Cloud Security",
      icon: <Wrench className="h-6 w-6 text-emerald-500" />,
      skills: ["AWS Security Principles", "Cloud Governance Principles"],
    },
    {
      title: "Professional Skills",
      icon: <Users className="h-6 w-6 text-emerald-500" />,
      skills: ["Project Management", "Teamwork", "Problem-Solving", "Communication", "Content Creation", "Leadership"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-900 relative">
      {/* Decorative code background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="text-xs font-mono text-emerald-500 whitespace-pre leading-tight p-4">
          {`
function detectVulnerabilities(system) {
  const vulnerabilities = [];
  
  // Check for common security issues
  const securityIssues = scanForSecurityIssues(system);
  
  // Analyze network traffic
  const networkThreats = analyzeNetworkTraffic(system.network);
  
  // Check for outdated software
  const outdatedSoftware = checkForOutdatedSoftware(system.software);
  
  return [...securityIssues, ...networkThreats, ...outdatedSoftware];
}

function mitigateThreats(vulnerabilities) {
  return vulnerabilities.map(vulnerability => {
    // Apply security patches
    if (vulnerability.type === 'software') {
      return applySecurityPatch(vulnerability);
    }
    
    // Configure firewall rules
    if (vulnerability.type === 'network') {
      return configureFirewall(vulnerability);
    }
    
    // Implement security policies
    return implementSecurityPolicy(vulnerability);
  });
}

// Main security monitoring loop
function monitorSecurity(system) {
  setInterval(() => {
    const vulnerabilities = detectVulnerabilities(system);
    
    if (vulnerabilities.length > 0) {
      const mitigations = mitigateThreats(vulnerabilities);
      logSecurityEvents(vulnerabilities, mitigations);
      alertSecurityTeam(vulnerabilities);
    }
  }, 60000); // Check every minute
}
          `}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`bg-gray-800 border-gray-700 hover:border-emerald-500/50 transition-all duration-300 h-full ${
                  activeCategory === category.title ? "border-emerald-500 shadow-lg shadow-emerald-500/20" : ""
                }`}
                onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center space-x-2">
                    <motion.div
                      animate={{
                        rotate: activeCategory === category.title ? [0, 15, -15, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        className="text-gray-300 flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: skillIndex * 0.05 },
                        }}
                      >
                        <span className="mr-2">•</span>
                        <span className="group-hover:text-emerald-400 transition-colors">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill visualization */}
        <motion.div
          className="mt-16 bg-gray-800 p-6 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Skill Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "SIEM Management", level: 85 },
              { name: "Network Security", level: 80 },
              { name: "Vulnerability Assessment", level: 90 },
              { name: "Python", level: 75 },
              { name: "Threat Analysis", level: 85 },
              { name: "Cloud Security", level: 70 },
              { name: "Digital Forensics", level: 65 },
              { name: "Ethical Hacking", level: 60 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span className="text-emerald-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
