"use client"

import { MapPin, Mail, Linkedin, Github, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Contact() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I’d love to hear from you! Whether it’s a project, job opportunity, or just a chat, feel free to reach out.
          </p>
          {/* Download Resume Button */}
          <div className="mt-8">
            <a
              href="/Nikhil Mokal.pdf"
              download="Nikhil Mokal.pdf"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-medium rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Information */}
          <motion.div
            className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-emerald-500" />
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400">Thane, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-emerald-500" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400">contact.nikhil02@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Linkedin className="h-6 w-6 text-emerald-500" />
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <p className="text-gray-400">
                    <a
                      href="https://www.linkedin.com/in/heyynikhil/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      linkedin.com/in/heyynikhil
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Github className="h-6 w-6 text-emerald-500" />
                <div>
                  <h4 className="font-medium text-white">GitHub</h4>
                  <p className="text-gray-400">
                    <a
                      href="https://github.com/nikkk404"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      github.com/nikkk404
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
