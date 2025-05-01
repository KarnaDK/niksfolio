"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Flag, Lightbulb, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="achievements" className="py-20 bg-gray-900 relative">
      {/* Matrix-like background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="text-xs font-mono text-emerald-500 whitespace-pre leading-tight p-4">
          {Array(50)
            .fill(0)
            .map(() =>
              Array(100)
                .fill(0)
                .map(() => (Math.random() > 0.5 ? "1" : Math.random() > 0.5 ? "0" : Math.random() > 0.5 ? "#" : "."))
                .join(""),
            )
            .join("\n")}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Achievements & Activities</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Recognitions and participations that showcase my dedication to cybersecurity excellence
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 5,
                    }}
                    className="flex-shrink-0"
                  >
                    <Trophy className="h-8 w-8 text-emerald-500 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">TryHackMe Excellence</h3>
                    <p className="text-gray-300">
                      Ranked in the top 4% on TryHackMe, solving over 110 challenges across web exploitation, network
                      security, and reverse engineering.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Research Publication</h3>
                    <p className="text-gray-300">
                      Published Research Paper: 'ML-Based Network Anomaly Detection' in International Journal of
                      Research Publication and Reviews (IJRPR), Volume: 5, Issue: 4, May 2024.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Flag className="h-8 w-8 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">CTF Competitions</h3>
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center mb-1">
                          <span className="font-medium text-gray-200">UMDCTF 2025 (Team Chanakya)</span>
                          <Badge className="ml-2 bg-emerald-500/20 text-emerald-400 border-0 animate-pulse">
                            48th Student Division
                          </Badge>
                        </div>
                        <p className="text-gray-300">
                          Ranked 48th in Student Division and 142nd Overall out of 708 teams.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center mb-1">
                          <span className="font-medium text-gray-200">DawgCTF 2025 (Team Chanakya)</span>
                        </div>
                        <p className="text-gray-300">Secured 149th place globally.</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center mb-1">
                          <span className="font-medium text-gray-200">Pentathon 2025 (Team Chanakya)</span>
                          <Badge className="ml-2 bg-emerald-500/20 text-emerald-400 border-0">AIR 74</Badge>
                        </div>
                        <p className="text-gray-300">Achieved All India Rank 74 in first National CTF.</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-8 w-8 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Hackathon Success</h3>
                    <p className="text-gray-300">
                      HackOverFlow 3.0 Participant (Team DNA): Developed the "Karna" mobile security application within
                      3 days, implementing AI-powered security features to combat misinformation and enhance user
                      security.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Leadership & Involvement</h3>
                    <ul className="space-y-2 text-gray-300">
                      <motion.li
                        className="flex"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="mr-2 text-emerald-500">•</span>
                        <span>Organized SAKEC CYSE event Nukkad Natak (Cyber Suraksha initiative lead)</span>
                      </motion.li>
                      <motion.li
                        className="flex"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="mr-2 text-emerald-500">•</span>
                        <span>Cyber Department Magazine Team Member (SAKEC)</span>
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Achievement visualization */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-center">Achievement Timeline</h3>
            <div className="relative">
              <div className="absolute left-0 right-0 h-1 bg-gray-700 top-4"></div>
              <div className="flex justify-between relative">
                {[2022, 2023, 2024, 2025].map((year, i) => (
                  <div key={i} className="text-center relative">
                    <motion.div
                      className={`w-8 h-8 rounded-full ${i === 3 ? "bg-emerald-500" : "bg-gray-600"} mx-auto z-10 relative flex items-center justify-center`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.2 * i, duration: 0.5 }}
                    >
                      {i === 3 && <Trophy className="h-4 w-4 text-white" />}
                    </motion.div>
                    <motion.div
                      className="mt-2 text-sm"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 * i }}
                    >
                      {year}
                    </motion.div>
                    <motion.div
                      className={`text-xs mt-1 max-w-[100px] mx-auto ${i === 3 ? "text-emerald-400" : "text-gray-400"}`}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.4 * i }}
                    >
                      {i === 0 && "Started Certifications"}
                      {i === 1 && "HackerRank Achievements"}
                      {i === 2 && "TryHackMe Top 4%"}
                      {i === 3 && "CTF Competitions & Research Paper"}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
