import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// Design Team Heads data
const designHeads = [
  {
    id: 1,
    name: 'Design Head 1',
    role: 'Design Team Head',
    image: '/pImages/designhead1.jpg',
    email: 'designhead1@example.com',
    linkedin: 'https://linkedin.com/in/designhead1',
    facebook: 'https://facebook.com/designhead1'
  },
  {
    id: 2,
    name: 'Design Head 2',
    role: 'Design Team Head',
    image: '/pImages/designhead2.jpg',
    email: 'designhead2@example.com',
    linkedin: 'https://linkedin.com/in/designhead2',
    facebook: 'https://facebook.com/designhead2'
  },
  {
    id: 3,
    name: 'Design Head 3',
    role: 'Design Team Head',
    image: '/pImages/designhead3.jpg',
    email: 'designhead3@example.com',
    linkedin: 'https://linkedin.com/in/designhead3',
    facebook: 'https://facebook.com/designhead3'
  }
];

// Design Team Members data
const designMembers = [
  {
    id: 1,
    name: 'Design Member 1',
    role: 'Design Team Member',
    image: '/pImages/designmember1.jpg',
    email: 'designmember1@example.com',
    linkedin: 'https://linkedin.com/in/designmember1',
    facebook: 'https://facebook.com/designmember1'
  },
  {
    id: 2,
    name: 'Design Member 2',
    role: 'Design Team Member',
    image: '/pImages/designmember2.jpg',
    email: 'designmember2@example.com',
    linkedin: 'https://linkedin.com/in/designmember2',
    facebook: 'https://facebook.com/designmember2'
  },
  {
    id: 3,
    name: 'Design Member 3',
    role: 'Design Team Member',
    image: '/pImages/designmember3.jpg',
    email: 'designmember3@example.com',
    linkedin: 'https://linkedin.com/in/designmember3',
    facebook: 'https://facebook.com/designmember3'
  },
  {
    id: 4,
    name: 'Design Member 4',
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
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-3 text-gray-800">
          Design Team Heads
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1200px] mx-auto">
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
                <h1 className="text-sm sm:text-base font-bold text-white mb-0.5 text-center">
                  {member.role}
                </h1>
                <p className="text-gray-200 text-center text-xs mb-1">
                  {member.name}
                </p>
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
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-3 text-gray-800">
          Design Team Members
        </h2>
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
                <h1 className="text-sm sm:text-base font-bold text-white mb-0.5 text-center">
                  {member.role}
                </h1>
                <p className="text-gray-200 text-center text-xs mb-1">
                  {member.name}
                </p>
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
