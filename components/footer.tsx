"use client"

import Link from "next/link"
import { Shield, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800 relative">
      {/* Matrix-like background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="text-xs font-mono text-emerald-500 whitespace-pre leading-tight p-4">
          {Array(20)
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
        <div className="flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="#home" className="flex items-center space-x-2 text-xl font-bold mb-6">
              <Shield className="h-6 w-6 text-emerald-500" />
              <span>Nikhil Mokal</span>
            </Link>
          </motion.div>

          <motion.div
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Certifications", href: "#certifications" },
              { name: "Achievements", href: "#achievements" },
              { name: "Education", href: "#education" },
              { name: "Contact", href: "#contact" },
            ].map((link, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Link href={link.href} className="text-gray-400 hover:text-emerald-400 text-sm">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>&copy; {currentYear} Nikhil Mokal. All rights reserved.</p>
            <p className="mt-2 text-xs">
              <span className="text-emerald-500">{"<"}</span>
              <span className="mx-1">Securing the digital world, one line of code at a time</span>
              <span className="text-emerald-500">{"/>"}</span>
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className={`mt-8 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors fixed bottom-8 right-8 z-50 ${
              isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <ArrowUp className="h-5 w-5 text-emerald-500" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
