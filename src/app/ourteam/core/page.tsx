"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../ourteam.css";
import { motion } from "framer-motion";
import { BackButton } from "../components/BackButton";

// Core Teams data structure
const teams = [
  {
    name: "Publicity Team",
    heads: [
      {
        id: 1,
        name: "Mitesh Sahu",
        role: "Publicity Team Head",
        image: "/pImages/pubhead1.jpg",
        email: "pubhead1@example.com",
        linkedin: "https://www.linkedin.com/in/mitesh-sahu-4780b7259",
        facebook: "https://www.facebook.com/aryan.meena.54922?mibextid=ZbWKwL",
      },
      {
        id: 2,
        name: "Nakshatra Piplad",
        role: "Publicity Team Head",
        image: "/pImages/pubhead2.jpg",
        email: "pubhead2@example.com",
        linkedin: "https://www.linkedin.com/in/nakshatra-piplad-b90283254",
        facebook:
          "https://www.facebook.com/profile.php?id=100087394675451&mibextid=ZbWKwL",
      },
      {
        id: 3,
        name: "Alok Anand",
        role: "Publicity Team Head",
        image: "/pImages/pubhead2.jpg",
        email: "pubhead2@example.com",
        linkedin: "https://www.linkedin.com/in/alok-anand-5490b0257",
        facebook:
          "https://www.facebook.com/profile.php?id=100008408595358&mibextid=ZbWKwL",
      },
      {
        id: 4,
        name: "Pulivarthy Ephraim El Raj",
        role: "Publicity Team Head",
        image: "/pImages/pubhead2.jpg",
        email: "pubhead2@example.com",
        linkedin: "https://linkedin.com/in/pubhead2",
        facebook: "https://www.facebook.com/ephraimelraj.pulivarthi",
      },
    ],
    members: [
      {
        id: 1,
        name: "Shubham Suman",
        role: "Publicity Team Member",
        image: "/pImages/pubmember1.jpg",
        email: "pubmember1@example.com",
        linkedin: "https://linkedin.com/in/pubmember1",
        facebook: "https://facebook.com/pubmember1",
      },
      {
        id: 2,
        name: "Saugata Malakar",
        role: "Publicity Team Member",
        image: "/pImages/pubmember2.jpg",
        email: "pubmember2@example.com",
        linkedin: "https://linkedin.com/in/pubmember2",
        facebook: "https://facebook.com/pubmember2",
      },
      {
        id: 3,
        name: "Pratheeka",
        role: "Publicity Team Member",
        image: "/pImages/pubmember2.jpg",
        email: "pubmember2@example.com",
        linkedin: "https://linkedin.com/in/pubmember2",
        facebook: "https://facebook.com/pubmember2",
      },
    ],
  },
  {
    name: "Logistics Team",
    heads: [
      {
        id: 1,
        name: "Aman Meena",
        role: "Logistics Team Head",
        image: "/pImages/loghead1.jpg",
        email: "loghead1@example.com",
        linkedin: "https://linkedin.com/in/loghead1",
        facebook: "https://facebook.com/loghead1",
      },
      {
        id: 2,
        name: "Yashika",
        role: "Logistics Team Head",
        image: "/pImages/loghead2.jpg",
        email: "loghead2@example.com",
        linkedin: "https://www.linkedin.com/in/yashika-979318259",
        facebook:
          "https://www.facebook.com/profile.php?id=100087209785135&mibextid=ZbWKwL",
      },
    ],
    members: [
      {
        id: 1,
        name: "Pratik Ghosh",
        role: "Logistics Team Member",
        image: "/pImages/logmember1.jpg",
        email: "logmember1@example.com",
        linkedin: "https://linkedin.com/in/logmember1",
        facebook: "https://facebook.com/logmember1",
      },
      {
        id: 2,
        name: "Sneha Mudam",
        role: "Logistics Team Member",
        image: "/pImages/logmember1.jpg",
        email: "logmember1@example.com",
        linkedin: "https://linkedin.com/in/logmember1",
        facebook: "https://facebook.com/logmember1",
      },
    ],
  },
  {
    name: "Sponsorship and Marketing Team",
    heads: [
      {
        id: 1,
        name: "Karakvalasa Venkata Gnaneswar",
        role: "Marketing Team Head",
        image: "/pImages/markhead1.jpg",
        email: "markhead1@example.com",
        linkedin: "https://linkedin.com/in/markhead1",
        facebook: "https://facebook.com/markhead1",
      },
      {
        id: 2,
        name: "Sandeep Kumar Meena",
        role: "Marketing Team Head",
        image: "/pImages/markhead2.jpg",
        email: "markhead2@example.com",
        linkedin: "https://www.linkedin.com/in/sandeep-kumar-meena-6bab81256",
        facebook: "https://facebook.com/markhead2",
      },
      {
        id: 3,
        name: "Soham Mallik",
        role: "Marketing Team Head",
        image: "/pImages/markhead2.jpg",
        email: "markhead2@example.com",
        linkedin: "https://linkedin.com/in/markhead2",
        facebook: "https://facebook.com/markhead2",
      },
    ],
    members: [
      {
        id: 1,
        name: "Aryan Raj Chourasia",
        role: "Marketing Team Member",
        image: "/pImages/markmember1.jpg",
        email: "markmember1@example.com",
        linkedin: "https://linkedin.com/in/markmember1",
        facebook: "https://facebook.com/markmember1",
      },
      {
        id: 2,
        name: "Ashutosh Pallai",
        role: "Marketing Team Member",
        image: "/pImages/markmember2.jpg",
        email: "markmember2@example.com",
        linkedin: "https://linkedin.com/in/markmember2",
        facebook: "https://facebook.com/markmember2",
      },
      {
        id: 3,
        name: "Ayush Chandra Dey",
        role: "Marketing Team Member",
        image: "/pImages/markmember2.jpg",
        email: "markmember2@example.com",
        linkedin: "https://linkedin.com/in/markmember2",
        facebook: "https://facebook.com/markmember2",
      },
      {
        id: 4,
        name: "Gouni Sreenija",
        role: "Marketing Team Member",
        image: "/pImages/markmember2.jpg",
        email: "markmember2@example.com",
        linkedin: "https://linkedin.com/in/markmember2",
        facebook: "https://facebook.com/markmember2",
      },
    ],
  },
  {
    name: "Events Team",
    heads: [
      {
        id: 1,
        name: "Adrij Bhattacharya",
        role: "Events Team Head",
        image: "/pImages/eventhead1.jpg",
        email: "eventhead1@example.com",
        linkedin: "linkedin.com/in/adrij-bhattacharya-9180bb259",
        facebook: "https://www.facebook.com/adrij.bhattacharya.35/",
      },
      {
        id: 2,
        name: "Shrewa Shree Konika P Bharati",
        role: "Events Team Head",
        image: "/pImages/eventhead2.jpg",
        email: "eventhead2@example.com",
        linkedin:
          "https://www.linkedin.com/in/shrewa-shree-konika-p-bharati-768457258",
        facebook: "https://www.facebook.com/shrewashree.dey?mibextid=ZbWKwL",
      },
    ],
    members: [
      {
        id: 1,
        name: "Krupal Thakre",
        role: "Events Team Member",
        image: "/pImages/eventmember1.jpg",
        email: "eventmember1@example.com",
        linkedin: "https://linkedin.com/in/eventmember1",
        facebook: "https://facebook.com/eventmember1",
      },
      {
        id: 2,
        name: "Mayukh Mondal",
        role: "Events Team Member",
        image: "/pImages/eventmember2.jpg",
        email: "eventmember2@example.com",
        linkedin: "https://linkedin.com/in/eventmember2",
        facebook: "https://facebook.com/eventmember2",
      },
      {
        id: 3,
        name: "Ajayendra Kumar Bansod",
        role: "Events Team Member",
        image: "/pImages/eventmember2.jpg",
        email: "eventmember2@example.com",
        linkedin: "https://linkedin.com/in/eventmember2",
        facebook: "https://facebook.com/eventmember2",
      },
    ],
  },
];

export default function CoreTeamPage() {
  return (
    <div className="min-h-screen hero-background py-16 px-4 sm:px-6 lg:px-8">
      <BackButton />
      <div className="overlay" />
      <div className="content-container">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 last:mb-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-white"
            >
              {team.name}
            </motion.h2>

            {/* Team Heads Section */}
            <motion.div className="mb-12 sm:mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
                {team.heads.map((member) => (
                  <motion.div
                    key={member.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative aspect-[4/5] w-full group"
                  >
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
                      <p className="text-gray-200 text-center font-bold text-lg sm:text-lg mb-1">
                        {member.name}
                      </p>
                      <h1 className="text-base sm:text-sm font-normal text-white mb-2 text-center">
                        {member.role}
                      </h1>
                      <div className="flex justify-center space-x-6">
                        <a
                          href={member.linkedin}
                          className="transform hover:scale-110 transition-all duration-300"
                        >
                          <div className="p-1.5 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30">
                            <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                          </div>
                        </a>
                        <a
                          href={member.facebook}
                          className="transform hover:scale-110 transition-all duration-300"
                        >
                          <div className="p-1.5 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877f2]/30">
                            <FaFacebookF className="w-3.5 h-3.5 text-white" />
                          </div>
                        </a>
                        <a
                          href={`mailto:${member.email}`}
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

            {/* Team Members Section */}
            <motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
                {team.members.map((member) => (
                  <motion.div
                    key={member.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative aspect-[4/5] w-full group"
                  >
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
                      <p className="text-gray-200 text-center font-bold text-lg sm:text-lg mb-1">
                        {member.name}
                      </p>
                      <h1 className="text-base sm:text-sm font-normal text-white mb-2 text-center">
                        {member.role}
                      </h1>
                      <div className="flex justify-center space-x-6">
                        <a
                          href={member.linkedin}
                          className="transform hover:scale-110 transition-all duration-300"
                        >
                          <div className="p-1.5 rounded-full bg-[#0077b5] hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00a0dc] transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30">
                            <FaLinkedinIn className="w-3.5 h-3.5 text-white" />
                          </div>
                        </a>
                        <a
                          href={member.facebook}
                          className="transform hover:scale-110 transition-all duration-300"
                        >
                          <div className="p-1.5 rounded-full bg-[#1877f2] hover:bg-gradient-to-r hover:from-[#1877f2] hover:to-[#2998ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877f2]/30">
                            <FaFacebookF className="w-3.5 h-3.5 text-white" />
                          </div>
                        </a>
                        <a
                          href={`mailto:${member.email}`}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
