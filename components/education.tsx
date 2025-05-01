"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      institution: "Shah and Anchor Kutchhi Engineering College",
      location: "Mumbai",
      degree: "Bachelor of Engineering (BE), Cyber Security",
      period: "Expected 2026",
      grade: "CGPA: 8.7 (till 5th Sem)",
    },
    {
      institution: "VPM's Polytechnic",
      location: "Thane",
      degree: "Diploma in Information Technology",
      period: "2020 - 2023",
      grade: "Percentage: 86.00%",
    },
    {
      institution: "Bharat English High School",
      location: "Thane",
      degree: "Secondary School Certificate (SSC)",
      period: "2019 - 2020",
      grade: "Percentage: 84.40%",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="education" className="py-20 bg-gray-950 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute -left-20 top-1/3 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">My academic journey and qualifications</p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="border-l-4 border-emerald-500 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center space-x-2">
                      <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>
                        <GraduationCap className="h-5 w-5 text-emerald-500" />
                      </motion.div>
                      <span>{edu.degree}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-lg font-medium">{edu.institution}</div>

                      <div className="flex flex-col md:flex-row md:items-center text-gray-400 text-sm space-y-1 md:space-y-0 md:space-x-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Education visualization */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-center">Educational Journey</h3>
            <div className="relative py-8">
              <div className="absolute left-0 right-0 h-1 bg-gray-700 top-1/2 transform -translate-y-1/2"></div>

              <div className="flex justify-between relative">
                {education
                  .slice()
                  .reverse()
                  .map((edu, i) => (
                    <motion.div
                      key={i}
                      className="text-center relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.2 * i }}
                    >
                      <div className="absolute w-px h-16 bg-gray-700 left-1/2 transform -translate-x-1/2 -top-16"></div>
                      <div className="w-10 h-10 rounded-full bg-emerald-500 mx-auto z-10 relative flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <div className="mt-4 max-w-[150px]">
                        <div className="font-medium text-sm">{edu.degree.split(",")[0]}</div>
                        <div className="text-xs text-gray-400 mt-1">{edu.period}</div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
