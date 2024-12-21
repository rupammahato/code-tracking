import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// Web Team Heads data
const webHeads = [
  {
    id: 1,
    name: 'Web Head Name 1',
    role: 'Web Team Head',
    image: '/pImages/webhead1.jpg',
    email: 'webhead1@example.com',
    linkedin: 'https://linkedin.com/in/webhead1',
    facebook: 'https://facebook.com/webhead1'
  },
  {
    id: 2,
    name: 'Web Head Name 2',
    role: 'Web Team Head',
    image: '/pImages/webhead2.jpg',
    email: 'webhead2@example.com',
    linkedin: 'https://linkedin.com/in/webhead2',
    facebook: 'https://facebook.com/webhead2'
  }
];

// Web Team Members data
const webMembers = [
  {
    id: 1,
    name: 'Web Member Name 1',
    role: 'Web Developer',
    image: '/pImages/webmember1.jpg',
    email: 'webmember1@example.com',
    linkedin: 'https://linkedin.com/in/webmember1',
    facebook: 'https://facebook.com/webmember1'
  },
  {
    id: 2,
    name: 'Web Member Name 2',
    role: 'Web Developer',
    image: '/pImages/webmember2.jpg',
    email: 'webmember2@example.com',
    linkedin: 'https://linkedin.com/in/webmember2',
    facebook: 'https://facebook.com/webmember2'
  },
  {
    id: 3,
    name: 'Web Member Name 3',
    role: 'Web Developer',
    image: '/pImages/webmember3.jpg',
    email: 'webmember3@example.com',
    linkedin: 'https://linkedin.com/in/webmember3',
    facebook: 'https://facebook.com/webmember3'
  }
];

export default function WebTeamPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      {/* Web Team Heads Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-3 text-gray-800">
          Web Team Heads
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {webHeads.map((member) => (
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

      {/* Web Team Members Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-3 text-gray-800">
          Web Team Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webMembers.map((member) => (
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
