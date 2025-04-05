"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Activity, Dna, Microscope, Code, Database, Network, Cpu } from "lucide-react"

export default function DualComponents() {
  const doctorRef = useRef(null)
  const engineerRef = useRef(null)
  const isDoctorInView = useInView(doctorRef, { once: true, amount: 0.3 })
  const isEngineerInView = useInView(engineerRef, { once: true, amount: 0.3 })

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Specialized <span className="text-[#9B59B6]">Components</span>
        </h2>

        {/* For Doctors Section */}
        <section id="for-doctors" ref={doctorRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isDoctorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              For <span className="text-[#1ABC9C]">Medical Professionals</span>
            </h3>

            <div className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#1ABC9C]/20 rounded-2xl p-6 md:p-8 shadow-[0_0_15px_rgba(27,188,156,0.1)]">
              <h4 className="text-xl font-medium mb-6 text-center">Medical Insight Widget</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <MedicalInsightWidget />
                </div>

                <div className="flex flex-col justify-center">
                  <h5 className="text-lg font-medium mb-4">How It Works</h5>
                  <p className="text-[#CCCCCC] mb-6">
                    The Medical Insight Widget allows healthcare professionals to visualize patient data and medical
                    insights in real-time. Integrate your medical expertise with AI-powered analytics to identify
                    patterns and make data-driven decisions.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0D0D0D]/70 rounded-lg p-4 border border-[#1ABC9C]/10">
                      <Microscope className="h-6 w-6 text-[#1ABC9C] mb-2" />
                      <h6 className="font-medium mb-1">Diagnostic Support</h6>
                      <p className="text-[#CCCCCC] text-sm">AI-assisted diagnostic suggestions based on patient data</p>
                    </div>

                    <div className="bg-[#0D0D0D]/70 rounded-lg p-4 border border-[#1ABC9C]/10">
                      <Dna className="h-6 w-6 text-[#1ABC9C] mb-2" />
                      <h6 className="font-medium mb-1">Genomic Analysis</h6>
                      <p className="text-[#CCCCCC] text-sm">Integrate genomic data for personalized treatment plans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* For Engineers Section */}
        <section id="for-engineers" ref={engineerRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isEngineerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              For <span className="text-[#9B59B6]">Engineers</span>
            </h3>

            <div className="bg-[#0D0D0D]/50 backdrop-blur-sm border border-[#9B59B6]/20 rounded-2xl p-6 md:p-8 shadow-[0_0_15px_rgba(155,89,182,0.1)]">
              <h4 className="text-xl font-medium mb-6 text-center">Code Lab Panel</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <h5 className="text-lg font-medium mb-4">How It Works</h5>
                  <p className="text-[#CCCCCC] mb-6">
                    The Code Lab Panel provides engineers with a powerful environment to develop AI algorithms for
                    healthcare applications. Access medical datasets, APIs, and development tools to build innovative
                    solutions.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0D0D0D]/70 rounded-lg p-4 border border-[#9B59B6]/10">
                      <Database className="h-6 w-6 text-[#9B59B6] mb-2" />
                      <h6 className="font-medium mb-1">Medical Datasets</h6>
                      <p className="text-[#CCCCCC] text-sm">Access to anonymized healthcare data for training models</p>
                    </div>

                    <div className="bg-[#0D0D0D]/70 rounded-lg p-4 border border-[#9B59B6]/10">
                      <Network className="h-6 w-6 text-[#9B59B6] mb-2" />
                      <h6 className="font-medium mb-1">API Integration</h6>
                      <p className="text-[#CCCCCC] text-sm">
                        Connect with healthcare systems through standardized APIs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <CodeLabPanel />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

// Medical Insight Widget Component
function MedicalInsightWidget() {
  return (
    <div className="bg-[#0D0D0D] rounded-xl border border-[#1ABC9C]/30 p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-medium">Patient Vitals Monitor</h5>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#1ABC9C] mr-1"></div>
          <span className="text-xs text-[#1ABC9C]">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#0D0D0D]/80 rounded-lg p-3 border border-[#1ABC9C]/10">
          <div className="flex items-center mb-2">
            <Heart className="h-4 w-4 text-[#1ABC9C] mr-2" />
            <span className="text-sm">Heart Rate</span>
          </div>
          <div className="flex items-end">
            <span className="text-2xl font-bold">78</span>
            <span className="text-xs ml-1 mb-1 text-[#CCCCCC]">bpm</span>
          </div>
          <div className="mt-2 h-8 relative">
            <HeartRateGraph />
          </div>
        </div>

        <div className="bg-[#0D0D0D]/80 rounded-lg p-3 border border-[#1ABC9C]/10">
          <div className="flex items-center mb-2">
            <Activity className="h-4 w-4 text-[#9B59B6] mr-2" />
            <span className="text-sm">Blood Pressure</span>
          </div>
          <div className="flex items-end">
            <span className="text-2xl font-bold">120/80</span>
            <span className="text-xs ml-1 mb-1 text-[#CCCCCC]">mmHg</span>
          </div>
          <div className="mt-2 h-8 relative">
            <BPGraph />
          </div>
        </div>
      </div>

      <div className="bg-[#0D0D0D]/80 rounded-lg p-4 border border-[#1ABC9C]/10 mb-4">
        <h6 className="text-sm font-medium mb-3">AI Diagnostic Suggestions</h6>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-1 h-1 rounded-full bg-[#1ABC9C] mr-2"></div>
            <span className="text-xs text-[#CCCCCC]">Consider checking thyroid function (87% confidence)</span>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-1 rounded-full bg-[#9B59B6] mr-2"></div>
            <span className="text-xs text-[#CCCCCC]">Review medication interactions (73% confidence)</span>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-1 rounded-full bg-[#1ABC9C] mr-2"></div>
            <span className="text-xs text-[#CCCCCC]">Recommend sleep study (65% confidence)</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="text-xs text-[#1ABC9C] hover:text-[#1ABC9C]/80 transition-colors">
          View Full Patient History
        </button>
      </div>
    </div>
  )
}

// Heart Rate Graph Component
function HeartRateGraph() {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 20">
      <path
        d="M0,10 L5,10 L10,5 L15,15 L20,5 L25,15 L30,5 L35,15 L40,5 L45,10 L50,2 L55,18 L60,10 L65,10 L70,5 L75,15 L80,5 L85,15 L90,5 L95,10 L100,10"
        fill="none"
        stroke="#1ABC9C"
        strokeWidth="1"
      />
    </svg>
  )
}

// Blood Pressure Graph Component
function BPGraph() {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 20">
      <path
        d="M0,15 L10,13 L20,14 L30,10 L40,12 L50,8 L60,9 L70,7 L80,10 L90,6 L100,8"
        fill="none"
        stroke="#9B59B6"
        strokeWidth="1"
      />
      <path
        d="M0,18 L10,17 L20,16 L30,15 L40,16 L50,14 L60,15 L70,13 L80,15 L90,12 L100,14"
        fill="none"
        stroke="#9B59B6"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
    </svg>
  )
}

// Code Lab Panel Component
function CodeLabPanel() {
  return (
    <div className="bg-[#0D0D0D] rounded-xl border border-[#9B59B6]/30 p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-medium">AI Model Development</h5>
        <div className="flex items-center">
          <Cpu className="h-4 w-4 text-[#9B59B6] mr-1" />
          <span className="text-xs text-[#9B59B6]">Python</span>
        </div>
      </div>

      <div className="bg-[#0D0D0D]/80 rounded-lg p-3 border border-[#9B59B6]/10 mb-4 font-mono text-xs">
        <div className="flex items-center mb-2">
          <Code className="h-4 w-4 text-[#9B59B6] mr-2" />
          <span>medical_ai_model.py</span>
        </div>
        <div className="text-[#CCCCCC] overflow-x-auto">
          <pre className="whitespace-pre-wrap">
            <span className="text-[#9B59B6]">import</span> <span className="text-[#1ABC9C]">tensorflow as tf</span>
            <span className="text-[#9B59B6]">import</span> <span className="text-[#1ABC9C]">numpy as np</span>
            <span className="text-[#9B59B6]">from</span>{" "}
            <span className="text-[#1ABC9C]">sklearn.model_selection import train_test_split</span>
            <span className="text-[#9B59B6]">def</span>{" "}
            <span className="text-[#1ABC9C]">build_medical_model(input_shape, num_classes):</span>
            {"    "}model = tf.keras.Sequential([
            {"        "}tf.keras.layers.Input(shape=input_shape),
            {"        "}tf.keras.layers.Conv1D(64, 3, activation='relu'),
            {"        "}tf.keras.layers.MaxPooling1D(2),
            {"        "}tf.keras.layers.LSTM(128, return_sequences=True),
            {"        "}tf.keras.layers.Dropout(0.5),
            {"        "}tf.keras.layers.GlobalAveragePooling1D(),
            {"        "}tf.keras.layers.Dense(num_classes, activation='softmax')
            {"    "}])
            {"    "}
            <span className="text-[#9B59B6]">return</span> model
          </pre>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[#0D0D0D]/80 rounded-lg p-3 border border-[#9B59B6]/10">
          <h6 className="text-xs font-medium mb-2">Model Performance</h6>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Accuracy</span>
                <span>92.7%</span>
              </div>
              <div className="w-full bg-[#1D1D1D] rounded-full h-1.5">
                <div className="bg-[#9B59B6] h-1.5 rounded-full" style={{ width: "92.7%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Precision</span>
                <span>89.3%</span>
              </div>
              <div className="w-full bg-[#1D1D1D] rounded-full h-1.5">
                <div className="bg-[#9B59B6] h-1.5 rounded-full" style={{ width: "89.3%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0D0D0D]/80 rounded-lg p-3 border border-[#9B59B6]/10">
          <h6 className="text-xs font-medium mb-2">Training Status</h6>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs">Epoch 15/20</span>
            <span className="text-xs text-[#9B59B6]">75% Complete</span>
          </div>
          <div className="w-full bg-[#1D1D1D] rounded-full h-1.5 mb-2">
            <div className="bg-[#9B59B6] h-1.5 rounded-full" style={{ width: "75%" }}></div>
          </div>
          <div className="text-xs text-[#CCCCCC]">ETA: 12 minutes remaining</div>
        </div>
      </div>

      <div className="text-center">
        <button className="text-xs text-[#9B59B6] hover:text-[#9B59B6]/80 transition-colors">
          Open Full Development Environment
        </button>
      </div>
    </div>
  )
}

