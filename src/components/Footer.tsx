'use client'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
]

const contactInfo = [
  { icon: Phone, content: '+1 (555) 123-4567' },
  { icon: Mail, content: 'contact@example.com' },
]

export default function Footer() {
  return (
    <BackgroundBeamsWithCollision
    className="w-full h-full md:h-auto bg-black"
    >
      <footer className="bg-dark text-white w-full">
        <div className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-sm:max-w-[80%] max-w-[1920px] mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:border-r border-gray-800/50 max-sm:border-b pb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold flex items-center justify-center px-4">Follow us</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Link 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.name}
                    className="block p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  >
                    <link.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-white transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold flex items-center justify-center px-4">Contact us</h2>
            <div className="space-y-4 flex flex-col items-center px-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                  <div className="p-2 rounded-full bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                      {item.content}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  )
}

