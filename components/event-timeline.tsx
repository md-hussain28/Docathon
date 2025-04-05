"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Lightbulb, Award, BookOpen, FileText, HelpCircle, ChevronDown, ChevronUp } from "lucide-react"

export default function EventTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="rounds" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Event <span className="text-[#9B59B6]">Timeline</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-[#CCCCCC] text-lg mb-12 text-center">
            Our hackathon is structured to maximize collaboration and innovation through multiple phases
          </motion.p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1ABC9C] to-[#9B59B6] z-0"></div>

            {/* Timeline nodes */}
            <motion.div variants={containerVariants} className="relative z-10">
              {/* Pre-Hackathon Workshops */}
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-start mb-16 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-2">Free Pre-Hackathon Workshops</h3>
                  <p className="text-[#CCCCCC] mb-4">
                    Prepare for the hackathon with our specialized workshops for both medical professionals and
                    engineers.
                  </p>
                  <button
                    onClick={() => toggleSection("workshops")}
                    className="inline-flex items-center text-[#1ABC9C] hover:text-[#1ABC9C]/80 transition-colors"
                  >
                    Learn more{" "}
                    {expandedSection === "workshops" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>

                  {expandedSection === "workshops" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#1ABC9C]/20 rounded-xl p-4"
                    >
                      <ul className="list-disc list-inside text-[#CCCCCC]">
                        <li>AI in Healthcare: Current Applications & Future Potential</li>
                        <li>Medical Data: Privacy, Ethics & Handling</li>
                        <li>Technical Workshop: Healthcare APIs & Medical Datasets</li>
                        <li>Collaborative Session: Identifying Healthcare Challenges</li>
                      </ul>
                    </motion.div>
                  )}
                </div>

                <div className="md:w-0 order-1 md:order-2 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#1ABC9C] border-4 border-[#0D0D0D] flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-[#0D0D0D]" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 order-3">
                  <div className="bg-[#0D0D0D]/30 backdrop-blur-sm border border-[#1ABC9C]/10 rounded-xl p-4">
                    <h4 className="font-semibold">Workshop Dates</h4>
                    <p className="text-[#CCCCCC]">October 1-15, 2023</p>
                    <p className="text-[#CCCCCC] text-sm mt-2">Virtual and in-person options available</p>
                  </div>
                </div>
              </motion.div>

              {/* Idea Shortlisting Round */}
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-start mb-16 relative">
                <div className="md:w-1/2 md:pr-12 order-2">
                  <div className="bg-[#0D0D0D]/30 backdrop-blur-sm border border-[#9B59B6]/10 rounded-xl p-4">
                    <h4 className="font-semibold">Submission Deadline</h4>
                    <p className="text-[#CCCCCC]">October 25, 2023</p>
                    <p className="text-[#CCCCCC] text-sm mt-2">Results announced: November 1, 2023</p>
                  </div>
                </div>

                <div className="md:w-0 order-1 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#9B59B6] border-4 border-[#0D0D0D] flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-[#0D0D0D]" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 md:text-left mt-4 md:mt-0 order-3 md:order-3">
                  <h3 className="text-2xl font-semibold mb-2">Idea Shortlisting Round</h3>
                  <p className="text-[#CCCCCC] mb-4">
                    Submit your innovative healthcare AI concept for review by our panel of experts.
                  </p>
                  <button
                    onClick={() => toggleSection("shortlisting")}
                    className="inline-flex items-center text-[#9B59B6] hover:text-[#9B59B6]/80 transition-colors"
                  >
                    Learn more{" "}
                    {expandedSection === "shortlisting" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>

                  {expandedSection === "shortlisting" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <div className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#9B59B6]/20 rounded-xl p-4 mb-4">
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-5 w-5 text-[#9B59B6] mr-2" />
                          <h4 className="font-semibold">Guidelines</h4>
                        </div>
                        <ul className="list-disc list-inside text-[#CCCCCC]">
                          <li>Teams must include at least one medical professional and one engineer</li>
                          <li>Proposals should address a specific healthcare challenge</li>
                          <li>Solutions must incorporate AI/ML technologies</li>
                          <li>Submissions include a 3-page concept paper and 2-minute video pitch</li>
                        </ul>
                      </div>

                      <div className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#9B59B6]/20 rounded-xl p-4 mb-4">
                        <div className="flex items-center mb-2">
                          <FileText className="h-5 w-5 text-[#9B59B6] mr-2" />
                          <h4 className="font-semibold">Resources</h4>
                        </div>
                        <ul className="list-disc list-inside text-[#CCCCCC]">
                          <li>Access to healthcare datasets (anonymized)</li>
                          <li>API documentation for medical systems integration</li>
                          <li>Mentorship from healthcare and AI experts</li>
                          <li>Technical infrastructure and cloud computing credits</li>
                        </ul>
                      </div>

                      <div className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#9B59B6]/20 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <HelpCircle className="h-5 w-5 text-[#9B59B6] mr-2" />
                          <h4 className="font-semibold">FAQs</h4>
                        </div>
                        <ul className="space-y-2 text-[#CCCCCC]">
                          <li>
                            <span className="font-medium">Q: Can I participate if I don't have a team?</span>
                            <br />
                            A: Yes! We have a team formation platform to connect medical professionals with engineers.
                          </li>
                          <li>
                            <span className="font-medium">Q: What kind of AI solutions are you looking for?</span>
                            <br />
                            A: Any AI solution that addresses a real healthcare challenge, from diagnostics to patient
                            care to administrative efficiency.
                          </li>
                          <li>
                            <span className="font-medium">Q: Is there any cost to participate?</span>
                            <br />
                            A: No, participation is completely free.
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Final Round */}
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-start relative">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-2">Final Round</h3>
                  <p className="text-[#CCCCCC] mb-4">
                    Selected teams will develop their prototypes and present to our panel of judges.
                  </p>
                  <button
                    onClick={() => toggleSection("final")}
                    className="inline-flex items-center text-[#1ABC9C] hover:text-[#1ABC9C]/80 transition-colors"
                  >
                    Learn more{" "}
                    {expandedSection === "final" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>

                  {expandedSection === "final" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#1ABC9C]/20 rounded-xl p-4"
                    >
                      <h4 className="font-semibold mb-2">Rules & Regulations</h4>
                      <ul className="list-disc list-inside text-[#CCCCCC] mb-4">
                        <li>Teams have 4 weeks to develop a working prototype</li>
                        <li>Weekly check-ins with assigned mentors are mandatory</li>
                        <li>Final presentations will be 10 minutes with 5 minutes for Q&A</li>
                        <li>
                          Solutions will be judged on innovation, feasibility, impact, and technical implementation
                        </li>
                      </ul>

                      <h4 className="font-semibold mb-2">Prizes</h4>
                      <ul className="list-disc list-inside text-[#CCCCCC]">
                        <li>1st Place: $50,000 in funding + incubation support</li>
                        <li>2nd Place: $25,000 in funding</li>
                        <li>3rd Place: $10,000 in funding</li>
                        <li>Special categories: Best UI/UX, Most Innovative Use of AI, Most Impactful Solution</li>
                      </ul>
                    </motion.div>
                  )}
                </div>

                <div className="md:w-0 order-1 md:order-2 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#1ABC9C] border-4 border-[#0D0D0D] flex items-center justify-center">
                    <Award className="h-4 w-4 text-[#0D0D0D]" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 order-3">
                  <div className="bg-[#0D0D0D]/30 backdrop-blur-sm border border-[#1ABC9C]/10 rounded-xl p-4">
                    <h4 className="font-semibold">Final Event</h4>
                    <p className="text-[#CCCCCC]">November 15-17, 2023</p>
                    <p className="text-[#CCCCCC] text-sm mt-2">In-person event with virtual participation options</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

