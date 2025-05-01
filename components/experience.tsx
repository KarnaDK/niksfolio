"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, MonitorSmartphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Cybersecurity Fellow & Cyber Content Creator",
      company: "Deepcytes Cyber Labs UK",
      location: "Remote",
      period: "Jun 2024 – Dec 2024",
      description: [
        "Completed fellowship focused on Cyber Intelligence, contributing significantly to organizational research efforts and enriching comprehension of cybersecurity complexities.",
        "Instrumental in the successful completion of several research tasks through diligence and hard work.",
        "Consistently demonstrated excellence in completing tasks on time, showing unwavering dedication, effective team communication, and strong leadership skills.",
        "Managed and curated engaging visual content (Canva, Figma) for DeepCytes Ventures' Instagram, enhancing brand awareness on cybersecurity topics.",
      ],
    },
    {
      title: "Research Fellow",
      company: "CyberPeace Center of Excellence, SAKEC",
      location: "Mumbai",
      period: "[Start Date] – [End Date]",
      note: "[User: Please update with specific dates]",
      description: [
        "Developed projects and conducted research work focused on [Specify research areas, e.g., threat intelligence, vulnerability analysis, cybersecurity awareness]",
        "Note: [User: Please specify research focus]",
        'Led the Nukkad Natak (Street Play) "Cyber Suraksha" initiative, raising awareness about Identity Theft across Mumbai communities.',
        "Managed the graphic design team supporting the Nukkad Natak initiative, ensuring cohesive visual messaging.",
      ],
    },
    {
      title: "Service Team Intern",
      company: "INFOBAHN TECHNICAL SOLUTION (I) Pvt. Ltd",
      location: "Thane (On-site)",
      period: "Jul 2022 – Aug 2022",
      description: [
        "Diagnosed and resolved hardware-related issues on computer systems using troubleshooting methodologies.",
        "Performed hands-on maintenance/repair of laptop systems, developing skills in component-level diagnostics.",
        "Developed a foundational understanding of computer hardware architecture, essential for identifying potential system vulnerabilities.",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gray-950 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-900/5 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My journey through various roles in the cybersecurity and technology landscape
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                <div className="border-l-4 border-emerald-500 h-full">
                  <CardHeader>
                    <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-5 w-5 text-emerald-500" />
                        <span>{exp.title}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </CardTitle>
                    <div className="flex flex-col md:flex-row md:items-center text-gray-400 text-sm mt-1 space-y-1 md:space-y-0 md:space-x-4">
                      <div className="flex items-center">
                        <MonitorSmartphone className="h-4 w-4 mr-1" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    {exp.note && <p className="text-amber-500 text-sm mt-1 italic">{exp.note}</p>}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-gray-300 flex"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + itemIndex * 0.1 }}
                        >
                          <span className="mr-2 text-emerald-500">•</span>
                          <span>
                            {item.includes("[User:") ? (
                              <>
                                {item.split("[User:")[0]}
                                <span className="text-amber-500 italic">{`[User: ${item.split("[User:")[1]}`}</span>
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline visualization */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-500/30"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-emerald-500 absolute left-1/2 transform -translate-x-1/2 z-10`}
              ></div>
              <motion.div
                className={`w-5/12 p-4 bg-gray-800 rounded-lg border border-gray-700 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <h3 className="font-medium">{exp.title}</h3>
                <p className="text-sm text-gray-400">
                  {exp.company} | {exp.period}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
