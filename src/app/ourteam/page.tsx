"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaGlobe } from 'react-icons/fa'

// Separate arrays for different roles
const headOfDepartment = {
  id: 1,
  name: 'Prof. Dhrubajyoti Sen',
  image: '/OurTeamImages/dhrubajyotiSen.png',
  title: 'Head of the Department',
  department: 'Department of Civil Engineering',
  email: 'djsen@civil.iitkgp.ac.in',
  website: 'https://professor1-website.com'
};

const chairpersons = [
  {
    id: 2,
    name: 'Prof. Mohammad Saud Afzal',
    image: '/OurTeamImages/Saudafzal.png',
    title: 'Chairperson (Megalith 2025)',
    department: 'Department of Civil Engineering',
    email: 'saud@civil.iitkgp.ac.in',
    website: 'http://www.facweb.iitkgp.ac.in/~saud/'
  },
  {
    id: 3,
    name: 'Prof. Kusam Sudhakar Reddy',
    image: '/OurTeamImages/KSReddy.png',
    title: 'Chairperson (Megalith 2025)',
    department: 'Department of Civil Engineering',
    email: 'ksreddy@civil.iitkgp.ac.in',
    website: 'https://professor3-website.com'
  }
];

// Executives data
const executives = [
  {
    id: 1,
    name: 'Naman Shankar',
    role: 'Vice President',
    image: '/OurTeamImages/p4.jpeg',
    email: 'vp@example.com',
    linkedin: 'https://linkedin.com/in/vp',
    facebook: 'https://facebook.com/vp'
  },
  {
    id: 2,
    name: 'Abhijeet Nigam',
    role: 'Executive Advisor',
    image: '/OurTeamImages/p5.jpg',
    email: 'advisor@example.com',
    linkedin: 'https://linkedin.com/in/advisor',
    facebook: 'https://facebook.com/advisor'
  },
  {
    id: 3,
    name: 'Aditya Pandey',
    role: 'Treasurer',
    image: '/OurTeamImages/p6.jpg',
    email: 'treasurer@example.com',
    linkedin: 'https://linkedin.com/in/treasurer',
    facebook: 'https://facebook.com/treasurer'
  }
];

const coordinators = [
  {
    id: 1,
    name: 'Islavath Mohan Naik',
    role: 'Events Coordinator',
    image: '/OurTeamImages/rupam.jpg',
    email: 'coordinator1@example.com',
    linkedin: 'https://linkedin.com/in/coordinator1',
    facebook: 'https://facebook.com/coordinator1'
  },
  {
    id: 2,
    name: 'Kartheek Valeti',
    role: 'Logistics Coordinator',
    image: '/OurTeamImages/c2.jpg',
    email: 'coordinator2@example.com',
    linkedin: 'https://linkedin.com/in/coordinator2',
    facebook: 'https://facebook.com/coordinator2'
  },
  {
    id: 3,
    name: 'Anjana Jawahar',
    role: 'Logistics Coordinator',
    image: '/OurTeamImages/c3.jpg',
    email: 'coordinator3@example.com',
    linkedin: 'https://linkedin.com/in/coordinator3',
    facebook: 'https://facebook.com/coordinator3'
  },
  {
    id: 4,
    name: 'Shivangi Singh',
    role: 'Publicity Coordinator',
    image: '/OurTeamImages/c4.jpg',
    email: 'coordinator4@example.com',
    linkedin: 'https://linkedin.com/in/coordinator4',
    facebook: 'https://facebook.com/coordinator4'
  },
  {
    id: 5,
    name: 'Pooja Saini',
    role: 'Sponsorship and Marketing Coordinator',
    image: '/OurTeamImages/c5.jpg',
    email: 'coordinator5@example.com',
    linkedin: 'https://linkedin.com/in/coordinator5',
    facebook: 'https://facebook.com/coordinator5'
  }
];


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Head of Department Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center mb-6 sm:mb-8 lg:mb-12 text-gray-800">
          Head of Department
        </h2>
        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative aspect-[4/5] w-full">
            <div className="absolute inset-0 bg-white">
              <Image
                src={headOfDepartment.image}
                alt={headOfDepartment.name}
                fill
                className="object-contain"
                priority={true}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/50">
              <h1 className="text-base sm:text-lg font-serif font-bold text-black mb-0.5 text-center">
                {headOfDepartment.name}
              </h1>
              <p className="text-gray-700 text-center text-xs sm:text-sm mb-1 font-serif">
                {headOfDepartment.title}
                <br />
                {headOfDepartment.department}
              </p>
              <div className="flex justify-center space-x-4">
                <a href={`mailto:${headOfDepartment.email}`}
                  className="text-black hover:text-gray-700">
                  <MdEmail className="w-4 h-4" />
                </a>
                <a href={headOfDepartment.website}
                  className="text-black hover:text-gray-700">
                  <FaGlobe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chairpersons Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center mb-6 sm:mb-8 lg:mb-12 text-gray-800">
          Chairpersons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {chairpersons.map((professor) => (
            <div key={professor.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative aspect-[4/5] w-full group">
              <div className="absolute inset-0 bg-white">
                <Image
                  src={professor.image}
                  alt={professor.name}
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>

              <div className="absolute inset-0"></div>

              <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/50">
                <h1 className="text-base sm:text-lg font-serif font-bold text-black mb-0.5 text-center">
                  {professor.name}
                </h1>
                <p className="text-gray-700 text-center text-xs sm:text-sm mb-1 font-serif">
                  {professor.title}
                  <br />
                  {professor.department}
                </p>
                <div className="flex justify-center space-x-4">
                  <a href={`mailto:${professor.email}`}
                    className="text-black hover:text-gray-700">
                    <MdEmail className="w-4 h-4" />
                  </a>
                  <a href={professor.website}
                    className="text-black hover:text-gray-700">
                    <FaGlobe className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Body Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center mb-6 sm:mb-8 lg:mb-12 text-gray-800">
          Executive Body
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {executives.map((executive) => (
            <div key={executive.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative aspect-[4/5] w-full group">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={executive.image}
                  alt={`${executive.role}`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  priority={false}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-black/50 transition-all duration-300 transform group-hover:translate-y-[-10px] group-hover:bg-transparent">
                <h1 className="text-base sm:text-lg font-bold text-white mb-0.5 text-center">
                  {executive.role}
                </h1>
                <p className="text-gray-200 text-center text-xs sm:text-sm mb-2">
                  {executive.name}
                </p>
                <div className="flex justify-center space-x-6">
                  <a href={executive.linkedin}
                    className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1.5 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30">
                      <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                    </div>
                  </a>
                  <a href={executive.facebook}
                    className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1.5 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877f2]/30">
                      <FaFacebookF className="w-3.5 h-3.5 text-white" />
                    </div>
                  </a>
                  <a href={`mailto:${executive.email}`}
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




      {/* Coordinators Section */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center mb-6 sm:mb-8 lg:mb-12 text-gray-800">
          Coordinators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coordinators.map((coordinator) => (
            <div key={coordinator.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative aspect-[4/5] w-full group">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={coordinator.image}
                  alt={`${coordinator.role}`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  priority={false}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-black/50 transition-all duration-300 transform group-hover:translate-y-[-10px] group-hover:bg-transparent">
                <h1 className="text-base sm:text-lg font-bold text-white mb-0.5 text-center">
                  {coordinator.role}
                </h1>
                <p className="text-gray-200 text-center text-xs sm:text-sm mb-2">
                  {coordinator.name}
                </p>
                <div className="flex justify-center space-x-6">
                  <a href={coordinator.linkedin}
                    className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1.5 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30">
                      <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                    </div>
                  </a>
                  <a href={coordinator.facebook}
                    className="transform hover:scale-110 transition-all duration-300">
                    <div className="p-1.5 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877f2]/30">
                      <FaFacebookF className="w-3.5 h-3.5 text-white" />
                    </div>
                  </a>
                  <a href={`mailto:${coordinator.email}`}
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





      {/* Team Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <Link
            href="/ourteam/design"
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span className="text-gray-800 font-medium group-hover:text-gray-600">
              Design Team
            </span>
            <div className="h-0.5 w-0 group-hover:w-full bg-gray-600 transition-all duration-300"></div>
          </Link>

          <Link
            href="/ourteam/web"
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span className="text-gray-800 font-medium group-hover:text-gray-600">
              Web Team
            </span>
            <div className="h-0.5 w-0 group-hover:w-full bg-gray-600 transition-all duration-300"></div>
          </Link>

          <Link
            href="/ourteam/core"
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span className="text-gray-800 font-medium group-hover:text-gray-600">
              Core Team
            </span>
            <div className="h-0.5 w-0 group-hover:w-full bg-gray-600 transition-all duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Close the main container div */}
    </div>
  )
}
