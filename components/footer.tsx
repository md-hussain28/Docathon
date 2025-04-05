"use client"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 bg-[#0D0D0D]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1ABC9C] to-[#9B59B6] mr-3 flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1ABC9C] to-[#9B59B6]">
                Cellverse Docathon
              </h3>
            </div>

            <p className="text-[#CCCCCC] mb-6">
              Join us in revolutionizing healthcare through AI innovation. The Cellverse Docathon brings together
              medical professionals and engineers to create the future of healthcare technology.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1D1D1D] flex items-center justify-center text-[#CCCCCC] hover:text-[#1ABC9C] hover:bg-[#1D1D1D]/80 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1D1D1D] flex items-center justify-center text-[#CCCCCC] hover:text-[#1ABC9C] hover:bg-[#1D1D1D]/80 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1D1D1D] flex items-center justify-center text-[#CCCCCC] hover:text-[#1ABC9C] hover:bg-[#1D1D1D]/80 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1D1D1D] flex items-center justify-center text-[#CCCCCC] hover:text-[#1ABC9C] hover:bg-[#1D1D1D]/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#CCCCCC] hover:text-[#1ABC9C] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#rounds" className="text-[#CCCCCC] hover:text-[#1ABC9C] transition-colors">
                  Event Timeline
                </a>
              </li>
              <li>
                <a href="#for-doctors" className="text-[#CCCCCC] hover:text-[#1ABC9C] transition-colors">
                  For Doctors
                </a>
              </li>
              <li>
                <a href="#for-engineers" className="text-[#CCCCCC] hover:text-[#1ABC9C] transition-colors">
                  For Engineers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CCCCCC] hover:text-[#1ABC9C] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#1ABC9C] mr-2 mt-0.5" />
                <span className="text-[#CCCCCC]">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#1ABC9C] mr-2" />
                <span className="text-[#CCCCCC]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#1ABC9C] mr-2" />
                <span className="text-[#CCCCCC]">info@cellversedocathon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1D1D1D] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#CCCCCC] text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Cellverse Docathon. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a href="#" className="text-[#CCCCCC] hover:text-[#1ABC9C] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-[#1ABC9C] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-[#1ABC9C] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

