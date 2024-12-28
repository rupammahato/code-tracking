import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// Design Team Heads data
const designHeads = [
  {
    id: 1,
    name: 'Sunetra Pratihar',
    role: 'Design Team Head',
    image: '/pImages/designhead1.jpg',
    email: 'designhead1@example.com',
    linkedin: 'https://www.linkedin.com/in/sunetra-pratihar-6496ba22b',
    facebook: 'https://www.facebook.com/sunetra.pratihar.5?mibextid=ZbWKwL'
  },
  {
    id: 2,
    name: 'Samprit Saha',
    role: 'Design Team Head',
    image: '/pImages/designhead2.jpg',
    email: 'designhead2@example.com',
    linkedin: 'https://www.linkedin.com/in/sampritsaha',
    facebook: 'https://www.facebook.com/profile.php?id=100087482497244&mibextid=ZbWKwL'
  },
  {
    id: 3,
    name: 'Jiya Gupta',
    role: 'Design Team Head',
    image: '/pImages/designhead3.jpg',
    email: 'designhead3@example.com',
    linkedin: 'https://www.linkedin.com/in/jiya-gupta-251744283',
    facebook: 'https://www.facebook.com/profile.php?id=100087660277635&mibextid=ZbWKwL'
  }
];

// Design Team Members data
const designMembers = [
  {
    id: 1,
    name: 'Karina Dhaka',
    role: 'Design Team Member',
    image: '/pImages/designmember1.jpg',
    email: 'designmember1@example.com',
    linkedin: 'https://linkedin.com/in/designmember1',
    facebook: 'https://facebook.com/designmember1'
  },
  {
    id: 2,
    name: 'Khusi Kumari',
    role: 'Design Team Member',
    image: '/pImages/designmember2.jpg',
    email: 'designmember2@example.com',
    linkedin: 'https://linkedin.com/in/designmember2',
    facebook: 'https://facebook.com/designmember2'
  },
  {
    id: 3,
    name: 'Prince Choudhary',
    role: 'Design Team Member',
    image: '/pImages/designmember3.jpg',
    email: 'designmember3@example.com',
    linkedin: 'https://linkedin.com/in/designmember3',
    facebook: 'https://facebook.com/designmember3'
  },
  {
    id: 4,
    name: 'Amit Yadav',
    role: 'Design Team Member',
    image: '/pImages/designmember4.jpg',
    email: 'designmember4@example.com',
    linkedin: 'https://linkedin.com/in/designmember4',
    facebook: 'https://facebook.com/designmember4'
  }
];

export default function DesignTeamPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      {/* Design Team Heads Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[900px] mx-auto">
          {designHeads.map((member) => (
            <div key={member.id} 
                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative aspect-[5/6] w-full group">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={member.image}
                  alt={`${member.role}`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  priority={false}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 transition-all duration-300 transform group-hover:translate-y-[-5px] group-hover:bg-transparent">  
                <p className="text-gray-200 text-center font-bold text-lg sm:text-lg mb-1">
                  {member.name}
                </p>
                <h1 className="text-base sm:text-sm font-normal text-white mb-2 text-center">
                  {member.role}
                </h1>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} 
                     className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300">
                      <FaLinkedinIn className="w-3 h-3 text-white" />
                    </div>
                  </a>
                  <a href={member.facebook} 
                     className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300">
                      <FaFacebookF className="w-3 h-3 text-white" />
                    </div>
                  </a>
                  <a href={`mailto:${member.email}`} 
                     className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1 rounded-full bg-[#ea4335] hover:bg-gradient-to-r hover:from-[#ea4335] hover:to-[#ff5a4f] transition-all duration-300">
                      <MdEmail className="w-3 h-3 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Team Members Section */}
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-[1200px] mx-auto">
          {designMembers.map((member) => (
            <div key={member.id} 
                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative aspect-[5/6] w-full group">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={member.image}
                  alt={`${member.role}`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  priority={false}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 transition-all duration-300 transform group-hover:translate-y-[-5px] group-hover:bg-transparent">
               
                <p className="text-gray-200 text-center font-bold text-lg sm:text-lg mb-1">
                  {member.name}
                </p>
                <h1 className="text-base sm:text-sm font-normal text-white mb-2 text-center">
                  {member.role}
                </h1>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} 
                     className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300">
                      <FaLinkedinIn className="w-3 h-3 text-white" />
                    </div>
                  </a>
                  <a href={member.facebook} 
                     className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300">
                      <FaFacebookF className="w-3 h-3 text-white" />
                    </div>
                  </a>
                  <a href={`mailto:${member.email}`} 
                     className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1 rounded-full bg-[#ea4335] hover:bg-gradient-to-r hover:from-[#ea4335] hover:to-[#ff5a4f] transition-all duration-300">
                      <MdEmail className="w-3 h-3 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
