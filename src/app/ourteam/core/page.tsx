import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// Core Teams data structure
const teams = [
  {
    name: "Publicity Team",
    heads: [
      {
        id: 1,
        name: 'Publicity Head 1',
        role: 'Publicity Team Head',
        image: '/pImages/pubhead1.jpg',
        email: 'pubhead1@example.com',
        linkedin: 'https://linkedin.com/in/pubhead1',
        facebook: 'https://facebook.com/pubhead1'
      },
      {
        id: 2,
        name: 'Publicity Head 2',
        role: 'Publicity Team Head',
        image: '/pImages/pubhead2.jpg',
        email: 'pubhead2@example.com',
        linkedin: 'https://linkedin.com/in/pubhead2',
        facebook: 'https://facebook.com/pubhead2'
      }
    ],
    members: [
      {
        id: 1,
        name: 'Publicity Member 1',
        role: 'Publicity Team Member',
        image: '/pImages/pubmember1.jpg',
        email: 'pubmember1@example.com',
        linkedin: 'https://linkedin.com/in/pubmember1',
        facebook: 'https://facebook.com/pubmember1'
      },
      {
        id: 2,
        name: 'Publicity Member 2',
        role: 'Publicity Team Member',
        image: '/pImages/pubmember2.jpg',
        email: 'pubmember2@example.com',
        linkedin: 'https://linkedin.com/in/pubmember2',
        facebook: 'https://facebook.com/pubmember2'
      }
    ]
  },
  {
    name: "Logistics Team",
    heads: [
      {
        id: 1,
        name: 'Logistics Head 1',
        role: 'Logistics Team Head',
        image: '/pImages/loghead1.jpg',
        email: 'loghead1@example.com',
        linkedin: 'https://linkedin.com/in/loghead1',
        facebook: 'https://facebook.com/loghead1'
      },
      {
        id: 2,
        name: 'Logistics Head 2',
        role: 'Logistics Team Head',
        image: '/pImages/loghead2.jpg',
        email: 'loghead2@example.com',
        linkedin: 'https://linkedin.com/in/loghead2',
        facebook: 'https://facebook.com/loghead2'
      }
    ],
    members: [
      {
        id: 1,
        name: 'Logistics Member 1',
        role: 'Logistics Team Member',
        image: '/pImages/logmember1.jpg',
        email: 'logmember1@example.com',
        linkedin: 'https://linkedin.com/in/logmember1',
        facebook: 'https://facebook.com/logmember1'
      },
      {
        id: 2,
        name: 'Logistics Member 2',
        role: 'Logistics Team Member',
        image: '/pImages/logmember2.jpg',
        email: 'logmember2@example.com',
        linkedin: 'https://linkedin.com/in/logmember2',
        facebook: 'https://facebook.com/logmember2'
      }
    ]
  },
  {
    name: "Sponsorship and Marketing Team",
    heads: [
      {
        id: 1,
        name: 'Marketing Head 1',
        role: 'Marketing Team Head',
        image: '/pImages/markhead1.jpg',
        email: 'markhead1@example.com',
        linkedin: 'https://linkedin.com/in/markhead1',
        facebook: 'https://facebook.com/markhead1'
      },
      {
        id: 2,
        name: 'Marketing Head 2',
        role: 'Marketing Team Head',
        image: '/pImages/markhead2.jpg',
        email: 'markhead2@example.com',
        linkedin: 'https://linkedin.com/in/markhead2',
        facebook: 'https://facebook.com/markhead2'
      }
    ],
    members: [
      {
        id: 1,
        name: 'Marketing Member 1',
        role: 'Marketing Team Member',
        image: '/pImages/markmember1.jpg',
        email: 'markmember1@example.com',
        linkedin: 'https://linkedin.com/in/markmember1',
        facebook: 'https://facebook.com/markmember1'
      },
      {
        id: 2,
        name: 'Marketing Member 2',
        role: 'Marketing Team Member',
        image: '/pImages/markmember2.jpg',
        email: 'markmember2@example.com',
        linkedin: 'https://linkedin.com/in/markmember2',
        facebook: 'https://facebook.com/markmember2'
      }
    ]
  },
  {
    name: "Events Team",
    heads: [
      {
        id: 1,
        name: 'Events Head 1',
        role: 'Events Team Head',
        image: '/pImages/eventhead1.jpg',
        email: 'eventhead1@example.com',
        linkedin: 'https://linkedin.com/in/eventhead1',
        facebook: 'https://facebook.com/eventhead1'
      },
      {
        id: 2,
        name: 'Events Head 2',
        role: 'Events Team Head',
        image: '/pImages/eventhead2.jpg',
        email: 'eventhead2@example.com',
        linkedin: 'https://linkedin.com/in/eventhead2',
        facebook: 'https://facebook.com/eventhead2'
      }
    ],
    members: [
      {
        id: 1,
        name: 'Events Member 1',
        role: 'Events Team Member',
        image: '/pImages/eventmember1.jpg',
        email: 'eventmember1@example.com',
        linkedin: 'https://linkedin.com/in/eventmember1',
        facebook: 'https://facebook.com/eventmember1'
      },
      {
        id: 2,
        name: 'Events Member 2',
        role: 'Events Team Member',
        image: '/pImages/eventmember2.jpg',
        email: 'eventmember2@example.com',
        linkedin: 'https://linkedin.com/in/eventmember2',
        facebook: 'https://facebook.com/eventmember2'
      }
    ]
  }
];

export default function CoreTeamPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 sm:py-12">
      {teams.map((team, index) => (
        <div key={index} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 last:mb-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-gray-800">
            {team.name}
          </h2>
          
          {/* Team Heads Section */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-700">
              Team Heads
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
              {team.heads.map((member) => (
                <div key={member.id} 
                     className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative aspect-[4/5] w-full group">
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

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-black/50 transition-all duration-300 transform group-hover:translate-y-[-10px] group-hover:bg-transparent">
                    <h1 className="text-base sm:text-lg font-bold text-white mb-0.5 text-center">
                      {member.role}
                    </h1>
                    <p className="text-gray-200 text-center text-xs sm:text-sm mb-2">
                      {member.name}
                    </p>
                    <div className="flex justify-center space-x-6">
                      <a href={member.linkedin} 
                         className="transform hover:scale-110 transition-all duration-300">
                        <div className="p-1.5 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30">
                          <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                        </div>
                      </a>
                      <a href={member.facebook} 
                         className="transform hover:scale-110 transition-all duration-300">
                        <div className="p-1.5 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877f2]/30">
                          <FaFacebookF className="w-3.5 h-3.5 text-white" />
                        </div>
                      </a>
                      <a href={`mailto:${member.email}`} 
                         className="transform hover:scale-110 transition-all duration-300">
                        <div className="p-1.5 rounded-full bg-[#ea4335] hover:bg-gradient-to-r hover:from-[#ea4335] hover:to-[#ff5a4f] transition-all duration-300 hover:shadow-lg hover:shadow-[#ea4335]/30">
                          <MdEmail className="w-3.5 h-3.5 text-white" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-700">
              Team Members
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
              {team.members.map((member) => (
                <div key={member.id} 
                     className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative aspect-[4/5] w-full group">
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

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-black/50 transition-all duration-300 transform group-hover:translate-y-[-10px] group-hover:bg-transparent">
                    <h1 className="text-base sm:text-lg font-bold text-white mb-0.5 text-center">
                      {member.role}
                    </h1>
                    <p className="text-gray-200 text-center text-xs sm:text-sm mb-2">
                      {member.name}
                    </p>
                    <div className="flex justify-center space-x-6">
                      <a href={member.linkedin} 
                         className="transform hover:scale-110 transition-all duration-300">
                        <div className="p-1.5 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30">
                          <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                        </div>
                      </a>
                      <a href={member.facebook} 
                         className="transform hover:scale-110 transition-all duration-300">
                        <div className="p-1.5 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877f2]/30">
                          <FaFacebookF className="w-3.5 h-3.5 text-white" />
                        </div>
                      </a>
                      <a href={`mailto:${member.email}`} 
                         className="transform hover:scale-110 transition-all duration-300">
                        <div className="p-1.5 rounded-full bg-[#ea4335] hover:bg-gradient-to-r hover:from-[#ea4335] hover:to-[#ff5a4f] transition-all duration-300 hover:shadow-lg hover:shadow-[#ea4335]/30">
                          <MdEmail className="w-3.5 h-3.5 text-white" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
