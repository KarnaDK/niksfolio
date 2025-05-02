"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Linkedin, Github, Send, Lock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }[] = []

    const createParticles = () => {
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: `rgba(16, 185, 129, ${Math.random() * 0.5 + 0.25})`,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        })
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }
      })
    }

    createParticles()
    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

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
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"></canvas>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or opportunities
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
              <Card className="bg-gray-800 border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Let's connect and discuss how we can work together</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    className="flex items-start space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-400">Thane, Maharashtra, India</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400">contact.nikhil02@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Linkedin className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-gray-400">
                        <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                          https://www.linkedin.com/in/heyynikhil/
                        </a>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-gray-400">
                        <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                        https://github.com/nikkk404
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Lock className="h-5 w-5 text-emerald-500" />
                    <h3 className="font-medium">Secure Communication</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    All messages sent through this form are encrypted and securely transmitted. Your privacy and data
                    security are important to me.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <Card className="bg-gray-800 border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-gray-700 border-gray-600 focus:border-emerald-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-700 border-gray-600 focus:border-emerald-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-gray-700 border-gray-600 focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px] bg-gray-700 border-gray-600 focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
