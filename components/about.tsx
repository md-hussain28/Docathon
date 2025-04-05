"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Stethoscope, Dna } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-[#1ABC9C]">Cellverse Docathon</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-[#CCCCCC] text-lg mb-12 text-center">
            Cellverse Docathon is a groundbreaking hackathon that brings together healthcare professionals and engineers
            to co-create AI-driven solutions that address real-world healthcare challenges. Our mission is to bridge the
            gap between medical expertise and technological innovation.
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#1ABC9C]/20 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(27,188,156,0.2)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1ABC9C]/10 flex items-center justify-center mr-4">
                  <Stethoscope className="h-6 w-6 text-[#1ABC9C]" />
                </div>
                <h3 className="text-xl font-semibold">For Medical Professionals</h3>
              </div>
              <p className="text-[#CCCCCC]">
                Share your expertise and insights on healthcare challenges that could benefit from AI solutions.
                Collaborate with engineers to bring your ideas to life and shape the future of healthcare technology.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#9B59B6]/20 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(155,89,182,0.2)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9B59B6]/10 flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-[#9B59B6]" />
                </div>
                <h3 className="text-xl font-semibold">For Engineers</h3>
              </div>
              <p className="text-[#CCCCCC]">
                Apply your technical skills to solve real healthcare problems. Work directly with medical professionals
                to understand the nuances of healthcare challenges and develop AI solutions that can make a meaningful
                impact.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#9B59B6]/20 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(155,89,182,0.2)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9B59B6]/10 flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-[#9B59B6]" />
                </div>
                <h3 className="text-xl font-semibold">AI-Driven Innovation</h3>
              </div>
              <p className="text-[#CCCCCC]">
                Explore cutting-edge AI technologies including machine learning, natural language processing, computer
                vision, and predictive analytics to create innovative healthcare solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#1ABC9C]/20 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(27,188,156,0.2)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1ABC9C]/10 flex items-center justify-center mr-4">
                  <Dna className="h-6 w-6 text-[#1ABC9C]" />
                </div>
                <h3 className="text-xl font-semibold">Transformative Impact</h3>
              </div>
              <p className="text-[#CCCCCC]">
                Create solutions that can revolutionize patient care, clinical workflows, medical research, and
                healthcare accessibility. Your innovations have the potential to improve lives and transform the
                healthcare industry.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

