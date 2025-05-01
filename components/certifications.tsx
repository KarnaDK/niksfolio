"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedIssuer, setExpandedIssuer] = useState<string | null>(null)

  const certifications = [
    {
      issuer: "Cybrary",
      name: "DevSecOps Training (2 CEUs/CPES)",
      date: "Apr 2025",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "OPSWAT",
      name: "File Security Associate",
      date: "Apr 2025",
      expiry: "Mar 2026",
      id: "smkZ6rLskA",
      link: "#",
    },
    {
      issuer: "OPSWAT",
      name: "Web Traffic Protection Associate",
      date: "Apr 2025",
      expiry: "Mar 2026",
      id: "8F6Zokc40g",
      link: "#",
    },
    {
      issuer: "OPSWAT",
      name: "Legacy Systems Associate",
      date: "Apr 2025",
      expiry: "Mar 2026",
      id: "dgo60mZuaw",
      link: "#",
    },
    {
      issuer: "OPSWAT",
      name: "Secure Storage Associate",
      date: "Apr 2025",
      expiry: "Mar 2026",
      id: "XpuFkQQ_5g",
      link: "#",
    },
    {
      issuer: "OPSWAT",
      name: "Email Security Associate",
      date: "Apr 2025",
      expiry: "Mar 2026",
      id: "-RPvwDnCRw",
      link: "#",
    },
    {
      issuer: "OPSWAT",
      name: "Network Security Associate",
      date: "Apr 2025",
      expiry: "Mar 2026",
      id: "tNRcLl6MtQ",
      link: "#",
    },
    {
      issuer: "TryHackMe",
      name: "Pre Security",
      date: "Jun 2024",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "TryHackMe",
      name: "Web Fundamentals Learning Path",
      date: "Jun 2024",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "Cisco",
      name: "Introduction to Cybersecurity",
      date: "Nov 2023",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "HackerRank",
      name: "Problem Solving (Basic)",
      date: "Oct 2023",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "HackerRank",
      name: "SQL (Advanced)",
      date: "Jul 2023",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "Udemy",
      name: "Real Ethical Hacking in 34 Hours: Certificated CSEH+CEH 2023",
      date: "May 2023",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "ISEA",
      name: "Certified Cyber Hygiene Practitioner (Ministry of Electronics and Information Technology)",
      date: "Dec 2022",
      expiry: null,
      id: "CDACHYD/ISEA/CHP/117474",
      link: "#",
    },
    {
      issuer: "HackerRank",
      name: "SQL (Intermediate)",
      date: "Oct 2022",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "HackerRank",
      name: "SQL (Basic)",
      date: "Oct 2022",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "EC-Council Learning",
      name: "SQL Injection Attacks",
      date: "Sep 2022",
      expiry: null,
      id: "3683264265371",
      link: "#",
    },
    {
      issuer: "Udemy",
      name: "Cyber security: OS security",
      date: "Sep 2022",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "HackerRank",
      name: "Java (Basic)",
      date: "Sep 2022",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "Udemy",
      name: "Linux command line",
      date: "Aug 2022",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "Cybrary",
      name: "Cloud Governance Principles",
      date: "Date Not Specified",
      expiry: null,
      id: null,
      link: "#",
    },
    {
      issuer: "SAKEC",
      name: "Advanced Hardware-Based Digital Forensic Investigations",
      date: "Date Not Specified",
      expiry: null,
      id: null,
      link: "#",
    },
  ]

  // Group certifications by issuer
  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.issuer]) {
      acc[cert.issuer] = []
    }
    acc[cert.issuer].push(cert)
    return acc
  }, {})

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
    <section id="certifications" className="py-20 bg-gray-950 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Licenses & Certifications</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Professional credentials validating my expertise and continuous learning in cybersecurity
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto space-y-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {Object.entries(groupedCertifications).map(([issuer, certs], issuerIndex) => (
            <motion.div
              key={issuer}
              variants={itemVariants}
              className={`bg-gray-900 rounded-lg p-6 border border-gray-800 transition-all duration-300 ${
                expandedIssuer === issuer ? "border-emerald-500 shadow-lg shadow-emerald-500/10" : ""
              }`}
            >
              <h3
                className="text-xl font-semibold mb-4 flex items-center cursor-pointer"
                onClick={() => setExpandedIssuer(expandedIssuer === issuer ? null : issuer)}
              >
                <motion.div
                  animate={{
                    rotate: expandedIssuer === issuer ? [0, 15, -15, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="h-5 w-5 text-emerald-500 mr-2" />
                </motion.div>
                <span>{issuer}</span>
                <motion.span className="ml-2 text-sm" animate={{ opacity: expandedIssuer === issuer ? 1 : 0 }}>
                  ({certs.length} certifications)
                </motion.span>
              </h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIssuer === issuer ? "auto" : 0,
                  opacity: expandedIssuer === issuer ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: expandedIssuer === issuer ? "visible" : "hidden" }}
              >
                {certs.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Issued: {cert.date}</span>
                          {cert.expiry && <span className="ml-2">• Expires: {cert.expiry}</span>}
                        </div>
                        {cert.id && <div className="text-gray-400">ID: {cert.id}</div>}
                        <div>
                          <Link
                            href={cert.link}
                            className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center group"
                          >
                            <ExternalLink className="h-3 w-3 mr-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            View Certificate
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate counter */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <motion.div
                className="text-4xl font-bold text-emerald-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {certifications.length}
              </motion.div>
              <p className="text-gray-400 mt-2">Total Certifications</p>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold text-emerald-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {Object.keys(groupedCertifications).length}
              </motion.div>
              <p className="text-gray-400 mt-2">Certification Providers</p>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold text-emerald-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {new Date().getFullYear() - 2022}
              </motion.div>
              <p className="text-gray-400 mt-2">Years of Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
