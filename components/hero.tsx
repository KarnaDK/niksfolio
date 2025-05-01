"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, Shield, Terminal } from "lucide-react"
import Link from "next/link"
import Navbar from "./navbar"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [terminalText, setTerminalText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    setIsVisible(true)

    // Terminal animation
    const messages = [
      { text: "> Initializing security protocols...", delay: 500 },
      { text: "> Loading profile: Nikhil Mokal", delay: 1000 },
      { text: "> Specialization: Security Operations, Threat Analysis, Cloud Security", delay: 1500 },
      { text: "> TryHackMe Rank: Top 4%", delay: 800 },
      { text: "> System ready. Welcome to my portfolio.", delay: 1200 },
    ]

    let timeout: NodeJS.Timeout
    let currentIndex = 0
    let currentText = ""

    const typeNextMessage = () => {
      if (currentIndex >= messages.length) {
        return
      }

      const message = messages[currentIndex]
      currentText = message.text
      setTerminalText(currentText)
      currentIndex++

      timeout = setTimeout(typeNextMessage, message.delay)
    }

    typeNextMessage()

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(timeout)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Navbar />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 py-24 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-emerald-500">Nikhil Mokal</span>
              </h1>
              <div className="text-xl md:text-2xl font-medium text-gray-300 h-16">
                <TypeAnimation
                  sequence={[
                    "BTech Cyber Security Student",
                    1000,
                    "Security Operations Specialist",
                    1000,
                    "Threat Analysis Expert",
                    1000,
                    "AI-Driven Security Developer",
                    1000,
                    "Top 4% TryHackMe Rank",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl">
              Highly motivated cybersecurity specialist with expertise in Security Operations, Threat Analysis, and
              Cloud Security. Proven track record in developing innovative security solutions and contributing to cyber
              intelligence research.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="px-3 py-1 border-emerald-500/50 bg-emerald-500/10 text-emerald-400 animate-pulse"
              >
                SIEM Management
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-emerald-500/50 bg-emerald-500/10 text-emerald-400">
                Threat Analysis
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 border-emerald-500/50 bg-emerald-500/10 text-emerald-400 animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                Python
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-emerald-500/50 bg-emerald-500/10 text-emerald-400">
                AWS Security
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 border-emerald-500/50 bg-emerald-500/10 text-emerald-400 animate-pulse"
                style={{ animationDelay: "2s" }}
              >
                Vulnerability Assessment
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 group transition-all duration-300 transform hover:translate-x-1">
                <Link href="#projects" className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
              >
                <Link href="#contact" className="flex items-center">
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-md">
              <div
                ref={terminalRef}
                className="bg-gray-950 border border-emerald-500/30 rounded-lg shadow-lg shadow-emerald-500/10 p-4 font-mono text-sm overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Terminal className="h-3 w-3 mr-1" />
                    <span>terminal@nikhil-mokal</span>
                  </div>
                </div>
                <div className="text-emerald-400 min-h-[200px]">
                  {terminalText}
                  {cursorVisible && <span className="text-emerald-400">▋</span>}
                </div>
              </div>

              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-8 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-xl shadow-emerald-500/10"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.2)",
                    "0 0 40px rgba(16, 185, 129, 0.4)",
                    "0 0 20px rgba(16, 185, 129, 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-gray-900"></div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-emerald-500">
                  <Shield className="h-20 w-20 opacity-80" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-emerald-500">
                  NM
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
