"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Cpu, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="py-20 bg-gray-950 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute -left-20 top-1/4 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.p
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am a highly motivated BTech Cyber Security student with a passion for developing innovative security
            solutions and identifying vulnerabilities. My expertise spans Security Operations, Threat Analysis, and
            Cloud Security, with a proven track record in cyber intelligence research during my fellowship at Deepcytes
            Cyber Labs UK.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My practical skills are demonstrated through my top 4% ranking on TryHackMe, where I've solved over 110
            challenges across web exploitation, network security, and reverse engineering. I've also applied my
            knowledge in developing AI-driven security applications like "Karna," which combats misinformation and
            enhances mobile user security.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            With core technical competencies in SIEM Management, Vulnerability Assessment, Network Security, and Python
            scripting, I'm eager to apply my skills in challenging cybersecurity roles. I'm continuously expanding my
            knowledge in areas like Ethical Hacking and Incident Response, committed to making meaningful contributions
            to the cybersecurity field.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="h-10 w-10 text-emerald-500 mt-1" />,
                title: "Security Expertise",
                description:
                  "Specialized in SIEM Management, Network Security, and Vulnerability Assessment with practical experience through CTF competitions.",
              },
              {
                icon: <Target className="h-10 w-10 text-emerald-500 mt-1" />,
                title: "Threat Analysis",
                description:
                  "Experience in identifying and analyzing security threats, contributing to cyber intelligence research during my Deepcytes fellowship.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-emerald-500 mt-1" />,
                title: "Technical Skills",
                description:
                  "Proficient in Python, Java, and SQL with hands-on experience developing security applications and tools.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-emerald-500 mt-1" />,
                title: "Innovation Focus",
                description:
                  'Passionate about developing innovative security solutions, as demonstrated by the AI-driven "Karna" mobile security application.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 transform transition-transform duration-300 hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
