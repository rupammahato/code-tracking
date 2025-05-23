"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import {
  containerVariants,
  headingVariants,
  cardVariants,
} from "./components/AnimationVariants";
import "./ourteam.css";
import { BackButton } from "./components/BackButton";

// Separate arrays for different roles
const headOfDepartment = {
  id: 1,
  name: "Prof. Dhrubajyoti Sen",
  image: "/OurTeamImages/dhrubajyotiSen.png",
  title: "Head of the Department",
  department: "Department of Civil Engineering",
  email: "djsen@civil.iitkgp.ac.in",
  website: "https://scholar.google.com/citations?user=7Gs3fXMAAAAJ&hl=en",
};

const chairpersons = [
  {
    id: 1,
    name: "Prof. Kusam Sudhakar Reddy",
    image: "/OurTeamImages/KSReddy.png",
    title: "Chairperson (Megalith 2025)",
    department: "Department of Civil Engineering",
    email: "ksreddy@civil.iitkgp.ac.in",
    website: "https://iitkgp.irins.org/profile/1591",
  },
  {
    id: 2,
    name: "Prof. Mohammad Saud Afzal",
    image: "/OurTeamImages/Saudafzal.png",
    title: "Chairperson (Megalith 2025)",
    department: "Department of Civil Engineering",
    email: "saud@civil.iitkgp.ac.in",
    website: "http://www.facweb.iitkgp.ac.in/~saud/",
  },
];

// Executives data
const executives = [
  {
    id: 1,
    name: "Naman Shankar",
    role: "Vice President",
    image: "/OurTeamImages/p4.jpeg",
    email: "vp@example.com",
    linkedin: "https://www.linkedin.com/in/naman-shankar-2a66b0238",
    facebook: "https://www.facebook.com/profile.php?id=100073325747138",
  },
  {
    id: 2,
    name: "Abhijeet Nigam",
    role: "Executive Advisor",
    image: "/OurTeamImages/p5.jpg",
    email: "advisor@example.com",
    linkedin: "https://www.linkedin.com/in/abhijeet-nigam-605967223",
    facebook: "https://www.facebook.com/abhijeet.nigam.5682",
  },
  {
    id: 3,
    name: "Aditya Pandey",
    role: "Treasurer",
    image: "/OurTeamImages/p6.jpg",
    email: "treasurer@example.com",
    linkedin: "https://www.linkedin.com/in/adityapandeyiitkgp",
    facebook: "https://www.facebook.com/profile.php?id=100077353116042",
  },
];

const coordinators = [
  {
    id: 1,
    name: "Islavath Mohan Naik",
    role: "Events Coordinator",
    image: "/OurTeamImages/rupa.jpg",
    email: "coordinator1@example.com",
    linkedin: "https://www.linkedin.com/in/mohan-naik-942569228",
    facebook: "https://www.facebook.com/profile.php?id=100013401311744",
  },
  {
    id: 2,
    name: "Kartheek Valeti",
    role: "Logistics Coordinator",
    image: "/OurTeamImages/c2.jpg",
    email: "coordinator2@example.com",
    linkedin: "https://www.linkedin.com/in/kartheek-valeti-3b1289229",
    facebook: "https://www.facebook.com/profile.php?id=100071355754133",
  },
  {
    id: 3,
    name: "Anjana Jawahar",
    role: "Logistics Coordinator",
    image: "/OurTeamImages/c3.jpg",
    email: "coordinator3@example.com",
    linkedin: "https://www.linkedin.com/in/anjana-jawahar-a28ba8204/",
    facebook: "https://www.facebook.com/anjana.jawahar.9/",
  },
  {
    id: 4,
    name: "Shivangi Singh",
    role: "Publicity Coordinator",
    image: "/OurTeamImages/c4.jpg",
    email: "coordinator4@example.com",
    linkedin: "https://www.linkedin.com/in/shivangi-singh-30aba0244",
    facebook: "https://www.facebook.com/profile.php?id=100075163550918",
  },
  {
    id: 5,
    name: "Pooja Saini",
    role: "Sponsorship and Marketing Coordinator",
    image: "/OurTeamImages/c5.jpg",
    email: "coordinator5@example.com",
    linkedin: "https://www.linkedin.com/in/pooja-saini-0919b3244",
    facebook:
      "https://www.facebook.com/profile.php?id=100076298028648&sk=about&section=year-overviews",
  },
];

export default function ProfilePage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev.add(id)));
    if (loadedImages.size === 10) {
      // Adjust number based on total images
      setImagesLoaded(true);
    }
  };

  return (
    <div className="min-h-screen hero-background py-16 px-4 sm:px-6 lg:px-8">
      <BackButton />
      <div className="overlay" />
      <div className="content-container max-w-5xl mx-auto">
        {!imagesLoaded && <LoadingSkeleton />}

        {/* Head of Department Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-8 py-12 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg mb-12"
          style={{ display: imagesLoaded ? "block" : "none" }}
        >
          <motion.h2
            variants={headingVariants}
            className="text-3xl font-serif font-bold text-center text-white mb-8"
          >
            Head of Department
          </motion.h2>
          <div className="flex flex-col items-center">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[280px] h-[350px] sm:h-[380px] rounded-lg overflow-hidden shadow-md group"
            >
              <Image
                src={headOfDepartment.image}
                alt={headOfDepartment.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 256px"
                onLoad={() => handleImageLoad(0)}
                onError={(e) => {
                  e.currentTarget.src = "/fallback-image.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 w-full p-4 bg-black/60 text-white transform transition-all duration-300 group-hover:translate-y-[-5px]">
                <h3 className="text-lg font-bold text-center">
                  {headOfDepartment.name}
                </h3>
                <p className="text-sm text-center">{headOfDepartment.title}</p>
                <div className="flex justify-center space-x-4 mt-3">
                  <a
                    href={`mailto:${headOfDepartment.email}`}
                    aria-label="Send email"
                    className="hover:scale-110 transition-all duration-300"
                  >
                    <div className="p-1.5 rounded-full bg-[#ea4335] hover:bg-gradient-to-r hover:from-[#ea4335] hover:to-[#ff5a4f] transition-all duration-300">
                      <MdEmail className="w-4 h-4 text-white" />
                    </div>
                  </a>
                  <a
                    href={headOfDepartment.website}
                    aria-label="Visit website"
                    className="hover:scale-110 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-1.5 rounded-full bg-[#2196f3] hover:bg-gradient-to-r hover:from-[#2196f3] hover:to-[#64b5f6] transition-all duration-300">
                      <FaGlobe className="w-4 h-4 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Chairpersons Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-8 py-12 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg mb-12"
        >
          <motion.h2
            variants={headingVariants}
            className="text-3xl font-serif font-bold text-center text-white mb-8"
          >
            Chairpersons
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {chairpersons.map((professor) => (
              <motion.div
                key={professor.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden relative aspect-[3/4] w-full max-w-[300px] mx-auto group"
              >
                <div className="absolute inset-0 bg-white">
                  <Image
                    src={professor.image}
                    alt={professor.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                  />
                </div>

                <div className="absolute inset-0"></div>

                <div className="absolute bottom-0 w-full p-2 bg-black/60 text-white">
                  <h1 className="text-base font-bold text-center">
                    {professor.name}
                  </h1>
                  <p className="text-sm text-center">
                    {professor.title}
                    <br />
                    {professor.department}
                  </p>
                  <div className="flex justify-center space-x-3 mt-3">
                    <a
                      href={`mailto:${professor.email}`}
                      className="hover:scale-110"
                    >
                      <MdEmail className="w-5 h-5 text-white" />
                    </a>
                    <a href={professor.website} className="hover:scale-110">
                      <FaGlobe className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Executive Body Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-8 py-12 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg mb-12"
        >
          <motion.h2
            variants={headingVariants}
            className="text-3xl font-serif font-bold text-center text-white mb-8"
          >
            Executive Body
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {executives.map((executive) => (
              <motion.div
                key={executive.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden relative aspect-[3/4] w-full max-w-[280px] mx-auto group"
              >
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
                  <p className="text-gray-200 text-center font-bold text-lg sm:text-lg mb-1">
                    {executive.name}
                  </p>
                  <h1 className="text-base sm:text-sm font-normal text-white mb-2 text-center">
                    {executive.role}
                  </h1>
                  <div className="flex justify-center space-x-6">
                    <a
                      href={executive.linkedin}
                      className="transform hover:scale-110 transition-all duration-300"
                    >
                      <div className="p-1.5 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30">
                        <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                      </div>
                    </a>
                    <a
                      href={executive.facebook}
                      className="transform hover:scale-110 transition-all duration-300"
                    >
                      <div className="p-1.5 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877f2]/30">
                        <FaFacebookF className="w-3.5 h-3.5 text-white" />
                      </div>
                    </a>
                    <a
                      href={`mailto:${executive.email}`}
                      className="transform hover:scale-110 transition-all duration-300"
                    >
                      <div className="p-1.5 rounded-full bg-[#ea4335] hover:bg-gradient-to-r hover:from-[#ea4335] hover:to-[#ff5a4f] transition-all duration-300 hover:shadow-lg hover:shadow-[#ea4335]/30">
                        <MdEmail className="w-3.5 h-3.5 text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coordinators Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-8 py-12 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg mb-12"
        >
          <motion.h2
            variants={headingVariants}
            className="text-3xl font-serif font-bold text-center text-white mb-8"
          >
            Coordinators
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coordinators.map((coordinator) => (
              <motion.div
                key={coordinator.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden relative aspect-[3/4] w-full max-w-[280px] mx-auto group"
              >
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
                  <p className="text-gray-200 text-center font-bold text-lg sm:text-lg mb-1">
                    {coordinator.name}
                  </p>
                  <h1 className="text-base sm:text-sm font-normal text-white mb-2 text-center">
                    {coordinator.role}
                  </h1>
                  <div className="flex justify-center space-x-6">
                    <a
                      href={coordinator.linkedin}
                      className="transform hover:scale-110 transition-all duration-300"
                    >
                      <div className="p-1.5 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30">
                        <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                      </div>
                    </a>
                    <a
                      href={coordinator.facebook}
                      className="transform hover:scale-110 transition-all duration-300"
                    >
                      <div className="p-1.5 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877f2]/30">
                        <FaFacebookF className="w-3.5 h-3.5 text-white" />
                      </div>
                    </a>
                    <a
                      href={`mailto:${coordinator.email}`}
                      className="transform hover:scale-110 transition-all duration-300"
                    >
                      <div className="p-1.5 rounded-full bg-[#ea4335] hover:bg-gradient-to-r hover:from-[#ea4335] hover:to-[#ff5a4f] transition-all duration-300 hover:shadow-lg hover:shadow-[#ea4335]/30">
                        <MdEmail className="w-3.5 h-3.5 text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            {["design", "web", "core"].map((team) => (
              <motion.div
                key={team}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/ourteam/${team}`}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg shadow-md 
                           hover:shadow-lg transition-all duration-300 group hover:bg-white/20 
                           w-full sm:w-auto block text-center"
                >
                  <span className="text-white font-medium group-hover:text-white">
                    {team.charAt(0).toUpperCase() + team.slice(1)} Team
                  </span>
                  <div className="h-0.5 w-0 group-hover:w-full bg-white transition-all duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
