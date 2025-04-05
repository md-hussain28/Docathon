"use client";

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-4">
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/30 via-[#0D0D0D]/60 to-[#0D0D0D] z-0"></div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="container mx-auto text-center relative z-10"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
//         >
//           <span className="block">Code the future of</span>
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1ABC9C] to-[#9B59B6]">
//             Healthcare with AI
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.9 }}
//           className="text-[#CCCCCC] text-xl md:text-2xl max-w-3xl mx-auto mb-10"
//         >
//           Join doctors and engineers in co-creating AI-driven solutions that transform healthcare
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.1 }}
//         >
//           <Button className="bg-gradient-to-r from-[#1ABC9C] to-[#9B59B6] hover:from-[#1ABC9C]/90 hover:to-[#9B59B6]/90 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_15px_rgba(27,188,156,0.5)] hover:shadow-[0_0_25px_rgba(27,188,156,0.7)] transition-all duration-300">
//             Register Now
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5, delay: 1.5 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="animate-bounce">
//             <a href="#about" className="text-[#CCCCCC] hover:text-white">
//               <div className="border-2 border-[#1ABC9C] rounded-full p-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M12 5v14M5 12l7 7 7-7" />
//                 </svg>
//               </div>
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }
//----------------------------------------------------------------
// import React, { useEffect, useState } from "react";

// const phrases = [
//   "Healthcare",
//   "Medicine",
//   "Diagnostics",
//   "Patient Care",
//   "Medical Research",
// ];

// const HeroSection: React.FC = () => {
//   const [currentPhrase, setCurrentPhrase] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState("");
//   const [delta, setDelta] = useState(200);

//   useEffect(() => {
//     const ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => clearInterval(ticker);
//   }, [text, currentPhrase, isDeleting, delta]);

//   const tick = () => {
//     const i = currentPhrase % phrases.length;
//     const fullPhrase = phrases[i];

//     if (isDeleting) {
//       setText(fullPhrase.substring(0, text.length - 1));
//       setDelta(100);
//     } else {
//       setText(fullPhrase.substring(0, text.length + 1));
//       setDelta(200);
//     }

//     if (!isDeleting && text === fullPhrase) {
//       setDelta(2000);
//       setIsDeleting(true);
//     } else if (isDeleting && text === "") {
//       setIsDeleting(false);
//       setCurrentPhrase(currentPhrase + 1);
//       setDelta(500);
//     }
//   };

//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-[-1]"></div>

//       <div className="max-w-4xl mx-auto animate-float">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-space">
//           <span className="text-white">Code the future of </span>
//           <br />
//           <span className="text-cyan typing-effect glow-text">{text}</span>
//           <br />
//           <span className="text-purple">with AI</span>
//         </h1>

//         <p className="text-xl md:text-2xl text-gray mb-8 max-w-2xl mx-auto">
//           Join doctors and engineers to build the next generation of AI-powered
//           healthcare solutions
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//           <a href="#register" className="cyberpunk-btn text-lg py-3 px-8">
//             Register Now
//           </a>
//           <a
//             href="#about"
//             className="border border-gray text-gray hover:text-white hover:border-white py-3 px-8 transition-colors duration-300"
//           >
//             Learn More
//           </a>
//         </div>

//         <div className="mt-16 text-gray text-sm">
//           <p className="mb-2">Join the revolution at</p>
//           <div className="flex justify-center items-center space-x-2">
//             <div className="w-3 h-3 rounded-full bg-cyan animate-pulse"></div>
//             <span className="font-mono">
//               April 15-30, 2025 • Virtual & In-Person
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Diagonal Background Divider */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-purple/10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)",
        }}
      />

      {/* Main Content Container */}
      <div className="relative max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-40 w-32 h-32 rounded-full
                     border border-cyan/30 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-20 w-24 h-24
                     bg-purple/10 rounded-lg backdrop-blur-sm"
        />

        {/* Main Title Section */}
        <div className="pl-20 space-y-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-gray">
              <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
              <span className="text-sm tracking-widest">
                LIVE EVENT • APRIL 15-30, 2025
              </span>
            </div>

            <h1 className="relative">
              <span className="text-[9rem] font-bold leading-none">
                <span className="text-white">DOC</span>
                <span className="text-cyan relative">
                  ATHON
                  <motion.span
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute -inset-8 bg-cyan/20 blur-2xl -z-10"
                  />
                </span>
              </span>
              <span className="block text-2xl text-gray mt-4">
                WHERE MEDICINE MEETS ARTIFICIAL INTELLIGENCE
              </span>
            </h1>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 relative">
            {[
              { number: "200+", label: "Participants" },
              { number: "25K+", label: "Prize Pool" },
              { number: "48h", label: "Of Innovation" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 bg-white/5 -z-10
                              group-hover:bg-white/10 transition-colors
                              duration-300 transform -skew-x-12"
                />
                <div className="p-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="relative px-8 py-4 bg-cyan text-background font-bold
                       overflow-hidden group"
            >
              <span
                className="relative z-10 group-hover:text-white
                             transition-colors duration-300"
              >
                Register Now
              </span>
              <div
                className="absolute inset-0 bg-purple transform scale-x-0
                            group-hover:scale-x-100 transition-transform
                            origin-left duration-300"
              />
            </motion.button>

            <a
              href="#learn-more"
              className="text-gray hover:text-white
                                           transition-colors duration-300"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Floating Tech Words */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2
                       transform rotate-90 text-8xl font-bold text-white/5"
        >
          HEALTHCARE
        </div>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            className="w-[1px] bg-gradient-to-b from-cyan/10 via-purple/10 to-transparent"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
